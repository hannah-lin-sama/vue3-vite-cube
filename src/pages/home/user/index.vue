<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>
<script lang="ts" setup>
import { routes } from "vue-router/auto-routes";

console.log("user. routes", routes);
// definePage({
//   path: "user",
// });
defineOptions({
  name: "UserIndexView",
});
</script>
