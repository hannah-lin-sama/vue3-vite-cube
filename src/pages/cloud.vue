<template>
  <div class="cloud-container">
    <el-container>
      <el-header>
        <div class="header-left">
          <h1>Cloud Code</h1>
        </div>
      </el-header>
    </el-container>

    <el-container>
      <el-aside width="160px">
        <el-menu
          :default-active="activeMenu"
          class="sidebar-menu"
          @select="handleMenuSelect"
        >
          <el-menu-item index="dashboard">
            <el-icon size="24px"><House /></el-icon>
            <span data-path="dashboard">仪表盘</span>
          </el-menu-item>
          <el-menu-item index="projects">
            <el-icon size="24px"><Document /></el-icon>
            <span data-path="projects">项目管理</span>
          </el-menu-item>
          <el-menu-item index="resources">
            <el-icon><Grid /></el-icon>
            <span data-path="resources">资源管理</span>
          </el-menu-item>
          <el-menu-item index="settings">
            <el-icon><Setting /></el-icon>
            <span data-path="settings">系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <div class="content-body">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { House, Document, Grid, Setting } from "@element-plus/icons-vue";
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElIcon,
} from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const activeMenu = ref("dashboard");

const handleMenuSelect = (key: string) => {
  console.log(key);

  router.push({ path: `/cloud/${key}` });
};

// 生命周期
onMounted(() => {
  // 初始化数据
  console.log("Cloud 页面加载完成");
});

defineOptions({
  name: "CloudView",
});
</script>
