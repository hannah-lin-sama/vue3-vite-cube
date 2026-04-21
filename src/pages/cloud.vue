<template>
  <div class="cloud-container">
    <el-container>
      <el-header>
        <div class="header-left">
          <h1>Cloud Code</h1>
        </div>
        <!-- <div class="header-right">
          <div class="language-selector">
            <el-select v-model="language" size="small" @change="changeLanguage">
              <el-option label="中文" value="zh-CN"></el-option>
              <el-option label="English" value="en-US"></el-option>
            </el-select>
          </div>
          <div class="theme-toggle">
            <el-switch v-model="isDarkTheme" @change="toggleTheme"></el-switch>
          </div>
          <div class="message-center">
            <el-badge :value="messageCount" :hidden="messageCount === 0">
              <el-button circle icon="el-icon-bell"></el-button>
            </el-badge>
          </div>
          <div class="user-info">
            <el-dropdown>
              <span class="user-dropdown">
                <el-avatar :size="32" :src="userAvatar"></el-avatar>
                <span class="user-name">{{ userName }}</span>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleProfile">个人资料</el-dropdown-item>
                  <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div> -->
      </el-header>
    </el-container>

    <el-container>
      <el-aside>
        <el-menu :default-active="activeMenu" class="sidebar-menu" @select="handleMenuSelect">
          <el-menu-item index="dashboard">
            <el-icon size="24px"><House /></el-icon>
            <span>仪表盘</span>
          </el-menu-item>
          <el-menu-item index="projects">
            <el-icon size="24px"><Document /></el-icon>
            <span>项目管理</span>
          </el-menu-item>
          <el-menu-item index="resources">
            <el-icon><Grid /></el-icon>
            <span>资源管理</span>
          </el-menu-item>
          <el-menu-item index="settings">
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
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
import { ref, onMounted } from 'vue'
import { House, Document, Grid, Setting, Bell } from '@element-plus/icons-vue'
import { ElContainer, ElHeader, ElAside, ElMain, ElMenu, ElMenuItem, ElIcon } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

// 状态管理
const language = ref('zh-CN')
const isDarkTheme = ref(false)
const messageCount = ref(3)
const userAvatar = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const userName = ref('用户')
const activeMenu = ref('dashboard')
const pageTitle = ref('仪表盘')

// 最近活动
const recentActivities = ref([
  { time: '2026-04-20 10:00', content: '项目 A 部署成功' },
  { time: '2026-04-20 09:30', content: '资源 B 扩容完成' },
  { time: '2026-04-19 16:00', content: '系统自动备份完成' }
])

// 方法
const changeLanguage = lang => {
  console.log('切换语言:', lang)
  // 实际项目中这里可以调用 i18n 切换语言
}

const toggleTheme = value => {
  console.log('切换主题:', value ? '深色' : '浅色')
  // 实际项目中这里可以切换主题
  if (value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const handleMenuSelect = key => {
  router.push({ name: key })
}

const handleProfile = () => {
  console.log('查看个人资料')
  // 实际项目中这里可以跳转到个人资料页面
}

const handleLogout = () => {
  console.log('退出登录')
  // 实际项目中这里可以调用退出登录接口
}

// 生命周期
onMounted(() => {
  // 初始化数据
  console.log('Cloud 页面加载完成')
})

defineOptions({
  name: 'CloudView'
})
</script>
