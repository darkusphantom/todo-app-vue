import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TodoApp from '../app.vue'

describe('app.vue', () => {
  it('El componente está renderizado correctamente', async () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.exists()).toBe(true);
  });

  it('Verifica si el componente tiene cierto texto', () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.text()).toContain('+');
    expect(wrapper.find('#add-todo').exists()).toBe(true);
  })

  it('Agrega una tarea al hacer clic en el botón', async () => {
    const wrapper = mount(TodoApp);
     // Verificar que no haya tareas al inicio
     expect(wrapper.text()).not.toContain('Increment tasks');

     // Hacer clic en el botón de agregar tarea
     await wrapper.find('#add-todo').trigger('click');
  })
})