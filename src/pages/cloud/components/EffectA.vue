<template>
  <div>
    <p>color 值 {{ color }}</p>
    <button @click="color++">点击</button>
    <button @click="handleClick">监听</button>
    <button @click="handleClick2">手动执行</button>
  </div>
</template>
<script setup lang="ts">
import { effect, ref, onUpdated } from 'vue'
// import type { ReactiveEffect } from "vue";
const color = ref(0)

// 返回 runner 函数，用于手动触发监听
const runner = effect(
  () => {
    // color 变化时，会触发监听函数
    console.log('color 值', color.value)
  },
  {
    // scheduler 的默认行为并不会自动执行 effect 的回调函数
    scheduler: function () {
      // console.log("scheduler", this);
      // (this as ReactiveEffect).run();
      if (color.value < 6) {
        color.value++
      }
      console.log('scheduler执行了')
    },
    onStop: function () {
      console.log('onStop')
    }
    // allowRecurse: true,
  }
)

// 手动执行不受依赖变化影响
// 即使取消监听，手动执行仍会触发
const handleClick = () => {
  runner()
}

const handleClick2 = () => {
  // 停止effect监听
  runner.effect.stop()
}
onUpdated(() => {
  console.log('onUpdated')
})

console.log(' ---render--')
</script>
