<template>
  <div>
    <p ref="pDom">这是一个段落</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const pDom = useTemplateRef<HTMLParagraphElement | null>('pDom')

onMounted(() => {
  console.log(pDom.value)
})
</script>
