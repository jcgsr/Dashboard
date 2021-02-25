<template>
  <div id="app">
    <Header />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
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

let ROOT_PATH = "https://www.meusescritos.com.br";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentDate: "",
      logo: ROOT_PATH + require("./assets/pen.jpg")
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
  watch: {
      '$route':{
        handler: (to) => {
          document.title = to.meta.title || 'Meus Escritos'
        },
         immediate: true
      }
    },
  mounted() {
    this.today();
  },
   metaInfo() {
    return {
      meta: [
        // Twitter Card
        { name: "twitter:card", content: "Meus Escritos" },
        {
          name: "twitter:title",
          content: "Meus Escritos - Um site para poder compartilhar literatura.",
        },
        {
          name: "twitter:description",
          content: "Meus Escritos",
        },
        // image must be an absolute path
        { name: "twitter:image", content: this.logo },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Meus Escritos - Um site para poder compartilhar literatura.",
        },
        { property: "og:site_name", content: "Meus Escritos" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.logo },
        { property: "og:image:width", content: "400" },
        { property: "og:image:height", content: "300" },
        {
          property: "og:description",
          content: "Meus Escritos",
        },
      ],
    };
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
