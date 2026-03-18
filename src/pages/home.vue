<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <div class="aside">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/home/user">用户中心</router-link>
        </li>
        <li>
          <router-link to="/home/role">角色管理</router-link>
        </li>
      </ul>
    </div>
    <!-- 主内容区域 -->
    <div class="main">
      <div>header</div>
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
definePage({
  meta: {
    title: "Home",
  },
});
// 定义组件名称
defineOptions({
  name: "HomeView",
});
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.layout {
  display: flex;
}
.aside {
  width: 200px;
}
.main {
  flex: 1;
}
</style>
