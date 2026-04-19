<template>
  <div class="task-management">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>操作记录</h2>
      <p>查看项目操作历史记录</p>
    </div>

    <!-- 操作栏 -->
    <div class="action-bar">
      <!-- 搜索框 -->
      <div class="search-box">
        <input
          type="text"
          v-model="searchKeyword"
          placeholder="请输入用户名称或操作页面搜索"
          class="search-input"
          @keyup.enter="handleSearch"
        />
        <button class="search-button" @click="handleSearch">🔍 搜索</button>
      </div>

      <!-- 筛选器 -->
      <div class="filter-box">
        <select v-model="platformFilter" class="filter-select">
          <option value="">全部平台</option>
          <option value="mobile">手机</option>
          <option value="desktop">电脑</option>
        </select>
        <select v-model="browserFilter" class="filter-select">
          <option value="">全部浏览器</option>
          <option value="Chrome">Chrome</option>
          <option value="Firefox">Firefox</option>
          <option value="Safari">Safari</option>
          <option value="Edge">Edge</option>
        </select>
      </div>
    </div>

    <!-- 任务表格 -->
    <div class="task-table-container">
      <table class="task-table">
        <thead>
          <tr>
            <th>操作记录ID</th>
            <th>操作时间</th>
            <th>操作用户</th>
            <th>操作页面</th>
            <th>操作平台</th>
            <th>浏览器</th>
            <th>操作类型</th>
            <th>IP地址</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in displayedTasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ formatDate(task.timestamp) }}</td>
            <td>
              <div class="user-info">
                <img :src="task.user.avatar" :alt="task.user.name" class="user-avatar" />
                <span>{{ task.user.name }}</span>
              </div>
            </td>
            <td>{{ task.page }}</td>
            <td>{{ task.platform.type === 'mobile' ? '手机' : '电脑' }}<br />{{ task.platform.model }}</td>
            <td>{{ task.browser.name }} {{ task.browser.version }}</td>
            <td>
              <span :class="['operation-type', task.operationType]">
                {{ getOperationTypeText(task.operationType) }}
              </span>
            </td>
            <td>{{ task.ip }}</td>
            <td>
              <span :class="['status', task.status]">
                {{ getStatusText(task.status) }}
              </span>
            </td>
          </tr>
          <tr v-if="displayedTasks.length === 0">
            <td colspan="9" class="empty-state">暂无操作记录</td>
          </tr>
        </tbody>
      </table>

      <!-- 加载中提示 -->
      <div class="loading-indicator" v-if="isLoading">
        <span class="loading-spinner">⟳</span>
        <span>加载中...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

// 搜索和筛选
const searchKeyword = ref('')
const platformFilter = ref('')
const browserFilter = ref('')

// 分页和懒加载
const currentPage = ref(1)
const pageSize = ref(20)
const isLoading = ref(false)

// 内容容器引用
const contentContainer = ref<HTMLElement | null>(null)

// 模拟操作记录数据
const tasks = ref<any[]>([])

// 生成模拟数据
const generateMockData = () => {
  const mockTasks = []
  const users = [
    { id: 1, name: '张三', avatar: 'https://picsum.photos/seed/user1/100/100' },
    { id: 2, name: '李四', avatar: 'https://picsum.photos/seed/user2/100/100' },
    { id: 3, name: '王五', avatar: 'https://picsum.photos/seed/user3/100/100' },
    { id: 4, name: '赵六', avatar: 'https://picsum.photos/seed/user4/100/100' },
    { id: 5, name: '钱七', avatar: 'https://picsum.photos/seed/user5/100/100' }
  ]

  const pages = ['首页', '用户管理', '角色管理', '任务管理', '系统设置', '数据统计']
  const operationTypes = ['create', 'update', 'delete', 'view', 'export']
  const statuses = ['success', 'warning', 'error']

  const mobileModels = ['iPhone 14', 'iPhone 15', 'Samsung Galaxy S23', 'Huawei Mate 50', 'Xiaomi 13']
  const desktopModels = ['MacBook Pro', 'Dell XPS', 'HP Spectre', 'Lenovo ThinkPad', 'Asus ZenBook']

  const browsers = [
    { name: 'Chrome', version: '120.0.0.0' },
    { name: 'Firefox', version: '115.0.0' },
    { name: 'Safari', version: '16.0' },
    { name: 'Edge', version: '120.0.0.0' }
  ]

  for (let i = 1; i <= 300; i++) {
    const isMobile = Math.random() > 0.5
    mockTasks.push({
      id: i,
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)), // 过去30天内的随机时间
      user: users[Math.floor(Math.random() * users.length)],
      page: pages[Math.floor(Math.random() * pages.length)],
      platform: {
        type: isMobile ? 'mobile' : 'desktop',
        model: isMobile
          ? mobileModels[Math.floor(Math.random() * mobileModels.length)]
          : desktopModels[Math.floor(Math.random() * desktopModels.length)]
      },
      browser: browsers[Math.floor(Math.random() * browsers.length)],
      operationType: operationTypes[Math.floor(Math.random() * operationTypes.length)],
      ip: `${Math.floor(Math.random() * 256)}.${Math.floor(
        Math.random() * 256
      )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    })
  }

  // 按时间降序排序
  return mockTasks.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

// 初始化数据
onMounted(() => {
  tasks.value = generateMockData()
  // 等待DOM更新后添加滚动事件监听器
  nextTick(() => {
    // 查找content容器（home.vue中的.main .content）
    contentContainer.value = document.querySelector('.main .content')
    if (contentContainer.value) {
      contentContainer.value.addEventListener('scroll', handleScroll)
      console.log('已添加content容器滚动事件监听器')
    } else {
      console.log('未找到content容器')
    }
  })
})

// 组件卸载时移除事件监听器
onUnmounted(() => {
  if (contentContainer.value) {
    contentContainer.value.removeEventListener('scroll', handleScroll)
  }
})

// 滚动事件处理
const handleScroll = () => {
  if (!contentContainer.value) return

  console.log('滚动事件触发')

  // 检查是否滚动到底部
  const { scrollTop, scrollHeight, clientHeight } = contentContainer.value

  // 当滚动到距离底部100px时加载更多
  if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading.value && hasMoreTasks.value) {
    loadMore()
  }
}

// 过滤后的任务数据
const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    // 搜索关键词过滤
    const matchesSearch =
      !searchKeyword.value ||
      task.user.name.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      task.page.toLowerCase().includes(searchKeyword.value.toLowerCase())

    // 平台过滤
    const matchesPlatform = !platformFilter.value || task.platform.type === platformFilter.value

    // 浏览器过滤
    const matchesBrowser = !browserFilter.value || task.browser.name === browserFilter.value

    return matchesSearch && matchesPlatform && matchesBrowser
  })
})

// 显示的任务数据（懒加载）
const displayedTasks = computed(() => {
  const end = currentPage.value * pageSize.value
  return filteredTasks.value.slice(0, end)
})

// 是否有更多数据
const hasMoreTasks = computed(() => {
  return displayedTasks.value.length < filteredTasks.value.length
})

// 加载更多
const loadMore = () => {
  if (!isLoading.value && hasMoreTasks.value) {
    isLoading.value = true
    // 模拟加载延迟
    setTimeout(() => {
      currentPage.value++
      isLoading.value = false
    }, 500)
  }
}

// 搜索处理
const handleSearch = () => {
  currentPage.value = 1 // 搜索后重置到第一页
}

// 格式化日期
const formatDate = (date: Date) => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// 获取操作类型文本
const getOperationTypeText = (type: string) => {
  const typeMap: Record<string, string> = {
    create: '创建',
    update: '更新',
    delete: '删除',
    view: '查看',
    export: '导出'
  }
  return typeMap[type] || type
}

// 获取状态文本
const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    success: '成功',
    warning: '警告',
    error: '错误'
  }
  return statusMap[status] || status
}
</script>

<route lang="yaml">
name: 'task'
</route>
<style lang="less" scoped>
// 主容器
.task-management {
  padding: 20px;
  background-color: @bg-color;
  min-height: calc(100vh - 60px);
}

// 页面标题
.page-header {
  margin-bottom: 30px;

  h2 {
    font-size: @font-size-xl;
    font-weight: 600;
    color: @text-primary;
    margin-bottom: 8px;
  }

  p {
    font-size: @font-size-sm;
    color: @text-secondary;
  }
}

// 操作栏
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .search-box {
    display: flex;
    gap: 10px;

    .search-input {
      padding: 10px 15px;
      border: 1px solid @border-color;
      .border-radius();
      font-size: @font-size-sm;
      width: 300px;
      .transition();

      &:focus {
        outline: none;
        border-color: @primary-color;
        box-shadow: 0 0 0 2px @primary-light;
      }
    }

    .search-button {
      padding: 10px 20px;
      background-color: @primary-color;
      color: @text-white;
      border: none;
      .border-radius();
      font-size: @font-size-sm;
      cursor: pointer;
      .transition();

      &:hover {
        background-color: @primary-dark;
        transform: translateY(-2px);
      }
    }
  }

  .filter-box {
    display: flex;
    gap: 10px;

    .filter-select {
      padding: 10px 15px;
      border: 1px solid @border-color;
      .border-radius();
      font-size: @font-size-sm;
      background-color: @bg-white;
      cursor: pointer;
      .transition();

      &:focus {
        outline: none;
        border-color: @primary-color;
        box-shadow: 0 0 0 2px @primary-light;
      }
    }
  }
}

// 表格容器
.task-table-container {
  background-color: @bg-white;
  .border-radius();
  box-shadow: @shadow;
  overflow: hidden;
}

// 任务表格
.task-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid @border-color;
  }

  th {
    background-color: @bg-light;
    font-weight: 600;
    color: @text-primary;
    font-size: @font-size-sm;
    white-space: nowrap;
  }

  tr {
    .transition();

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: @border-radius-full;
      object-fit: cover;
    }
  }

  .operation-type {
    display: inline-block;
    padding: 4px 8px;
    .border-radius(@border-radius-sm);
    font-size: @font-size-xs;
    font-weight: 500;

    &.create {
      background-color: #e6f7ff;
      color: @info-color;
    }

    &.update {
      background-color: #f6ffed;
      color: @success-color;
    }

    &.delete {
      background-color: #fff1f0;
      color: @error-color;
    }

    &.view {
      background-color: #f0f5ff;
      color: @primary-color;
    }

    &.export {
      background-color: #fffbe6;
      color: @warning-color;
    }
  }

  .status {
    display: inline-block;
    padding: 4px 8px;
    .border-radius(@border-radius-sm);
    font-size: @font-size-xs;
    font-weight: 500;

    &.success {
      background-color: #f6ffed;
      color: @success-color;
    }

    &.warning {
      background-color: #fffbe6;
      color: @warning-color;
    }

    &.error {
      background-color: #fff1f0;
      color: @error-color;
    }
  }

  .empty-state {
    text-align: center;
    padding: 40px;
    color: @text-secondary;
    font-size: @font-size-sm;
  }
}

// 加载中提示
.loading-indicator {
  text-align: center;
  padding: 20px;
  border-top: 1px solid @border-color;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: @font-size-sm;
  color: @text-secondary;

  .loading-spinner {
    display: inline-block;
    animation: spin 1s linear infinite;
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .task-table {
    th,
    td {
      padding: 8px 10px;
      font-size: @font-size-xs;
    }
  }
}

@media (max-width: 768px) {
  .task-management {
    padding: 10px;
  }

  .action-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    .search-box {
      .search-input {
        width: 100%;
      }
    }

    .filter-box {
      justify-content: center;
    }
  }

  .task-table {
    display: block;
    overflow-x: auto;

    th,
    td {
      white-space: nowrap;
    }
  }
}
</style>
