<template>
  <div class="user-details-container">
    <!-- 页面标题和面包屑 -->
    <div class="page-header">
      <div class="breadcrumb">
        <router-link to="/home" class="breadcrumb-item">首页</router-link>
        <span class="breadcrumb-separator">/</span>
        <router-link to="/home/user" class="breadcrumb-item">用户管理</router-link>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">用户详情</span>
      </div>
      <h2>用户详情</h2>
      <p>查看用户的详细信息</p>
    </div>

    <!-- 操作按钮 -->
    <div class="action-buttons">
      <button class="back-button" @click="$router.push('/home/user')">← 返回列表</button>
      <button class="edit-button" @click="handleEdit">✏️ 编辑用户</button>
    </div>

    <!-- 用户信息卡片 -->
    <div class="user-card">
      <!-- 用户基本信息 -->
      <div class="user-header">
        <div class="user-avatar-large">
          <img :src="user.avatar" :alt="user.name" />
        </div>
        <div class="user-basic-info">
          <h3 class="user-name">{{ user.name }}</h3>
          <p class="user-id">用户ID: {{ user.id }}</p>
          <div class="user-meta">
            <span class="meta-item"> 📧 {{ user.email }} </span>
            <span class="meta-item"> 📱 {{ user.phone }} </span>
          </div>
        </div>
      </div>

      <!-- 用户详细信息 -->
      <div class="user-details">
        <div class="detail-section">
          <h4 class="section-title">基本信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">姓名</span>
              <span class="detail-value">{{ user.name }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">用户ID</span>
              <span class="detail-value">{{ user.id }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">邮箱</span>
              <span class="detail-value">{{ user.email }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">联系方式</span>
              <span class="detail-value">{{ user.phone }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">地址</span>
              <span class="detail-value">{{ user.address }}</span>
            </div>
          </div>
        </div>

        <!-- 其他信息部分 -->
        <div class="detail-section">
          <h4 class="section-title">账户信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">注册时间</span>
              <span class="detail-value">{{ formattedDate }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">账户状态</span>
              <span class="detail-value status-active">活跃</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">最后登录</span>
              <span class="detail-value">{{ lastLoginDate }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">角色</span>
              <span class="detail-value">普通用户</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 活动记录 -->
    <div class="activity-section">
      <h3 class="section-title">最近活动</h3>
      <div class="activity-list">
        <div class="activity-item" v-for="(activity, index) in activities" :key="index">
          <div class="activity-icon">{{ activity.icon }}</div>
          <div class="activity-content">
            <p class="activity-text">{{ activity.text }}</p>
            <p class="activity-time">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 模拟用户数据
const user = ref({
  id: 1,
  name: '张三',
  avatar: 'https://picsum.photos/seed/user1/200/200',
  address: '北京市朝阳区',
  email: 'zhangsan@example.com',
  phone: '13800138001',
})

// 模拟活动记录
const activities = ref([
  {
    icon: '📝',
    text: '更新了个人信息',
    time: '2026-03-20 14:30',
  },
  {
    icon: '🔑',
    text: '登录了系统',
    time: '2026-03-19 09:15',
  },
  {
    icon: '📤',
    text: '导出了数据报表',
    time: '2026-03-18 16:45',
  },
  {
    icon: '📥',
    text: '上传了文件',
    time: '2026-03-17 11:20',
  },
])

// 格式化日期
const formattedDate = computed(() => {
  return new Date().toLocaleDateString('zh-CN')
})

// 最后登录日期
const lastLoginDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() - 2)
  return date.toLocaleString('zh-CN')
})

// 编辑用户
const handleEdit = () => {
  // 这里可以跳转到编辑页面
  router.push({ path: `/home/user/create/${user.value.id}` })
}

// 页面加载时获取用户数据
onMounted(() => {
  // 这里可以通过 API 获取用户数据
  // 模拟从路由参数获取用户ID
  const userId = route.params.id
  if (userId) {
    // 根据ID获取用户数据
    console.log('获取用户数据:', userId)
  }
})

defineOptions({
  name: 'UserDetailsView',
})
</script>

<style lang="less" scoped>
// 主容器
.user-details-container {
  padding: 20px;
  background-color: @bg-color;
  min-height: calc(100vh - 60px);
}

// 页面标题和面包屑
.page-header {
  margin-bottom: 30px;

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    font-size: 14px;

    .breadcrumb-item {
      color: @text-secondary;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: @primary-color;
      }

      &.active {
        color: @text-primary;
        font-weight: 500;
      }
    }

    .breadcrumb-separator {
      color: @text-secondary;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: @text-secondary;
  }
}

// 操作按钮
.action-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  .back-button,
  .edit-button {
    padding: 10px 20px;
    border: none;
    border-radius: @border-radius;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .back-button {
    background-color: @bg-white;
    color: @text-primary;
    border: 1px solid @border-color;

    &:hover {
      border-color: @primary-color;
      color: @primary-color;
      transform: translateY(-2px);
    }
  }

  .edit-button {
    background-color: @primary-color;
    color: @text-white;

    &:hover {
      background-color: darken(@primary-color, 10%);
      transform: translateY(-2px);
    }
  }
}

// 用户卡片
.user-card {
  background-color: @bg-white;
  border-radius: @border-radius-lg;
  box-shadow: @shadow;
  overflow: hidden;
  margin-bottom: 30px;
  animation: slideIn 0.5s ease-out;
}

// 用户头部信息
.user-header {
  display: flex;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid @border-color;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  .user-avatar-large {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid @bg-white;
    box-shadow: @shadow;
    margin-right: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-basic-info {
    flex: 1;

    .user-name {
      font-size: 24px;
      font-weight: 600;
      color: @text-primary;
      margin-bottom: 8px;
    }

    .user-id {
      font-size: 14px;
      color: @text-secondary;
      margin-bottom: 16px;
    }

    .user-meta {
      display: flex;
      gap: 20px;

      .meta-item {
        font-size: 14px;
        color: @text-secondary;
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
}

// 用户详细信息
.user-details {
  padding: 30px;
}

// 详情 section
.detail-section {
  margin-bottom: 30px;

  .section-title {
    font-size: 18px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid @border-color;
  }
}

// 详情网格
.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

// 详情项
.detail-item {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .detail-label {
    font-size: 14px;
    color: @text-secondary;
    font-weight: 500;
  }

  .detail-value {
    font-size: 16px;
    color: @text-primary;
    font-weight: 500;

    &.status-active {
      color: @success-color;
    }
  }
}

// 活动记录部分
.activity-section {
  background-color: @bg-white;
  border-radius: @border-radius-lg;
  box-shadow: @shadow;
  padding: 30px;
  animation: slideIn 0.5s ease-out 0.2s both;

  .section-title {
    font-size: 18px;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 20px;
  }
}

// 活动列表
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

// 活动项
.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: @border-radius;
  background-color: @bg-light;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f5ff;
    transform: translateY(-2px);
  }

  .activity-icon {
    font-size: 24px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .activity-content {
    flex: 1;

    .activity-text {
      font-size: 14px;
      color: @text-primary;
      margin-bottom: 4px;
    }

    .activity-time {
      font-size: 12px;
      color: @text-muted;
    }
  }
}

// 动画
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .user-details-container {
    padding: 10px;
  }

  .user-header {
    flex-direction: column;
    text-align: center;
    padding: 20px;

    .user-avatar-large {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .user-meta {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .user-details {
    padding: 20px;
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .activity-section {
    padding: 20px;
  }

  .action-buttons {
    flex-direction: column;

    .back-button,
    .edit-button {
      width: 100%;
    }
  }
}
</style>

<route lang="json">
{
  "name": "user_details"
}
</route>
