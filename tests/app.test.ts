import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TodoApp from '../app.vue'

describe('app.vue', () => {
  it('El componente esta renderizando', () => {
    const wrapper = mount(TodoApp)
    if (expect(wrapper.find('button').exists)) {
      expect(wrapper.text()).toBe('Increment')
    }
  })

  it('Se ha añadido una tarea', async () => {
    const wrapper = mount(TodoApp)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toBe('Increment tasks: 1')
  })
})