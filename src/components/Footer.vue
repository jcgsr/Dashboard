<template>
  <footer class="footer">
    {{ footer }} <br> &copy;2020 - {{ new Date().getFullYear() }} 
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: " Meus Escritos",
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
  margin: 0 auto;
  font-size: smaller;
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
