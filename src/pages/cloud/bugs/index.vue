<template>
  <div key="view--0">
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment">增加</button>
    <button @click="counterStore.decrement">减少</button>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
console.log(counterStore)
</script>
