<template>
  <div>
    <router-view />

    <router-view name="logs" />
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "HomeDashboardView",
});
</script>
