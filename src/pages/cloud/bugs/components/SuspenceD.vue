<template>
  <div key="div--0">
    <Suspense
      timeout="10"
      key="Suspense--0"
      @fallback="handleFallback"
      @pending="handlePending"
      @resolve="handleResolve"
    >
      <template #default>
        <AsyncComponent key="AsyncComponent-A" />
      </template>
      <template #fallback>
        <Fallback key="Fallback-A" />
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import Fallback from '@/components/Fallback.vue'
import { defineAsyncComponent } from 'vue'
import Error from '@/components/Error.vue'
import Loading from '@/components/Loading.vue'
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./ComPropsA.vue'),
  delay: 0,
  loadingComponent: Loading,
  errorComponent: Error,
  suspensible: true //  false 加载显示loading； true 加载显示fallback
})

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
