<template>
  <p>{{ "这里是云平台首页" }}</p>
  <tabTwo :info="info">
    <template #default>
      <p>这里是 插槽 default 部分</p>
    </template>
    <template #body>
      <p>这里是 插槽 body 部分</p>
    </template>
    <template #footer="{ data }">
      <button>{{ data.buttonName }}</button>
    </template>
  </tabTwo>
</template>
<script setup lang="ts">
import tabTwo from "@/pages/cloud/components/tabTwo.vue";
import { reactive } from "vue";

const info = reactive({
  buttonName: "提交",
});
defineOptions({
  name: "CloudIndexView",
});

defineSlots<{
  default(): void;
  body(): void;
  footer(data: { buttonName: string }): void;
}>();
</script>
