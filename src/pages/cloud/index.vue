<template>
  <p>{{ "这里是云平台首页" }}</p>
  <input v-foucs name="age" type="text" placeholder="please input" />
</template>
<script setup lang="ts">
import vFoucs from "@/directives/vFoucs";
defineOptions({
  name: "CloudIndexView",
  directives: {
    vFoucs,
  },
});
</script>
