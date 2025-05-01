<template>
    <div class="dashboard">
      <h2>Bienvenido, {{ usuario }}</h2>
      <h3>Mesas de Examen:</h3>
      <ul>
        <li v-for="mesa in examenes" :key="mesa">{{ mesa }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        examenes: [],
        usuario: ''
      }
    },
    created() {
      const nombre = localStorage.getItem("usuario")
      this.usuario = nombre
  
      const data = {
        "Jose": ["Ing.Software II", "Paradigma I"],
        "Gilda": ["Ing.Software II", "Ing.Software I"]
      }
  
      this.examenes = data[nombre] || []
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    padding: 2rem;
  }
  </style>
  