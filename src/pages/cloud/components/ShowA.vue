<template>
  <div>
    <h2>show</h2>
    <button @click="show = !show">切换</button>
    <p v-if="show">这里是show</p>
    <p v-else>这里是hide</p>
  </div>
</template>

<script lang="ts" setup>
import { effect, reactive, ref } from 'vue'

const show = ref(true)

const reactiveArr = reactive(['a', 'b', 'c'])

effect(() => {
  console.log('reactiveArr', reactiveArr[0], reactiveArr[1])
})
</script>
