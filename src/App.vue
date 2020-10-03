<template>
  <div id="app">
    <Header />
    <Home msg="Meus Escritos"/>
    <p class="date">{{ currentDate }}</p>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home, Header, Footer
  },
  data() {
    return {
      currentDate: ''
    }
  },
  methods: {
    today() {
      let date = new Date()
      this.currentDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    }
  },
  mounted() {
    this.today()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.date {
  padding: 1rem;
}

html, body, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
