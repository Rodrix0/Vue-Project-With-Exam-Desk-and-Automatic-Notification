<template>
    <div class="login">
      <h2>Iniciar sesión</h2>
      <input v-model="username" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button @click="login">Ingresar</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login() {
        // Usuarios hardcodeados
        const usuarios = {
          "Jose": { password: "1234", examenes: ["Ing.Software II", "Paradigma I"] },
          "Gilda": { password: "abcd", examenes: ["Ing.Software II", "Ing.Software I"] }
        }
  
        const user = usuarios[this.username]
  
        if (user && user.password === this.password) {
          // Guardamos usuario en localStorage
          localStorage.setItem("usuario", this.username)
          this.$router.push('/dashboard')
        } else {
          this.error = "Usuario o contraseña incorrectos"
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    margin-top: 100px;
  }
  input, button {
    margin: 5px 0;
  }
  </style>
  