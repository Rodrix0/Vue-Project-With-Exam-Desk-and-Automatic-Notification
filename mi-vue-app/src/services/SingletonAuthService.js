// src/services/SingletonAuthService.js

class AuthService {
    constructor() {
      if (AuthService.instance) {
        return AuthService.instance;
      }
  
      this.usuarios = {
        "Jose": { password: "1234", examenes: ["Ing.Software II", "Paradigma I"] },
        "Gilda": { password: "abcd", examenes: ["Ing.Software II", "Ing.Software I"] },
        "Carlos": { password: "1111", examenes: ["Redes I"] },
        "Figue": { password: "2222", examenes: ["Paradigma II"] }
      };
  
      AuthService.instance = this;
    }
  
    login(username, password) {
      const user = this.usuarios[username];
      if (user && user.password === password) {
        localStorage.setItem("usuario", username);
        return true;
      }
      return false;
    }
  
    getUsuarioActual() {
      return localStorage.getItem("usuario");
    }
  
    logout() {
      localStorage.removeItem("usuario");
    }
  }
  
  const authService = new AuthService();
  export default authService;
  