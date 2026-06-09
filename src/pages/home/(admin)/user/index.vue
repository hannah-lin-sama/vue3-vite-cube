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
        <el-button class="search-button" @click="handleSearch">🔍 搜索</el-button>
      </div>

      <!-- 操作按钮组 -->
      <div class="action-buttons">
        <el-button class="primary-button" @click="$router.push('/home/user/create')">
          ➕ 新增用户
        </el-button>
        <el-button class="secondary-button" @click="handleDownload"
          >📥 下载列表</el-button
        >
      </div>
    </div>

    <!-- 用户表格 -->
    <div class="user-table-container">
      <el-table
        :data="paginatedUsers"
        border
        stripe
        style="width: 100%"
        empty-text="暂无用户数据"
      >
        <el-table-column prop="id" label="用户ID" width="80" />
        <el-table-column label="用户头像" width="100">
          <template #default="scope">
            <div class="user-avatar">
              <img :src="scope.row.avatar" :alt="scope.row.name" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户名称" min-width="120" />
        <el-table-column prop="address" label="地址" min-width="180" />
        <el-table-column prop="email" label="邮箱" min-width="200" />
        <el-table-column prop="phone" label="联系方式" width="140" />
        <el-table-column label="操作" width="180" fixed="right">
          <template #default="scope">
            <div class="action-column">
              <el-button type="success" size="small" @click="handleView(scope.row)">
                <el-icon><View /></el-icon>
                查看
              </el-button>
              <el-button type="primary" size="small" @click="handleEdit(scope.row)">
                <el-icon><Edit /></el-icon>
                编辑
              </el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.row.id)">
                <el-icon><Delete /></el-icon>
                删除
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="pagination-wrapper" v-if="totalUsers > 0">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="totalUsers"
        layout="total, prev, pager, next, jumper"
        background
        @current-change="handlePageChange"
      />
    </div>

    <!-- 删除确认对话框 -->
    <el-dialog
      v-model="showDeleteDialog"
      title="确认删除"
      width="500px"
      :close-on-click-modal="false"
    >
      <p>确定要删除该用户吗？此操作不可恢复。</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDeleteDialog = false">取消</el-button>
          <el-button type="danger" @click="confirmDelete">确认删除</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { View, Edit, Delete } from "@element-plus/icons-vue";
import { ElTable, ElPagination, ElTableColumn, ElDialog, ElButton } from "element-plus";

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
// const totalPages = computed(() => {
//   return Math.ceil(totalUsers.value / pageSize.value);
// });

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

// 页码改变处理
const handlePageChange = (page: number) => {
  currentPage.value = page;
};

// 下载列表
const handleDownload = () => {
  // 这里可以实现导出Excel或CSV的逻辑
  // ElMessage.info("下载功能开发中...");
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
  }
}

// 分页容器
.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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

  .pagination-wrapper {
    justify-content: center;

    :deep(.el-pagination) {
      flex-wrap: wrap;
      justify-content: center;
    }
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
