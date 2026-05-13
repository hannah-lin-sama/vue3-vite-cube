<template>
  <div key="div--0">
    <TemplateA message="这是一条信息">
      <p>这是段落1</p>
    </TemplateA>
  </div>
</template>
<script setup lang="ts">
import TemplateA from './components/TemplateA.vue'

defineOptions({
  name: 'CloudBugsView'
})
</script>
