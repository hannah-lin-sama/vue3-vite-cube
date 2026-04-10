<template>
  <div>
    <h3>tabTwo</h3>
    <p>len: {{ len }}</p>
    <p>count: {{ count }}</p>
  </div>
</template>
<script setup lang="ts">
// 方式1:运行时声明，直接传递一个对象
// defineProps({
//   len: {
//     type: Number,
//     default: 0,
//   },
//   count: {
//     type: Number,
//     default: 0,
//   },
// });

// 方式2:使用类型定义 props
const props = withDefaults(
  defineProps<{
    len: number
    count: number
  }>(),
  {
    len: 0,
    count: 0,
  },
)

console.log(props.len, props.count)
defineOptions({
  name: 'TabTwoView',
})
</script>
