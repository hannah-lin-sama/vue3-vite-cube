<template>
  <p>{{ "这里是云平台首页" }}</p>
  <tabTwo ref="tabTwoRef" v-model:age="age" v-model:dec.upper="dec"> </tabTwo>
  <button @click="reset">重置</button>
</template>
<script setup lang="ts">
import tabTwo from "@/pages/cloud/components/tabTwo.vue";
import { ref } from "vue";
const tabTwoRef = ref<typeof tabTwo>();
const age = ref();
const dec = ref("desc");

const reset = () => {
  tabTwoRef.value?.reset();
};
defineOptions({
  name: "CloudIndexView",
});
</script>
