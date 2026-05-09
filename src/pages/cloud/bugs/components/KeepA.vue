<template>
  <div key="KeepA--0">
    <h2>这里是KeepA</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">改变消息</button>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUpdated, onUnmounted } from 'vue'

import { ref } from 'vue'

const message = ref('Hello KeepA')

const changeMessage = () => {
  message.value = 'Hello KeepA ' + Date.now().toString()
}
onActivated(() => {
  console.log('KeepA activated')
})

onDeactivated(() => {
  console.log('KeepA deactivated')
})

onMounted(() => {
  console.log('KeepA mounted')
})

onUpdated(() => {
  console.log('KeepA updated')
})

onUnmounted(() => {
  console.log('KeepA unmounted')
})
</script>
