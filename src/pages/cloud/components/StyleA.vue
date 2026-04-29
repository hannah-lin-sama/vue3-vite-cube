<template>
  <div>
    <p class="inner-dom title">这里是StyleA</p>
    <slot></slot>
    <!-- <p :class="cloudPlan.bg">这是cloud-plan模块的背景颜色</p>
    <p :class="cloudPlan.hx">这xxxxx</p> -->
  </div>
</template>
<script setup lang="ts">
// import { ref } from "vue";

// const color = ref("#f5f5f5");
defineOptions({
  name: "StyleAView",
});
</script>
