<template>
  <div>
    <Suspense timeout="10" @fallback="handleFallback" @pending="handlePending" @resolve="handleResolve">
      <AsyncComponent />
    </Suspense>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() => import('./ComPropsA.vue'))

export default {
  components: {
    AsyncComponent
  },
  methods: {
    handleFallback() {
      console.log('handleFallback')
    },
    handlePending() {
      console.log('handlePending')
    },
    // 组件挂载完成后，调用 handleResolve 方法
    handleResolve() {
      console.log('handleResolve')
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
