<template>
  <div>
    <p id="cdom">count 值 {{ count }}</p>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, watchPostEffect, watchSyncEffect, onUpdated, onMounted } from 'vue'
const count = ref(0)

const handleClick = () => {
  count.value++
}

// 默认 pre
watchEffect(() => {
  console.log('Pre watchEffect count', count.value)
  const dom = document.getElementById('cdom') as HTMLElement
  console.log('pre-dom', dom, dom?.textContent)
})

watchPostEffect(() => {
  console.log('watchPostEffect count', count.value)
  const dom = document.getElementById('cdom') as HTMLElement
  console.log('post-dom', dom, dom?.textContent)
})

watchSyncEffect(() => {
  console.log('watchSyncEffect count', count.value)
  const dom = document.getElementById('cdom') as HTMLElement
  console.log('syncdom', dom, dom?.textContent)
})

onUpdated(() => {
  console.log('onUpdated count', count.value)
  const dom = document.getElementById('cdom') as HTMLElement
  console.log('update-dom', dom, dom?.textContent)
})

onMounted(() => {
  console.log('onMounted count', count.value)
  const dom = document.getElementById('cdom') as HTMLElement
  console.log('mounted-dom', dom, dom?.textContent)
})
</script>
