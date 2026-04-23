<template>
  <div>
    <input type="text" name="age" v-model.number="age" />
    <input type="text" name="dec" v-model="dec" />
  </div>
</template>
<script setup lang="ts">
const age = defineModel<number>("age", {
  default: 20,
});
const [dec, modifierDec] = defineModel<string, string>("dec", {
  required: true,
  get(value: string): string {
    console.log(value, "get-xxx", modifierDec);
    return modifierDec?.upper ? value.toUpperCase() : value;
  },
  set(value: string) {
    console.log(value, "xxx");

    return modifierDec?.upper ? value.toUpperCase() : value;
  },
});

console.log(dec, "xxx", modifierDec);

const reset = () => {
  age.value = 20;
  dec.value = "DESC";
};

defineExpose({
  reset,
});
</script>
