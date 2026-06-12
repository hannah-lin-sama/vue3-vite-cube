import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    // 挂载组件并传递 Props
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    // 断言组件渲染的文本是否包含传递的 msg
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
