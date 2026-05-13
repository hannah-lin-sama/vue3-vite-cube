<template>
  <div>
    <div>TemplateA</div>
    <div>count: {{ count }}</div>
    <p>{{ $.attrs.message }}</p>
    <div>
      <component :is="$slots.default" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
