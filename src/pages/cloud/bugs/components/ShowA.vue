<template>
  <div>
    <p>这里是云平台首页新</p>
    <RefDom ref="comRef" />
  </div>
</template>
<script setup lang="ts">
import RefDom from '@/pages/cloud/components/RefDom.vue'
import { onMounted, ref, type ComponentPublicInstance } from 'vue'

const comRef = ref<ComponentPublicInstance | null>(null)

onMounted(() => {
  console.log('component ref', comRef.value?.$refs.pDom)
})

defineOptions({
  name: 'CloudIndexView'
})
</script>
