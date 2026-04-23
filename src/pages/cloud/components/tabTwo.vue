<template>
  <div>
    <input type="text" name="age" v-model="age" />
    <input type="text" name="dec" v-model="dec" />
  </div>
</template>
<script setup lang="ts">
const age = defineModel<number>("age", {
  default: 20,
});
const dec = defineModel<string>("dec", {
  required: true,
});
</script>
