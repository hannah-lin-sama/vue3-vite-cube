<template>
  <div>
    <p ref="domRef">sub 值</p>
    <button @click="handleClick">点击</button>
  </div>
</template>
<script setup lang="ts">
// import { fi } from "element-plus/es/locale/index.mjs";
import { computed, ref, watch, watchEffect } from 'vue'
const count = ref(0)

const domRef = ref<HTMLParagraphElement>()
const sub = computed(() => {
  // count.value++; // 副作用！

  return Math.random()
  // return count.value;
})

const handleClick = () => {
  // count.value++;
  console.log('handleClick 值', sub.value)
}

const firstName = ref<string>('')
const lastName = ref<string>('')

// const fullName = computed({
//   get() {
//     return firstName.value + " " + lastName.value;
//   },
//   set(newValue: string) {
//     const [first = "", last = ""] = newValue.split(" ");
//     firstName.value = first;
//     lastName.value = last;
//   },
// });

// fullName.value = "Li Hi"; //会触发 setter，更新 firstName 和 lastName

// watch(
//   fullName,
//   (newVal, oldVal) => {
//     console.log("watch count 值", newVal, oldVal);
//   },
//   {
//     // immediate: true,
//     // deep: true,
//     // once: true,
//   }
// );

watchEffect(() => {
  console.log('watchEffect 值', firstName.value, lastName.value)
})
</script>
