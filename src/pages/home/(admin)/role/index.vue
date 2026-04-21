<template>
  <div>
    <input type="text" v-model="roleName" placeholder="请输入角色名称" /><br />
    <input type="text" v-model="roleID" placeholder="请输入角色ID" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const roleName = ref('')
const roleID = ref('')

definePage({
  name: 'role',
  meta: {
    title: '角色管理'
  }
})
defineOptions({
  name: 'RoleIndexView'
})
</script>
