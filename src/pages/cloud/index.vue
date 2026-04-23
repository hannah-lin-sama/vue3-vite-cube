<template>
  <p>{{ "这里是云平台首页" }}</p>
  <tabTwo v-model:age="age" v-model:dec="dec"> </tabTwo>
</template>
<script setup lang="ts">
import tabTwo from "@/pages/cloud/components/tabTwo.vue";
import { ref } from "vue";

const age = ref();
const dec = ref("desc");

defineOptions({
  name: "CloudIndexView",
});
</script>
