<template>
  <div>
    <AsyncComponent />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from 'vue'
import Loading from '@/components/Loading.vue'
import Fallback from '@/components/Fallback.vue'
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./ComPropsA.vue'),
  delay: 0,
  loadingComponent: Loading,
  errorComponent: Fallback
})

export default {
  components: {
    AsyncComponent
  }
}
</script>
