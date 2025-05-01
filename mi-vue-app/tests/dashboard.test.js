import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Dashboard from '../src/views/dashboard.vue'

// Mock del servicio
vi.mock('../src/services/SingletonAuthService', () => ({
  default: {
    getUsuarioActual: vi.fn()
  }
}))

import authService from '../src/services/SingletonAuthService'

describe('Dashboard.vue', () => {
  let wrapper

  beforeEach(() => {
    authService.getUsuarioActual.mockReturnValue('Jose') // Simulamos usuario logueado

    wrapper = mount(Dashboard)
  })

  it('muestra saludo con el nombre del usuario', () => {
    expect(wrapper.text()).toContain('Bienvenido, Jose')
  })

  it('muestra solo las mesas asignadas al usuario', () => {
    const mesas = wrapper.findAll('li')
    expect(mesas.length).toBe(2) // Jose aparece en 2 mesas

    expect(mesas[0].text()).toContain('Ing.Software II')
    expect(mesas[0].text()).toContain('Tu rol: titular')
    expect(mesas[0].text()).toContain('Ayudante: Gilda')

    expect(mesas[1].text()).toContain('Paradigma II')
    expect(mesas[1].text()).toContain('Tu rol: ayudante')
    expect(mesas[1].text()).toContain('Titular: Figue')
  })
})
