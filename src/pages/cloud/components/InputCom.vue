<template>
  <div>
    <input v-model="debounceValue" placeholder="请输入" />
    <p>Searching for: {{ debounceValue }}</p>
  </div>
</template>
<script setup lang="ts">
import { customRef } from 'vue'

// const handleInput = (e: InputEvent) => {
//   console.log("input", (e.target as HTMLInputElement).value);
// };

const debounceFun = (value: string, delay: number) => {
  let timer: number | null = null
  return customRef((track, trigger) => ({
    get: () => {
      track()

      return value
    },
    set: (newValue: string) => {
      console.log('set', newValue)
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        value = newValue
        trigger()
        timer = null
      }, delay)
    }
  }))
}

const debounceValue = debounceFun('', 3000)
</script>
