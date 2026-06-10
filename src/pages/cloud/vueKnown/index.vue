<template>
  <div>
    <h1>EnvA</h1>
    <p>当前环境：{{ mode }} - {{ pageTitle }}</p>
  </div>
</template>

<script setup lang="ts">
const key = "VITE_PAGE_TIRTLE";
const mode = import.meta.env.VITE_MODE;
const pageTitle = import.meta.env[key];

console.log("import.meta", import.meta);
defineOptions({
  name: "EnvA",
});
</script>
