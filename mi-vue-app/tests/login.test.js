import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../src/views/login.vue'

// Simular el servicio
vi.mock('../src/services/SingletonAuthService', () => ({
  default: {
    login: vi.fn()
  }
}))

import authService from '../src/services/SingletonAuthService'

describe('Login.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Login, {
      global: {
        mocks: {
          $router: {
            push: vi.fn()
          }
        },
        stubs: ['router-view'] // Evita el warning si Login incluye <router-view>
      }
    })
  })

  it('muestra error si login falla', async () => {
    authService.login.mockReturnValue(false)

    await wrapper.find('#username').setValue('usuario')
    await wrapper.find('#password').setValue('1234')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Usuario o contraseña incorrectos')
  })

  it('redirecciona al dashboard si login es exitoso', async () => {
    authService.login.mockReturnValue(true)

    await wrapper.find('#username').setValue('admin')
    await wrapper.find('#password').setValue('admin123')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/dashboard')
  })
})
