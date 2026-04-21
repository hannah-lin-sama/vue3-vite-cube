import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CloudUserIndexView',
  setup(props, ctx) {
    return () => (
      <div>
        <button>按钮</button>
        <p>用户管理</p>
      </div>
    )
  }
})
