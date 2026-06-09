<template>
  <div class="user-management">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>用户管理</h2>
      <p>管理系统用户信息</p>
    </div>

    <!-- 操作栏 -->
    <div class="action-bar">
      <!-- 搜索框 -->
      <div class="search-box">
        <input
          type="text"
          v-model="searchKeyword"
          placeholder="请输入用户名称搜索"
          class="search-input"
          @keyup.enter="handleSearch"
        />
        <button class="search-button" @click="handleSearch">🔍 搜索</button>
      </div>

      <!-- 操作按钮组 -->
      <div class="action-buttons">
        <button class="primary-button" @click="$router.push('/home/user/create')">
          ➕ 新增用户
        </button>
        <button class="secondary-button" @click="handleDownload">📥 下载列表</button>
      </div>
    </div>

    <!-- 用户表格 -->
    <div class="user-table-container">
      <table class="user-table">
        <thead>
          <tr>
            <th>用户ID</th>
            <th>用户头像</th>
            <th>用户名称</th>
            <th>地址</th>
            <th>邮箱</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>
              <div class="user-avatar">
                <img :src="user.avatar" :alt="user.name" />
              </div>
            </td>
            <td>{{ user.name }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td class="action-column">
              <button class="view-button" @click="handleView(user)">👁️ 查看</button>
              <button class="edit-button" @click="handleEdit(user)">✏️ 编辑</button>
              <button class="delete-button" @click="handleDelete(user.id)">
                🗑️ 删除
              </button>
            </td>
          </tr>
          <tr v-if="paginatedUsers.length === 0">
            <td colspan="7" class="empty-state">暂无用户数据</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分页 -->
    <div class="pagination" v-if="totalUsers > 0">
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="currentPage = 1"
      >
        首页
      </button>
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        上一页
      </button>
      <span class="pagination-info">
        第 {{ currentPage }} 页，共 {{ totalPages }} 页
      </span>
      <button
        class="pagination-button"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        下一页
      </button>
      <button
        class="pagination-button"
        :disabled="currentPage === totalPages"
        @click="currentPage = totalPages"
      >
        末页
      </button>
    </div>

    <!-- 删除确认对话框 -->
    <div class="dialog-overlay" v-if="showDeleteDialog">
      <div class="dialog delete-dialog">
        <div class="dialog-header">
          <h3>确认删除</h3>
          <button class="close-button" @click="showDeleteDialog = false">&times;</button>
        </div>
        <div class="dialog-body">
          <p>确定要删除该用户吗？此操作不可恢复。</p>
          <div class="form-actions">
            <button class="cancel-button" @click="showDeleteDialog = false">取消</button>
            <button class="delete-confirm-button" @click="confirmDelete">确认删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// 搜索关键词
const searchKeyword = ref("");

// 分页相关
const currentPage = ref(1);
const pageSize = ref(10);

// 对话框状态
const showDeleteDialog = ref(false);

// 待删除的用户ID
const deleteUserId = ref<number>();

// 模拟用户数据
const users = ref([
  {
    id: 1,
    name: "张三",
    avatar: "https://picsum.photos/seed/user1/100/100",
    address: "北京市朝阳区",
    email: "zhangsan@example.com",
    phone: "13800138001",
  },
  {
    id: 2,
    name: "李四",
    avatar: "https://picsum.photos/seed/user2/100/100",
    address: "上海市浦东新区",
    email: "lisi@example.com",
    phone: "13900139001",
  },
  {
    id: 3,
    name: "王五",
    avatar: "https://picsum.photos/seed/user3/100/100",
    address: "广州市天河区",
    email: "wangwu@example.com",
    phone: "13700137001",
  },
  {
    id: 4,
    name: "赵六",
    avatar: "https://picsum.photos/seed/user4/100/100",
    address: "深圳市南山区",
    email: "zhaoliu@example.com",
    phone: "13600136001",
  },
  {
    id: 5,
    name: "钱七",
    avatar: "https://picsum.photos/seed/user5/100/100",
    address: "杭州市西湖区",
    email: "qianqi@example.com",
    phone: "13500135001",
  },
  {
    id: 6,
    name: "孙八",
    avatar: "https://picsum.photos/seed/user6/100/100",
    address: "成都市锦江区",
    email: "sunba@example.com",
    phone: "13400134001",
  },
  {
    id: 7,
    name: "周九",
    avatar: "https://picsum.photos/seed/user7/100/100",
    address: "武汉市武昌区",
    email: "zhoujiu@example.com",
    phone: "13300133001",
  },
  {
    id: 8,
    name: "吴十",
    avatar: "https://picsum.photos/seed/user8/100/100",
    address: "西安市雁塔区",
    email: "wushi@example.com",
    phone: "13200132001",
  },
  {
    id: 9,
    name: "郑十一",
    avatar: "https://picsum.photos/seed/user9/100/100",
    address: "南京市玄武区",
    email: "zhengshiyi@example.com",
    phone: "13100131001",
  },
  {
    id: 10,
    name: "王十二",
    avatar: "https://picsum.photos/seed/user10/100/100",
    address: "重庆市渝中区",
    email: "wangshier@example.com",
    phone: "13000130001",
  },
  {
    id: 11,
    name: "李十三",
    avatar: "https://picsum.photos/seed/user11/100/100",
    address: "天津市和平区",
    email: "lishisan@example.com",
    phone: "13800138002",
  },
]);

// 过滤后的用户数据
const filteredUsers = computed(() => {
  if (!searchKeyword.value) {
    return users.value;
  }
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

// 分页后的用户数据
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredUsers.value.slice(start, end);
});

// 总用户数
const totalUsers = computed(() => filteredUsers.value.length);

// 总页数
const totalPages = computed(() => {
  return Math.ceil(totalUsers.value / pageSize.value);
});

// 搜索处理
const handleSearch = () => {
  currentPage.value = 1; // 搜索后重置到第一页
};

const router = useRouter();

// 查看用户详情
const handleView = (user: any) => {
  router.push({ path: `/home/user/details/${user.id}`, state: user });
};

// 编辑操作
const handleEdit = (user: any) => {
  router.push({ path: `/home/user/create/${user.id}`, state: user });
};

// 打开删除确认对话框
const handleDelete = (userId: number) => {
  deleteUserId.value = userId;
  showDeleteDialog.value = true;
};

// 确认删除
const confirmDelete = () => {
  users.value = users.value.filter((user) => user.id !== deleteUserId.value);
  showDeleteDialog.value = false;
};

// 下载列表
const handleDownload = () => {
  // 这里可以实现导出Excel或CSV的逻辑
  alert("下载功能开发中...");
};

defineOptions({
  name: "UserView",
});
</script>

<style lang="less" scoped>
// 主容器
.user-management {
  padding: 20px;
  background-color: @bg-color;
  min-height: calc(100vh - 60px);
}

// 页面标题
.page-header {
  margin-bottom: 30px;

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
      font-size: 14px;
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
      color: @white;
      border: none;
      .border-radius();
      font-size: 14px;
      cursor: pointer;
      .transition();

      &:hover {
        background-color: darken(@primary-color, 10%);
        transform: translateY(-2px);
      }
    }
  }

  .action-buttons {
    display: flex;
    gap: 10px;

    .primary-button,
    .secondary-button {
      padding: 10px 20px;
      border: none;
      .border-radius();
      font-size: 14px;
      cursor: pointer;
      .transition();
    }

    .primary-button {
      background-color: @primary-color;
      color: @white;

      &:hover {
        background-color: darken(@primary-color, 10%);
        transform: translateY(-2px);
      }
    }

    .secondary-button {
      background-color: @white;
      color: @text-primary;
      border: 1px solid @border-color;

      &:hover {
        border-color: @primary-color;
        color: @primary-color;
        transform: translateY(-2px);
      }
    }
  }
}

// 表格容器
.user-table-container {
  background-color: @white;
  .border-radius();
  box-shadow: @shadow;
  overflow: hidden;
  margin-bottom: 20px;
}

// 用户表格
.user-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid @border-color;
  }

  th {
    background-color: #fafafa;
    font-weight: 600;
    color: @text-primary;
    font-size: 14px;
  }

  tr {
    .transition();

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .action-column {
    display: flex;
    gap: 8px;

    .view-button,
    .edit-button,
    .delete-button {
      padding: 6px 12px;
      border: none;
      .border-radius(4px);
      font-size: 12px;
      cursor: pointer;
      .transition();
    }

    .view-button {
      background-color: #52c41a;
      color: @white;

      &:hover {
        background-color: darken(#52c41a, 10%);
      }
    }

    .edit-button {
      background-color: #1890ff;
      color: @white;

      &:hover {
        background-color: darken(#1890ff, 10%);
      }
    }

    .delete-button {
      background-color: @error-color;
      color: @white;

      &:hover {
        background-color: darken(@error-color, 10%);
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 40px;
    color: @text-secondary;
    font-size: 14px;
  }
}

// 分页
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-size: 14px;

  .pagination-button {
    padding: 6px 12px;
    border: 1px solid @border-color;
    background-color: @white;
    .border-radius(4px);
    cursor: pointer;
    .transition();

    &:hover:not(:disabled) {
      border-color: @primary-color;
      color: @primary-color;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .pagination-info {
    color: @text-secondary;
  }
}

// 对话框遮罩
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

// 对话框
.dialog {
  background-color: @white;
  .border-radius(12px);
  box-shadow: @shadow-lg;
  width: 90%;
  max-width: 500px;
  animation: slideIn 0.3s ease;

  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid @border-color;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: @text-primary;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: @text-secondary;
      .transition();

      &:hover {
        color: @text-primary;
      }
    }
  }

  .dialog-body {
    padding: 20px;

    .form-group {
      margin-bottom: 16px;

      label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: @text-primary;
        margin-bottom: 8px;
      }

      input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid @border-color;
        .border-radius();
        font-size: 14px;
        .transition();

        &:focus {
          outline: none;
          border-color: @primary-color;
          box-shadow: 0 0 0 2px @primary-light;
        }
      }
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 24px;

      .cancel-button,
      .submit-button,
      .delete-confirm-button {
        padding: 8px 16px;
        border: none;
        .border-radius(4px);
        font-size: 14px;
        cursor: pointer;
        .transition();
      }

      .cancel-button {
        background-color: #f5f5f5;
        color: @text-primary;

        &:hover {
          background-color: #e8e8e8;
        }
      }

      .submit-button {
        background-color: @primary-color;
        color: @white;

        &:hover {
          background-color: darken(@primary-color, 10%);
        }
      }

      .delete-confirm-button {
        background-color: @error-color;
        color: @white;

        &:hover {
          background-color: darken(@error-color, 10%);
        }
      }
    }
  }
}

// 动画
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .user-management {
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

    .action-buttons {
      justify-content: center;
    }
  }

  .user-table {
    th,
    td {
      padding: 8px 10px;
      font-size: 12px;
    }

    .action-column {
      flex-direction: column;
      gap: 4px;

      .view-button,
      .edit-button,
      .delete-button {
        padding: 4px 8px;
        font-size: 10px;
      }
    }
  }

  .pagination {
    flex-wrap: wrap;
    justify-content: center;
  }

  .dialog {
    width: 95%;
    max-width: 95%;
  }
}
.cdss {
  height: 200px;
  width: 100%;
}
</style>

<route lang="json">
{
  "name": "user"
}
</route>
