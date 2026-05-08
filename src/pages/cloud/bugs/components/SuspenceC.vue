<template>
  <div>
    <Suspense timeout="10" @fallback="handleFallback" @pending="handlePending" @resolve="handleResolve">
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <Fallback />
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import Fallback from '@/components/Fallback.vue'
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() => import('./ComPropsA.vue'))

export default {
  components: {
    AsyncComponent,
    Fallback
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
  },
  onErrorCaptured(error: ErrorEvent) {
    console.log(error)
  }
}
</script>
