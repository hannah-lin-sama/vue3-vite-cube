<template>
  <div key="ComPropsA--0">
    这里是文本节点
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <p>段落11</p>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const message = ref('Hello')
</script>
