<template>
  <div>
    <h2>响应式对象</h2>
    <p>count 值</p>
    <button @click="handleClick">按钮1</button>

    <h2>响应式数组</h2>

    <h2>响应式 Map 解构</h2>
    <p>{{ shallowObj.info.list }}</p>

    <p>
      <button @click="handleClick2">按钮2</button>
    </p>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  readonly,
  watch,
  reactive,
  shallowReadonly,
  shallowReactive,
  effect,
  toRef,
  shallowRef,
  triggerRef
} from 'vue'

const shallowObj = shallowReactive({
  count: 0,
  name: 'shallowObj',
  list: [1, 2, 3],
  info: {
    age: 20,
    list: [4, 5, 6]
  }
})
// const handleClick = () => {
//   // 先访问 shallowObj.info，得到普通对象
//   // 然后修改该普通对象的 list 属性，赋值为新数组
//   // 由于 info 不是响应式代理，这个修改不会触发任何响应式更新。而且 list 也不是响应式数组
//   shallowObj.info.list = [7, 8, 9];
// };

effect(() => {
  console.log('shallowObj', shallowObj.info.list)
})

const info = reactive(new Set(['a', 'b', 'c']))

// const handleClick = () => {
//   info.add("d");
// };
effect(() => {
  console.log('info', info.has('a'))
})

// const datas = ref([3, 4, 5]);

// effect(() => {
//   console.log("datas", datas.value);
// });

// const handleClick = () => {
//   // 获取 datas.value 不会收集依赖，因为没有正在执行的副作用
//   datas.value.push(6);
// };

const count = shallowRef(0)

effect(() => {
  console.log('count', count.value)
})

const objShallow = shallowRef({ a: 1 })

const handleClick = () => {
  objShallow.value.a++
}

const handleClick2 = () => {
  triggerRef(objShallow)
}
effect(() => {
  console.log('effect副作用', objShallow.value.a)
})
</script>
