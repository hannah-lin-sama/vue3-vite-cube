<template>
  <p>{{ "这里是云平台首页" }}</p>
  <Suspense>
    <tabTwo :age="age" :dec="dec" @change="changeAge" @send="changeAge"> </tabTwo>
  </Suspense>
</template>
<script setup lang="ts">
import tabTwo from "@/pages/cloud/components/tabTwo.vue";
import { ref } from "vue";

const age = ref();
const dec = ref("descxxxxxxxxxxxx----xxxxxxx.   xxx.    xxxx");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeAge = (data: any) => {
  console.log(data);
};
defineOptions({
  name: "CloudIndexView",
});
</script>
