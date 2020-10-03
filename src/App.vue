<template>
  <div id="app">
    <Header />
    <Home msg="Meus Escritos"/>
    <Dashboard />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Home, Header, Dashboard
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

html, body, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
