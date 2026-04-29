<template>
  <div>
    <h2>响应式对象</h2>
    <p>count 值 {{ info.name }}</p>
    <button @click="handleClick">按钮1</button>

    <h2>响应式数组</h2>
    <ul>
      <li v-for="item in reactiveArr" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, onUpdated, reactive, effect } from "vue";

const count = ref(0);
const firstCount = ref(0);

// const handleClick = () => {
//   // 批量更新，update 一次
//   count.value++;
//   firstCount.value++;
// };

watch(count, (newVal, oldVal) => {
  console.log("watch count 值", newVal, oldVal);
});

watch(firstCount, (newVal, oldVal) => {
  console.log("watch firstCount 值", newVal, oldVal);
});

onUpdated(() => {
  console.log("-----onUpdated ---");
});

const info = ref({
  name: "张三",
  age: 18,
});

// const handleClick = () => {
//   // 批量更新，update 一次
//   info.value.name = "李四";
//   info.value.age = 20;
// };

watch(
  info,
  (newVal, oldVal) => {
    console.log("watch info 值", newVal, oldVal);
  },
  { deep: true }
);

/** 响应式数组的更新 */

const reactiveArr = reactive<string[]>(["item1", "item2", "item3"]);

const handleClick = () => {
  // 非副作用函数，不会收集依赖
  // const item1 = reactiveArr[0];
  // const item2 = reactiveArr[1];

  runer();
};

const runer = effect(() => {
  // 副作用函数，会收集依赖
  console.log("effect 值", reactiveArr[0]);

  reactiveArr.push("item4");
});

/**
 * 响应式数组的更新 复杂数据
 */
const reactiveCopyArr = reactive([
  "item1",
  {
    list: ["child1", "child2"],
  },
  "item3",
]);

const sum = reactiveCopyArr.reduce((acc, item) => {
  console.log("acc", acc);
  console.log("item", item);
  return typeof item === "string" ? { ...acc, [item]: item } : acc;
}, {});
console.log("sum", sum);

// const handleClick = () => {
// 批量更新，update 一次
// reactiveArr.push("item4");
// reactiveArr.push("item5");
// 更新
// reactiveArr[0] = "索引修改item0";
// 更新
// reactiveArr.length = 0;
/*   const result = reactiveCopyArr.values();
  console.log("result", result);

  let res;
  do {
    res = result._next();
    console.log(res);
  } while (!res.done);
 */
// const result = reactiveCopyArr.find((item) => typeof item === "object");
// console.log("result", result);
// };

// reactive默认深度监听
watch(reactiveArr, (newVal, oldVal) => {
  // 新旧值是同一个引用
  console.log("watch reactiveArr 值", newVal, oldVal);
});
</script>
