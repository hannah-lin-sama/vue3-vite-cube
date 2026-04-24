<template>
  <div>
    <p>age: {{ age }}</p>
    <p>dec: {{ dec }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

interface Props {
  age: number;
  dec?: string;
}

const props = withDefaults(defineProps<Props>(), {
  dec: "des",
  age: () => 18,
});

onMounted(() => {
  console.log(props);
  emit("change", { type: "测试" });
  emit("send", { age: 18 });
});

const emit = defineEmits<
  ((e: "change", data: { type: string }) => void) &
    ((e: "send", data: { age: number }) => void)
>();
</script>
