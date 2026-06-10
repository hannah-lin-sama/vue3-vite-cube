<template>
  <div>
    <h1>AxiosA</h1>
  </div>
</template>

<script setup lang="ts">
import service from "@/service";
import { onMounted } from "vue";

onMounted(() => {
  // service.get("/api/hello").then((res) => {
  //   console.log("res", res);
  // });

  service({
    url: "/api/user",
    method: "get",
  }).then((res) => {
    console.log("res", res);
  });
});

defineOptions({
  name: "AxiosA",
});
</script>
