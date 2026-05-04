<template>
  <div>
    <p id="cdom">count 值</p>
    <button @click="handleClick">点击</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, effect } from 'vue'

const count = ref(0)

const handleClick = () => {
  count.value++
}
const doubleCount = computed(() => count.value * 2)

console.log(doubleCount.value)
effect(() => {
  console.log('doubleCount', doubleCount.value)
})
</script>
