<template>
  <div>
    <button @click="handleClick">点击</button>
    <p>count 值 {{ count }}</p>
  </div>
</template>
<script setup lang="ts">
import { effect, onUpdated, ref, watch } from 'vue'
const count = ref(0)

const handleClick = () => {
  // 批量更新，触发 watch 一次
  count.value++
  count.value++
  count.value++
}

onUpdated(() => {
  console.log('onUpdated count 值', count.value)
})
effect(() => {
  console.log('effect count 值', count.value)
})
// watch(count, (newVal, oldVal) => {
//   console.log("watch count 值", newVal, oldVal);
// });
</script>
