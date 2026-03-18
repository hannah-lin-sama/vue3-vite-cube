<template>
  <div class="login">
    <div class="login-img">
      <img class="img" src="https://picsum.photos/seed/mountain/800/500" alt="" />
    </div>
    <div class="login-form"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LoginView',
})
</script>

<style scoped lang="less">
.login {
  display: flex;
}

.img {
  max-width: 628px;
  width: 100%;
}
.login-form {
  min-width: 50%;
}
</style>
