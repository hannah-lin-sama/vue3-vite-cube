<template>
  <div class="login-container">
    <!-- 左侧图片区域 -->
    <div class="login-image-section">
      <img
        class="login-image"
        src="https://picsum.photos/seed/mountain/1200/800"
        alt="登录背景"
      />
      <div class="image-overlay">
        <div class="overlay-content">
          <h2>Vue Cube</h2>
          <p>平台</p>
        </div>
      </div>
    </div>

    <!-- 右侧登录表单区域 -->
    <div class="login-form-section">
      <div class="login-form-container">
        <div class="form-header">
          <h1>登录</h1>
          <p class="form-subtitle">请输入您的账号和密码</p>
        </div>

        <form class="login-form">
          <!-- 用户名输入 -->
          <div class="form-group">
            <label for="username" class="form-label">用户名称</label>
            <div class="input-wrapper">
              <span class="input-icon">👤</span>
              <input
                type="text"
                id="username"
                class="form-input"
                placeholder="请输入用户名"
                autocomplete="off"
                v-model="form.username"
              />
            </div>
            <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
          </div>

          <!-- 密码输入 -->
          <div class="form-group">
            <label for="password" class="form-label">密码</label>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input
                type="password"
                id="password"
                class="form-input"
                placeholder="请输入密码"
                v-model="form.password"
                autocomplete="off"
              />
              <button
                type="button"
                class="toggle-password"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? "👁️" : "👁️‍🗨️" }}
              </button>
            </div>
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
          </div>

          <!-- 记住我和忘记密码 -->
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="form.remember" />
              <label for="remember">记住我</label>
            </div>
            <a href="#" class="forgot-password">忘记密码？</a>
          </div>

          <!-- 登录按钮 -->
          <button
            type="button"
            class="login-button"
            @click="handleLogin"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">登录</span>
            <span v-else class="loading-spinner">⟳</span>
          </button>

          <!-- 其他登录方式 -->
          <div class="other-login-options">
            <div class="divider">
              <span>或使用以下方式登录</span>
            </div>
            <div class="social-login">
              <button type="button" class="social-button google">
                <span class="social-icon">G</span>
                Google
              </button>
              <button type="button" class="social-button wechat">
                <span class="social-icon">💬</span>
                微信
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import service from "@/service";
import { da } from "element-plus/es/locale/index.mjs";

const router = useRouter();

// 表单数据
const form = reactive({
  username: "",
  password: "",
  remember: false,
});

// 错误信息
const errors = reactive({
  username: "",
  password: "",
});

// 状态
const showPassword = ref(false);
const isLoading = ref(false);

// 登录处理
const handleLogin = async () => {
  // 表单验证
  let isValid = true;

  if (!form.username) {
    errors.username = "请输入用户名";
    isValid = false;
  }

  if (!form.password) {
    errors.password = "请输入密码";
    isValid = false;
  }

  if (!isValid) return;

  // 模拟登录请求
  isLoading.value = true;

  service({
    url: "/api1/login",
    method: "POST",
    data: {
      name: form.username,
      password: form.password,
    },
  })
    .then(({ data }) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      if (data.accessToken && data.refreshToken) {
        // 登录成功后跳转到首页
        router.push("/home");
      }
    })
    .catch((error) => {
      console.error("登录失败:", error);
      // 这里可以添加错误处理逻辑
    })
    .finally(() => {
      isLoading.value = false;
    });
};

defineOptions({
  name: "LoginView",
});
</script>

<style scoped lang="less">
// 主容器
.login-container {
  display: flex;
  min-height: 100vh;
  background-color: @bg-color;
  overflow: hidden;
}

// 左侧图片区域
.login-image-section {
  position: relative;
  flex: 1;
  min-height: 100vh;

  .login-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.8) 0%,
      rgba(118, 75, 162, 0.8) 100%
    );
    .flex-center;
    flex-direction: column;
    color: @white;

    .overlay-content {
      text-align: center;
      padding: 20px;

      h2 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        opacity: 0.9;
      }
    }
  }
}

// 右侧登录表单区域
.login-form-section {
  flex: 1;
  min-height: 100vh;
  .flex-center;
  padding: 20px;

  .login-form-container {
    width: 100%;
    max-width: 450px;
    background-color: @white;
    .border-radius(16px);
    box-shadow: @shadow;
    padding: 40px;
    animation: fadeIn 0.8s ease-out;
  }

  .form-header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: @text-primary;
      margin-bottom: 10px;
    }

    .form-subtitle {
      font-size: 14px;
      color: @text-secondary;
    }
  }

  .login-form {
    .form-group {
      margin-bottom: 20px;

      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: @text-primary;
        margin-bottom: 8px;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .input-icon {
          position: absolute;
          left: 12px;
          font-size: 16px;
          color: @text-secondary;
          z-index: 1;
        }

        .form-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border: 1px solid @border-color;
          .border-radius(8px);
          font-size: 14px;
          color: @text-primary;
          .transition();

          &:focus {
            outline: none;
            border-color: @primary-color;
            box-shadow: 0 0 0 2px @primary-light;
          }

          &::placeholder {
            color: #999;
          }
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          color: @text-secondary;
          .transition();

          &:hover {
            color: @primary-color;
          }
        }
      }

      .error-message {
        font-size: 12px;
        color: @error-color;
        margin-top: 5px;
      }
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      font-size: 14px;

      .remember-me {
        display: flex;
        align-items: center;
        gap: 8px;
        color: @text-secondary;

        input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
      }

      .forgot-password {
        color: @primary-color;
        text-decoration: none;
        .transition();

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .login-button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, @primary-color 0%, #764ba2 100%);
      color: @white;
      border: none;
      .border-radius(8px);
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      .transition();
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .loading-spinner {
        display: inline-block;
        animation: spin 1s linear infinite;
      }
    }

    .other-login-options {
      margin-top: 30px;

      .divider {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        &::before,
        &::after {
          content: "";
          flex: 1;
          height: 1px;
          background-color: @border-color;
        }

        span {
          padding: 0 15px;
          font-size: 14px;
          color: @text-secondary;
        }
      }

      .social-login {
        display: flex;
        gap: 10px;

        .social-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 1px solid @border-color;
          .border-radius(8px);
          background-color: @white;
          font-size: 14px;
          cursor: pointer;
          .transition();

          &:hover {
            border-color: @primary-color;
            background-color: @primary-light;
          }

          .social-icon {
            font-size: 18px;
          }

          &.google {
            color: #4285f4;
          }

          &.wechat {
            color: #07c160;
          }
        }
      }
    }
  }
}

// 动画
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login-image-section {
    flex: none;
    height: 300px;
  }

  .login-form-section {
    flex: 1;
  }

  .login-form-container {
    padding: 30px 20px;
  }

  .form-header h1 {
    font-size: 24px;
  }

  .social-login {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .login-form-container {
    padding: 20px;
  }

  .form-header h1 {
    font-size: 22px;
  }

  .login-button {
    padding: 12px;
  }
}
</style>

<route lang="yaml">
name: "login"
meta:
  title: "Login"
</route>
