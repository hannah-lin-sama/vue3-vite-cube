<template>
  <div>
    <h2>这里是问题管理</h2>
    <!-- <ComPropsA title="问题管理" desc="这是描述" /> -->
    <!-- <DiffA /> -->
    <!-- <SuspenceA /> -->
    <!-- <SuspenceD /> -->
    <!-- <SuspenceB /> -->
    <SuspenseA />
  </div>
</template>
<script setup lang="ts">
// import ComPropsA from "./components/ComPropsA.vue";
// import DiffA from "./components/DiffA.vue";
// import SuspenceA from "./components/SuspenceA.vue";
// import SuspenceC from "./components/SuspenceC.vue";
// import SuspenceD from "./components/SuspenceD.vue";
// import SuspenceB from './components/SuspenceB.vue'
import SuspenseA from './components/SuspenseA.vue'
defineOptions({
  name: 'CloudBugsView'
})
</script>
