<template>
  <div>
    <h1>Fetch https</h1>
    <el-button @click="fetchData"> CORS Fetch</el-button>
    <el-button @click="fetchData2">Fetch Data2</el-button>

    <el-button @click="tcpTest">验证 http2 6个tcp</el-button>
    <el-button @click="tcpHTTP_1">验证 http1.1 6个tcp</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
const fetchData = async () => {
  const response1 = await fetch("https://localhost:8443/api/user");
  console.log("response1", response1);
};

const tcpTest = async () => {
  for (let i = 0; i < 10; i++) {
    fetch("/api3/tcp-slow").then((response) => {
      console.log(`response-${i}`, response);
    });
    fetch("/api3/tcp-slow1").then((response) => {
      console.log(`response-${i}`, response);
    });
  }
};

const tcpHTTP_1 = async () => {
  for (let i = 0; i < 10; i++) {
    fetch("/api1/tcp-slow").then((response) => {
      console.log(`response-${i}`, response);
    });
    fetch("/api1/tcp-slow1").then((response) => {
      console.log(`response-${i}`, response);
    });
  }
};

// const eventSource = new EventSource("/api3/sse-heartbeat", {
//   // withCredentials: true,
// });
// eventSource.onmessage = (event) => {
//   console.log("message", event);
// };
const fetchData2 = async () => {
  const response = await fetch("/api3/user");
  console.log("response2", response);
};
defineOptions({
  name: "IndexLogsView",
});
</script>
