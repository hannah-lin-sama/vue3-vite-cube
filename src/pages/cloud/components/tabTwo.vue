<template>
  <div>
    <p>这里是 tabTwo 标题</p>
    <template v-for="(_, name) in slots" :key="name">
      <slot :name="name" :data="info"></slot>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useSlots } from "vue";

defineProps<{
  info: {
    buttonName: string;
  };
}>();

const slots = useSlots();
</script>
