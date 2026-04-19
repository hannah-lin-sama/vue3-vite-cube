<script setup lang="ts">
import { ref as myRef } from 'vue'

const count = myRef(0)

const click = () => {
  count.value++
}

defineOptions({
  name: 'CloudView'
})
</script>

<template>
  <div>
    <h3>cloud view</h3>
    <button @click="click">click</button>
  </div>
</template>
