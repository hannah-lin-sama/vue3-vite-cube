<template>
  <div key="ComPropsA--0">
    <span>这里是文本节点</span>
    <p>{{ message }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
const message = ref('Hello')

const text = inject('message')
console.log(text)
</script>
