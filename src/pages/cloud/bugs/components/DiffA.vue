<template>
  <div>
    <h3>列表 Diff 演示 (最长递增子序列优化)</h3>
    <div v-for="item in list" :key="item.id" class="list-item">
      {{ item.name }}
    </div>

    <div>
      <button @click="changeToNew">切换到新顺序 [A, B, E, C, D, G, F]</button>
      <br />
      <button @click="resetToOld">重置回旧顺序 [A, B, C, D, E, F]</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 原始数据（旧顺序）
const oldList = [
  { id: 'A', name: 'A' },
  { id: 'B', name: 'B' },
  { id: 'C', name: 'C' },
  { id: 'D', name: 'D' },
  { id: 'E', name: 'E' },
  { id: 'F', name: 'F' }
]

// 新顺序 (A, B, E, C, D, G, F)
const newList = [
  { id: 'A', name: 'A' },
  { id: 'B', name: 'B' },
  { id: 'E', name: 'E' },
  { id: 'C', name: 'C' },
  { id: 'D', name: 'D' },
  { id: 'G', name: 'G' },
  { id: 'F', name: 'F' }
]

const list = ref([...oldList])

const changeToNew = () => {
  list.value = [...newList]
}

const resetToOld = () => {
  list.value = [...oldList]
}
</script>
