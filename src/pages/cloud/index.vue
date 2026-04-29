<template>
  <div class="cloud-index">
    <p class="title">这里是云平台首页新</p>
    <!-- <p class="title">这里是云平台首页新</p>
    <!-- <EffectA /> -->
    <!-- <EffectB /> -->
    <!-- <ComputeA /> -->
    <!-- <RefDom ref="comRef" /> -->
    <!-- <ReactiveA /> -->
    <RefA />
    <!-- <StyleA>
      <template #default>
        <p>这里是StyleA 插槽</p>
      </template>
    </StyleA> -->
  </div>
</template>
<script setup lang="ts">
// import StyleA from "@/pages/cloud/components/StyleA.vue";
// import ComputeA from "@/pages/cloud/components/ComputeA.vue";
// import RefDom from "@/pages/cloud/components/RefDom.vue";
// import ReactiveA from "@/pages/cloud/components/ReactiveA.vue";
import RefA from '@/pages/cloud/components/RefA.vue'
// import EffectA from "@/pages/cloud/components/EffectA.vue";
// import EffectB from "@/pages/cloud/components/EffectB.vue";

import { onMounted, ref, type ComponentPublicInstance } from 'vue'

const comRef = ref<ComponentPublicInstance | null>(null)

onMounted(() => {
  console.log('component ref', comRef.value?.$refs.pDom)
})
defineOptions({
  name: 'CloudIndexView'
})
</script>
