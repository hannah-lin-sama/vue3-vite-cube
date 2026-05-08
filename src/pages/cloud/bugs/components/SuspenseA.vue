<template>
  <div key="div--0">
    <AsyncComA key="AsyncComA--0" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import LoaderError from '@/components/Error.vue'
import Loading from '@/components/Loading.vue'
const AsyncComA = defineAsyncComponent({
  // loader: () =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // 直接 reject，模拟网络错误
  //       reject(new Error("AsyncComA 加载失败：模拟网络超时"));
  //       // reject("加载失败");
  //     }, 1000);
  //   }),
  loader: () => import('./ComPropsA.vue'),
  errorComponent: LoaderError,
  loadingComponent: Loading,
  delay: 100,
  onError: (error, userRetry, userFail, retries) => {
    console.info('AsyncComA 加载失败:', error, userRetry, userFail, retries)
    // 重试3次
    if (retries < 3) {
      userRetry()
    } else {
      userFail()
    }
  }
})
</script>
