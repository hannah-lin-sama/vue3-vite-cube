<template>
  <div>
    <p>这里是 tabTwo 标题</p>
    <slot name="body"></slot>
    <slot name="footer" :buttonName="info.buttonName"></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  info: {
    buttonName: string;
  };
}>();
</script>
