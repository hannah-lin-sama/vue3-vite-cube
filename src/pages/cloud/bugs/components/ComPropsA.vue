<template>
  <div key="ComPropsA--0">
    <span>这里是文本节点</span>
    <p>{{ message }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted, onUpdated, onBeforeUpdate } from 'vue'
import focus from '@/directives/vFocus'

const message = ref('Hello')

const text = inject('message')
console.log(text)

onMounted(() => {
  console.log('ComPropsA mounted', text)
})

onBeforeUpdate(() => {
  console.log('ComPropsA beforeUpdate', text)
})

onUpdated(() => {
  console.log('ComPropsA updated', text)
})

defineOptions({
  name: 'ComPropsA',
  directives: {
    vFocus: focus
  }
})
</script>
