<template>
  <div>
    <p class="title">日志管理xxxx</p>
    <div>xxcd</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'

defineOptions({
  name: 'IndexLogsView',
})
onMounted(() => {
  console.log('IndexLogsView mounted')
})
</script>
<style scoped lang="less">
.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
</style>
