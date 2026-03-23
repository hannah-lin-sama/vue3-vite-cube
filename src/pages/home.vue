<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <div class="aside">
      <!-- 品牌/logo -->
      <div class="brand">
        <h2>Vue Cube</h2>
      </div>
      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <ul>
          <li>
            <router-link to="/home" class="nav-link">
              <span class="nav-icon">🏠</span>
              <span class="nav-text">首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/user" class="nav-link">
              <span class="nav-icon">👤</span>
              <span class="nav-text">用户中心</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/role" class="nav-link">
              <span class="nav-icon">⚙️</span>
              <span class="nav-text">角色管理</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/task" class="nav-link">
              <span class="nav-icon">📋</span>
              <span class="nav-text">日志信息</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home/dashboard" class="nav-link">
              <span class="nav-icon">📊</span>
              <span class="nav-text">Dashboard</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 主内容区域 -->
    <div class="main">
      <!-- 顶部导航栏 -->
      <header class="top-nav">
        <div class="top-nav-left">
          <h1>管理控制台</h1>
        </div>
        <div class="top-nav-right">
          <!-- 语言选择 -->
          <div class="language-selector">
            <button class="language-btn">
              {{ currentLanguage === 'zh' ? '中文' : 'English' }}
              <span class="dropdown-icon">▼</span>
            </button>
          </div>
          <!-- 用户信息 -->
          <div class="user-info">
            <span class="user-name">用户名称</span>
            <div class="user-avatar">
              <img src="https://picsum.photos/seed/mountain/800/500" alt="头像" />
            </div>
          </div>
        </div>
      </header>
      <!-- 内容区域 -->
      <main class="content">
        <RouterView />
        <RouterView name="logs" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePage({
  name: 'home',
  meta: {
    title: 'Home',
  },
})

// 定义组件名称
defineOptions({
  name: 'HomeView',
})

// 语言切换
const currentLanguage = ref('zh')
</script>

<style lang="less" scoped>
// 动画定义
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 全局重置
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

// 主布局
.layout {
  display: flex;
  min-height: 100vh;
  background-color: @bg-color;
}

// 侧边栏
.aside {
  width: 240px;
  background-color: @white;
  box-shadow: @shadow;
  .transition();
  z-index: 100;

  // 品牌区域
  .brand {
    padding: 20px;
    border-bottom: 1px solid @border-color;
    text-align: center;

    h2 {
      font-size: 18px;
      font-weight: 600;
      color: @primary-color;
      margin: 0;
    }
  }

  // 导航菜单
  .nav-menu {
    padding: 20px 0;

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      color: @text-secondary;
      text-decoration: none;
      .transition(all, 0.3s, cubic-bezier(0.4, 0, 0.2, 1));
      .border-radius(0 8px 8px 0);
      margin: 0 10px;

      &:hover {
        background-color: @bg-color;
        color: @primary-color;
      }

      &.router-link-active {
        background-color: @primary-light;
        color: @primary-color;
        font-weight: 500;
      }

      .nav-icon {
        margin-right: 12px;
        font-size: 18px;
      }

      .nav-text {
        font-size: 14px;
      }
    }
  }
}

// 主内容区域
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  // 顶部导航栏
  .top-nav {
    .flex-between;
    padding: 0 30px;
    height: 60px;
    background-color: @white;
    box-shadow: @shadow-sm;
    z-index: 50;
    position: sticky;
    top: 0;

    .top-nav-left {
      h1 {
        font-size: 18px;
        font-weight: 600;
        color: @text-primary;
        margin: 0;
      }
    }

    .top-nav-right {
      display: flex;
      align-items: center;
      gap: 20px;

      // 语言选择器
      .language-selector {
        position: relative;

        .language-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background-color: @bg-color;
          border: none;
          .border-radius(20px);
          font-size: 14px;
          color: @text-secondary;
          cursor: pointer;
          .transition();

          &:hover {
            background-color: @primary-light;
            color: @primary-color;
          }

          .dropdown-icon {
            font-size: 10px;
          }
        }
      }

      // 用户信息
      .user-info {
        display: flex;
        align-items: center;
        gap: 12px;

        .user-name {
          font-size: 14px;
          color: @text-primary;
          font-weight: 500;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid @border-color;
          .transition();

          &:hover {
            border-color: @primary-color;
            transform: scale(1.05);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            .transition();
          }
        }
      }
    }
  }

  // 内容区域
  .content {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
    background-color: @bg-color;
    animation: fadeIn 0.3s ease-out;
    /* 确保内容区域高度计算正确 */
    max-height: calc(100vh - 60px);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .aside {
    width: 60px;

    .brand h2,
    .nav-text {
      display: none;
    }

    .nav-link {
      .flex-center;
      padding: 12px;
      margin: 0 5px;

      .nav-icon {
        margin-right: 0;
      }
    }
  }

  .top-nav {
    padding: 0 20px;

    .top-nav-left h1 {
      font-size: 16px;
    }

    .user-name {
      display: none;
    }
  }

  .content {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .top-nav-right {
    gap: 10px;

    .language-btn {
      padding: 4px 8px;
      font-size: 12px;
    }

    .user-avatar {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
