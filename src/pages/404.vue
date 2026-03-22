<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-description">抱歉，您访问的页面不存在或已被删除</p>
      <a href="/" class="back-home-button">返回首页</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 主容器
.not-found-container {
  min-height: 100vh;
  background-color: @bg-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  // 背景装饰
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }

  // 浮动动画
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  // 深色主题
  :global(body.dark-theme) & {
    background-color: @dark-bg-color;

    &::before {
      background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
    }
  }
}

// 404 内容
.not-found-content {
  text-align: center;
  z-index: 1;
  animation: slideIn 0.5s ease-out;
}

// 404 标题
.not-found-title {
  font-size: 120px;
  font-weight: 700;
  color: @primary-color;
  margin-bottom: 20px;
  text-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
  animation: bounce 1s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 80px;
  }
}

// 404 描述
.not-found-description {
  font-size: @font-size-lg;
  color: @text-primary;
  margin-bottom: 30px;
  max-width: 500px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: @font-size-md;
  }

  // 深色主题
  :global(body.dark-theme) & {
    color: @dark-text-primary;
  }
}

// 返回首页按钮
.back-home-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: @primary-color;
  color: @text-white;
  border: none;
  border-radius: @border-radius;
  font-size: @font-size-md;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: @primary-dark;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

// 动画
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>

<script setup lang="ts">
defineOptions({
  name: 'NotFoundView',
})
</script>
