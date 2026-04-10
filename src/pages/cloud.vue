<script setup lang="ts">
import { ref as myRef } from 'vue'
import TabTwoView from '@/pages/cloud/components/tabTwo.vue'
import TabOneView from '@/pages/cloud/components/tabOne.vue'

const count = myRef(0)
console.log(count.value)

// 编译时添加 name 属性
defineOptions({
  name: 'CloudView',
})
</script>

<script lang="ts">
export const getDouble = () => 'xxxx'
</script>

<template>
  <div>
    <h3>cloud view</h3>
    <TabTwoView :len="10" :count="count" />
    <TabOneView />
  </div>
</template>
