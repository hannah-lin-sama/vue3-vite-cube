<template>
  <TabOne v-model:tabName.upper="name" v-model:tabId.max="id" />
</template>

<script setup lang="ts">
import TabOne from '@/pages/cloud/components/tabOne.vue'
import { ref } from 'vue'

const name = ref('CloudView')
const id = ref(123)

defineOptions({
  name: 'CloudView'
})
</script>
