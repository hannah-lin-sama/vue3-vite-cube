<template>
  <div>
    <h3>tabOne</h3>
    <div>
      <input v-model="input" type="text" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { watch } from 'vue'

const input = defineModel()
console.log(input)
watch(input, newVal => {
  console.log(newVal)
})

defineOptions({
  name: 'TabOneView'
})
</script>
