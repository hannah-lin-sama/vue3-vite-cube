<template>
  <div>
    <p>日志管理xxxx</p>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

defineOptions({
  name: "IndexLogsView",
});
onMounted(() => {
  console.log("IndexLogsView mounted");
});
</script>
