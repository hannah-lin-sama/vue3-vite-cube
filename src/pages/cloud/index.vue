<template>
  <div>
    <h1>Fetch https</h1>
    <el-button @click="fetchData"> CORS Fetch</el-button>
    <el-button @click="fetchData2">Fetch Data2</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
const fetchData = async () => {
  // 先发起一个请求建立 HTTP/3 连接
  const response = await fetch("https://localhost:8443", {});
  console.log("response", response);

  // 等待一小段时间让 Alt-Svc 生效
  await new Promise((r) => setTimeout(r, 100));

  const response1 = await fetch("https://localhost:8443/api/user");
  console.log("response1", response1);
};

const fetchData2 = async () => {
  const response = await fetch("/api3/user");
  console.log("response2", response);
};
defineOptions({
  name: "FetchCComponent",
});
</script>
