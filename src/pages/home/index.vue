<template>
  <div>
    <p>Home Index</p>
    <p @click="handleClick">Home Index</p>
    <p>Home Index</p>
    平层层
  </div>
</template>
<script lang="ts" setup>
// import { getFileExtension } from "@/common/utils";
const handleClick = () => {
  console.log('click')
  // console.log(getFileExtension("index.vue"));
}

defineOptions({
  name: 'HomeIndexView'
})
</script>
<style scoped lang="less">
p {
  color: @primary-color;
}
</style>
