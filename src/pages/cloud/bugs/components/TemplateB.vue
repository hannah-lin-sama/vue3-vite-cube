<template>
  <div>
    <div>TemplateA</div>
    <div>count: {{ count }}</div>
    <p>路由名称 {{ $route.name }}</p>
    <button @click="() => handleClick($data)">click</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TemplateB',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick(data: any) {
      console.log(data)
    }
  }
}
</script>
