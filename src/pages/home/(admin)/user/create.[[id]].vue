<template>
  <div class="user-form-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>{{ $route.params?.id ? '编辑用户' : '新增用户' }}</h2>
      <p>{{ $route.params?.id ? '修改用户信息' : '添加新用户' }}</p>
    </div>

    <!-- 表单区域 -->
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>用户名称 <span class="required">*</span></label>
          <input
            type="text"
            v-model="formData.name"
            placeholder="请输入用户名称"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label>地址</label>
          <input
            type="text"
            v-model="formData.address"
            placeholder="请输入地址"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label>邮箱 <span class="required">*</span></label>
          <input
            type="email"
            v-model="formData.email"
            placeholder="请输入邮箱"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label>联系方式</label>
          <input
            type="tel"
            v-model="formData.phone"
            placeholder="请输入联系方式"
            class="form-input"
          />
        </div>

        <div class="form-actions">
          <button type="button" class="cancel-button" @click="handleCancel">取消</button>
          <button type="submit" class="submit-button">
            {{ $route.params?.id ? '保存' : '新增' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 接收用户数据作为props
const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
})

// 判断是否为编辑模式
// const isEditMode = computed(() => !!props.user);

// 表单数据
const formData = reactive({
  id: '',
  name: '',
  address: '',
  email: '',
  phone: '',
  avatar: '',
})

// 初始化表单数据
onMounted(() => {
  if (route.params?.id) {
    // 编辑模式，填充表单数据
    Object.assign(formData, props.user)
  } else {
    // 新增模式，重置表单
    resetForm()
  }
})

// 重置表单
const resetForm = () => {
  Object.assign(formData, {
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    avatar: '',
  })
}

// 提交表单
const handleSubmit = () => {
  // 这里可以添加表单验证逻辑

  // 模拟API调用
  setTimeout(() => {
    if (route.params?.id) {
      // 编辑用户
      console.log('编辑用户:', formData)
      alert('用户信息已更新')
    } else {
      // 新增用户
      const newUser = {
        ...formData,
        id: Date.now(), // 模拟生成ID
        avatar: `https://picsum.photos/seed/user${Date.now()}/100/100`,
      }
      console.log('新增用户:', newUser)
      alert('用户已新增')
    }
    // 跳转回用户列表页面
    router.push('/home/user')
  }, 500)
}

// 取消操作
const handleCancel = () => {
  router.push('/home/user')
}

defineOptions({
  name: 'UserCreateView',
})
</script>

<route lang="yaml">
name: 'user_create'
</route>

<style lang="less" scoped>
// 主容器
.user-form-container {
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

// 表单容器
.form-container {
  background-color: @bg-white;
  border-radius: @border-radius;
  box-shadow: @shadow;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

// 表单组
.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: @text-primary;
    margin-bottom: 8px;

    .required {
      color: @error-color;
    }
  }

  .form-input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    font-size: 14px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: @primary-color;
      box-shadow: 0 0 0 2px @primary-light;
    }
  }
}

// 表单操作按钮
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;

  .cancel-button,
  .submit-button {
    padding: 10px 20px;
    border: none;
    border-radius: @border-radius;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
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
    color: @text-white;

    &:hover {
      background-color: darken(@primary-color, 10%);
      transform: translateY(-2px);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .user-form-container {
    padding: 10px;
  }

  .form-container {
    padding: 20px;
  }

  .form-actions {
    flex-direction: column;

    .cancel-button,
    .submit-button {
      width: 100%;
    }
  }
}
</style>
