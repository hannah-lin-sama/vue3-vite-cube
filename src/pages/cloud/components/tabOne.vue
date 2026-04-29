<template>
  <div>
    <p>这里是tabOne 。。。。{{ tabName }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tabName = ref('本tabOne')
const promise: { message: string } = await new Promise(resolve => {
  resolve({ message: '测试await' })
})
tabName.value = promise.message

console.log(tabName.value)

defineOptions({
  name: 'TabOneView'
})
</script>
