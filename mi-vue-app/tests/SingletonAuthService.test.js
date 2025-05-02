import { describe, it, expect,beforeEach,vi } from 'vitest'
import { mount } from '@vue/test-utils';
import SingletonAuthService from "../src/services/SingletonAuthService";

//Simula el localStorage con spies
beforeEach(() => {
    // Limpiamos el localStorage
    localStorage.clear();
    vi.clearAllMocks();
});

describe("AutService", () => {
    it("logea correctamente con usuario y contaseña validos",() => {
        const result = SingletonAuthService.login('Jose', '1234');
        expect(result).toBe(true);
        expect(localStorage.getItem("usuario")).toBe("Jose");
    })
})