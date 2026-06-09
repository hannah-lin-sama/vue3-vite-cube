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
  const response = await fetch("https://localhost:8443/api/user");
  console.log("response", response);
};

const fetchData2 = async () => {
  const response = await fetch("/api1/user");
  console.log("response2", response);
};
defineOptions({
  name: "FetchBComponent",
});
</script>
