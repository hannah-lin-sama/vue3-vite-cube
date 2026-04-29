<template>
  <div>effect B</div>
</template>

<script lang="ts" setup>
import { effect, reactive } from 'vue'

const obj = reactive({
  count: 0,
  name: 'effectB',
  age: 20
})

effect(() => {
  console.log('effectB 值', obj.count, obj.name, obj.age)
})
</script>
