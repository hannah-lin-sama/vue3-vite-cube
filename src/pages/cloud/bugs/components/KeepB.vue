<template>
  <div key="KeepB--0">
    <h2>这里是KeepB</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">改变消息</button>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUpdated, onUnmounted } from 'vue'

import { ref } from 'vue'

const message = ref('Hello Keep')

const changeMessage = () => {
  message.value = 'Hello KeepB ' + Date.now().toString()
}
onActivated(() => {
  console.log('KeepB activated')
})

onDeactivated(() => {
  console.log('KeepB deactivated')
})

onMounted(() => {
  console.log('KeepB mounted')
})

onUpdated(() => {
  console.log('KeepB updated')
})

onUnmounted(() => {
  console.log('KeepB unmounted')
})
</script>
