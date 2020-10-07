<template>
  <footer class="footer">
    &copy;{{ new Date().getFullYear() }}{{ footer }}
    <div>
      {{ msg }}
      <a :href="link"><b-button variant="info">Jovane</b-button></a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: " - Meus Escritos",
      msg: "Site criado e desenvolvido por ",
      link: '"https://jcgsr.github.io/",',
    };
  },
};
</script>

<style lang="css">
footer {
  text-align: center;
  background-color: rgb(32, 30, 30);
  padding: 0.6rem;
  color: #ddd;
  margin-top: 1rem;
}

.foot a:link {
  text-decoration: none;
}

.foot a {
  font-size: smaller;
  
}

.btn {
  margin-top: auto;
}
</style>