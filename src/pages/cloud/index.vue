<template>
  <div>
    <p>这里是云平台首页</p>
  </div>
</template>
<script setup lang="ts">
enum UserRole {
  Admin,
  Editor,
  Viewer,
}
console.log(UserRole.Admin);

defineOptions({
  name: "CloudIndexView",
});
</script>
