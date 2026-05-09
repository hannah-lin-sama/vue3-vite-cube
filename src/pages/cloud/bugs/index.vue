<template>
  <div>
    <h2>这里是问题管理</h2>
    <KeepAlive key="keep-alive" max="4" :exclude="['KeepC']" :include="['KeepA', 'KeepB']">
      <component :is="components[tabId]" />
    </KeepAlive>

    <button @click="handleClick">切换组件</button>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowReadonly } from 'vue'
import KeepA from './components/KeepA.vue'
import KeepB from './components/KeepB.vue'
import KeepC from './components/KeepC.vue'

const components = shallowReadonly([null, KeepA, KeepB, KeepC])
const tabId = ref<number>(1)

const handleClick = () => {
  console.log(tabId.value)
  if (tabId.value > 0 && tabId.value < 3) {
    tabId.value++
  } else {
    tabId.value = 1
  }
}
defineOptions({
  name: 'CloudBugsView'
})
</script>
