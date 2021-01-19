<template>
  <footer class="footer">
    &copy;2020 - {{ new Date().getFullYear() }}.{{ footer }} <br>
      {{ msg }}
      <a :href="link"><b-button variant="info">Jovane</b-button></a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: " Meus Escritos",
      msg: "Site criado e desenvolvido por ",
      link: '"https://jcgsr.github.io/",',
    };
  },
};
</script>

<style scoped>
footer {
  text-align: center;
  background-color: rgb(32, 30, 30);
  padding: 0.6rem;
  color: #ddd;
  margin: 1rem auto;
}

.foot a:link {
  text-decoration: none;
}

.foot a {
  font-size: smaller;
  
}

.btn {
  margin: 0 auto;
}
</style>
