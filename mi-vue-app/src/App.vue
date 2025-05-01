<template>
  <div :class="darkMode ? 'dark' : 'light'">
    <Header :darkMode="darkMode" @toggle-theme="darkMode = !darkMode" />

    <main class="main-content">
      <router-view/>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
  data() {
    return {
      darkMode: false
    }
  }
}
</script>

<style>
:root {
  --header-bg: #f0f0f0;
  --text-color: #000;
  --bg-color: #fff;
}
.dark {
  --header-bg: #222;
  --text-color: #fff;
  --bg-color: #121212;
}
.light {
  --header-bg: #f0f0f0;
  --text-color: #000;
  --bg-color: #fff;
}
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-content {
  padding: 2rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: calc(100vh - 160px); /* Ajuste para header/footer */
}
</style>
