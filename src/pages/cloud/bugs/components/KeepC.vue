<template>
  <div key="KeepC--0">
    <h2>这里是KeepC</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">改变消息</button>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUpdated } from 'vue'

import { ref } from 'vue'

const message = ref('Hello KeepC')

const changeMessage = () => {
  message.value = 'Hello KeepC ' + Date.now().toString()
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
</script>
