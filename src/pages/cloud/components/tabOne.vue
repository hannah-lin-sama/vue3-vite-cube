<template>
  <div>
    <input v-model.trim="tabName" />
    <input v-model.number="tabId" />
  </div>
</template>
<script setup lang="ts">
const [tabName, tabNameModifiers] = defineModel('tabName', {
  set(val: string) {
    return tabNameModifiers.upper ? val.toUpperCase() : val.toLowerCase()
  }
})
const [tabId, tabIdModifiers] = defineModel('tabId', {
  set(val: number) {
    const len = val.toString().length
    return tabIdModifiers.max ? (len <= 10 ? val : Number(val.toString().slice(0, 10))) : val
  }
})

defineOptions({
  name: 'TabOneView'
})
</script>
