<script lang="ts">
import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  name: 'CustomA',
  props: {
    initial: {
      type: Number,
      default: 1
    }
  },
  emits: ['update'],
  setup(props, { emit }) {
    const count = ref(props.initial)
    const increment = () => {
      count.value++
      emit('update', count.value)
    }
    // return { count, increment };

    return () =>
      h('div', { class: 'custom-a' }, [h('button', { onClick: increment }, 'button'), h('p', {}, count.value)])
  }
})
</script>
