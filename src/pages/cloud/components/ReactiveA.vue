<template>
  <div>
    <p>count 值 {{ reactiveObj.count }}</p>
    <button @click="handleClick">按钮1</button>
    <br />
    <button @click="handleClick2">按钮2</button>
  </div>
</template>
<script setup lang="ts">
import { reactive, watch, shallowReactive, readonly } from "vue";

// ============= 一、reactive 对象=====================开始
const reactiveObj = reactive({
  count: 0, // 响应式
  nested: {
    value: 1,
  },
  arr: [1, 2, 3],
});

console.log("reactiveObj", reactiveObj);

// const handleClick = () => {
//   // 会触发 watch 监听，因为 count 是响应式的
//   reactiveObj.count++;
// };

// const handleClick2 = () => {
//   // 会触发 watch 监听，数组是响应式的，但引用没有改变
//   // reactiveObj.arr[4] = 4;

//   // 会触发，数组的引用没有发生改变
//   // reactiveObj.arr.push(4);

//   // 会触发，数组的引用发生了改变
//   reactiveObj.arr = [4, 5, 6];
// };

watch(
  () => reactiveObj.count,
  (newVal, oldVal) => {
    console.log("watch reactiveObj.count 值", newVal, oldVal);
  }
);
watch(reactiveObj, (newVal, oldVal) => {
  // 新旧值 是同一个引用
  console.log("watch reactiveObj 值", newVal, oldVal);
});

watch(reactiveObj.arr, (newVal, oldVal) => {
  // 新旧值 是同一个引用
  console.log("1、watch reactiveObj.arr 值", newVal, oldVal);
});

// 通过 getter 函数返回数组引用，Vue 默认只比较引用是否改变
watch(
  () => reactiveObj.arr,
  (newVal, oldVal) => {
    // 新旧值 是不同的引用
    console.log("2、getter watch reactiveObj.arr 值", newVal, oldVal);
  }
);

// =========== 二、reactive 数组=====================开始
const reactiveArr = reactive([1, 1]);

console.log("reactiveArr", reactiveArr);

const handleClick = () => {
  // 会触发 watch 监听，因为数组 是响应式的
  reactiveArr.push(4);

  // reactiveArr[4] = 4;
};

const handleClick2 = () => {};

// reactive 会默认监听所有属性
watch(reactiveArr, (newVal, oldVal) => {
  // 新旧值相同，是同一个引用
  console.log("1、watch reactiveArr 值", newVal, oldVal);
});

// 通过 getter 函数返回数组引用，Vue 默认只比较引用是否改变
watch(
  () => reactiveArr,
  (newVal, oldVal) => {
    console.log("2、getter watch reactiveArr 值", newVal, oldVal);
  },
  {
    deep: true,
  }
);

// ============= shallowReactive 对象=====================开始

const shallowState = shallowReactive({
  count: 0, // 响应式
  nested: {
    // nested 本身是响应式（第一层），但其内部的 value 不是
    value: 1,
  },
  arr: [1, 2, 3], // arr 是响应式（第一层），但数组内的元素不是响应式
});

console.log("shallowState", shallowState);

// const handleClick = () => {
//   // 会触发 watch 监听，因为 count 是响应式的
//   shallowState.count++;
// };

// const handleClick2 = () => {
//   // 不会触发 watch 监听，因为数组元素不是响应式的
//   shallowState.arr[4] = 4;

//   // 不会触发，数组的引用没有发生改变
//   // shallowState.arr.push(4);

//   // 会触发，数组的引用发生了改变
//   // shallowState.arr = [4, 5, 6];
// };

watch(
  () => shallowState.count,
  (newVal, oldVal) => {
    // 新旧值 是同一个引用
    console.log("watch shallowState.count 值", newVal, oldVal);
  }
);

watch(shallowState, (newVal, oldVal) => {
  // 新旧值 是同一个引用
  console.log("watch shallowState 值", newVal, oldVal);
});

// ❌ 直接监听 shallowState.arr 会发出警告、因为数组元素不是响应式的
// watch(shallowState.arr, (newVal, oldVal) => {
//   console.log("watch shallowState.arr 值", newVal, oldVal);
// });
watch(
  () => shallowState.arr,
  (newVal, oldVal) => {
    console.log("watch shallowState.arr 值", newVal, oldVal);
  }
);

// ============= readonly 对象=====================开始
const readstate = readonly({});

// const handleClick = () => {
//   // 直接修改单个属性
//   obj.count++;
//   // 新增属性
//   obj.extra = "extra";
//   // 删除属性
//   delete obj.age;
//   // 批量修改属性
//   Object.assign(obj, {
//     count: 100,
//     name: "李四",
//     date: "2026-01-01",
//   });
// };

// const handleClick2 = () => {
//   // 直接修改数组元素
//   const item = Math.random();
//   arr.push(item);
// };
</script>
