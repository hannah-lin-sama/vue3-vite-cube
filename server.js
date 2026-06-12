// server.js
import { createSecureServer } from "@currentspace/http3";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = 8444;

const options = {
  key: fs.readFileSync("./ssl-local/localhost+2-key.pem"),
  cert: fs.readFileSync("./ssl-local/localhost+2.pem"),
  allowHTTP1: true, // 关键选项
};

// 创建 HTTP/3 服务器，并指定静态文件目录（Vite 的默认构建输出目录为 dist）
const staticDir = path.join(__dirname, "dist");

const server = createSecureServer(options);
server.on("stream", (stream, headers) => {
  const pathUrl = headers[":path"].substring(15);
  const method = headers[":method"];
  console.log("pathUrl--", pathUrl, method);
  const reqPath = pathUrl === "/" || pathUrl === "" ? "/index.html" : pathUrl;

  const filePath = path.join(staticDir, reqPath);

  const responseHeaders = {
    ":status": "200",
    "alt-svc": `h3=":${PORT}"; ma=86400`,
  };

  if (method === "HEAD") {
    stream.respond(responseHeaders, { endstream: "true" });
    // stream.end(); // 无 body
    return;
  }

  // 简单的静态文件服务逻辑
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("err--");
      stream.respond({ ":status": "404", "alt-svc": `h3=":${PORT}"; ma=86400` });
      stream.end("Not Found");
      return;
    }

    console.log("here--");

    const ext = path.extname(filePath);
    let contentType = "text/plain";
    if (ext === ".html") contentType = "text/html";
    else if (ext === ".js") contentType = "application/javascript";
    else if (ext === ".css") contentType = "text/css";

    stream.respond({
      ":status": "200",
      "alt-svc": `h3=":${PORT}"; ma=86400`,
      "content-type": contentType,
      // 关键：添加 Alt-Svc 响应头，通知浏览器该服务支持 HTTP/3 升级
    });
    stream.end(data);
  });
});

server.on("request", (req, res) => {
  console.log("request--");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.setHeader("Alt-Svc", `h3=":${PORT}"; ma=86400`);
  res.end();
});

// 监听会话事件
server.on("session", (session) => {
  console.log(
    `新会话: ${session.remoteAddress}:${session.remotePort} [ALPN: ${session.alpnProtocol}]`,
  );
});

server.on("error", (err) => {
  console.error("服务器错误:", err);
});

server.on("listening", () => {
  console.log(`HTTP/3 server is running at https://:::${PORT}`);
});

server.listen(PORT, "::");
