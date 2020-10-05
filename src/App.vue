<template>
  <div id="app">
    <Header />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__jello"
      leave-active-class="animate__animated animate__jello"
    >
      <router-view></router-view>
    </transition>

    <p class="date">{{ currentDate }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentDate: "",
    };
  },
  methods: {
    today() {
      let date = new Date();
      this.currentDate = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.today();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.date {
  padding: 1rem;
}

html,
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
