import { ref, computed, toRaw, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const project = reactive({
    id: 'xx',
    desc: '项目描述'
  })

  const projects = ref({
    id: 'xx',
    desc: '项目描述'
  })

  console.log('projects',projects,)
  console.log('projects.value',projects.value)
  console.log('toRaw projects.value', toRaw(projects.value))
  return { count, doubleCount, increment }
})


console.log('useCounterStore',useCounterStore())
