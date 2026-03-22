<template>
  <div class="index">
    <div>header</div>
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts" setup>
definePage({
  redirect: '/home',
  name: 'home_index',
  meta: {
    title: 'Home',
  },
})
defineOptions({
  name: 'IndexView',
})
</script>
