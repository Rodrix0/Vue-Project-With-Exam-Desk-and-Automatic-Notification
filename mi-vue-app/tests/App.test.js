import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App.vue', () => {
    it('renderiza Footer y Header', () => {
        const wrapper = mount(App)
        expect(wrapper.findComponent({ name: 'Footer' }).exists()).toBe(true)
        expect(wrapper.findComponent({ name: 'Header' }).exists()).toBe(true)
    })
    it('Pasa la prop darkMode al Header', () => {
        const wrapper = mount(App)
        const header = wrapper.findComponent({ name: 'Header' })
        expect(header.props().darkMode).toBe(false)
    })
    it('Pasa el evento toggleTheme al Header', async() => {
        const wrapper = mount(App)
        const header = wrapper.findComponent({ name: 'Header' })
        expect(wrapper.vm.darkMode).toBe(false)
        await header.vm.$emit('toggleTheme')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.darkMode).toBe(true)
    })
    it('Cambia la clase del div principal segun darkMode', async() => {
        const wrapper= mount(App)
        expect(wrapper.classes()).toContain('light')
        //cambio a darkMode
        wrapper.vm.darkMode = true
        await wrapper.vm.$nextTick()
        expect(wrapper.classes()).toContain('dark')
    })
})