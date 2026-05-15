<template>
  <div key="view--0">
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment">增加</button>
    <button @click="counterStore.decrement">减少</button>
    <br />
    <input type="text" v-focus v-model="message" />
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import focus from '@/directives/vFocus'
import { ref, onBeforeUpdate } from 'vue'
const message = ref('Hello')

const counterStore = useCounterStore()
console.log(counterStore)

onBeforeUpdate(() => {
  console.log('ComPropsA beforeUpdate', counterStore.count)
})

defineOptions({
  name: 'ComPropsA',
  directives: {
    focus: focus
  }
})
</script>
