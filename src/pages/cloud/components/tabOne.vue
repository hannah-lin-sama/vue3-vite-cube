<template>
  <div>
    <h2>手动控制</h2>
    <button @click="handleBtn">点击</button>
    <button @click="handleClick">监听</button>
    <button @click="handleStop">取消监听</button>
  </div>
</template>
<script setup lang="ts">
import { effect, ref } from 'vue'
const color = ref(0)

// 返回 runner 函数，用于手动触发监听
const runner = effect(() => {
  console.log('color 值', color.value)
})

const handleBtn = () => {
  color.value++
}

// 手动执行不受依赖变化影响
const handleClick = () => {
  runner()
}

const handleStop = () => {
  runner.effect.stop()
}
</script>
