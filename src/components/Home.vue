<template>
  <div class="hello">
    <h1 class="animate__animated animate__backInUp mt-4 display-1">
      {{ msg }}
    </h1>
    <img src="../assets/pen.jpg" alt="Foto de uma Caneta" v-show="fotoShow" />
    <b-container class="escritos mt-2">
    <b-row>
    <b-col>
      <b-button class="m-4" @click="handler()" variant="success">Escritos</b-button>
      <b-list-group>
        <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
          <strong>Autor: </strong> {{ usuario.nome_autor }} <br />
          <strong>Obra: </strong> {{ usuario.nome_obra }} <br />
          <b-card class="shadow">
          <div v-html="usuario.obra">
            {{ usuario.obra }}
          </div>
          </b-card>
        </b-list-group-item>
      </b-list-group>
    </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Meus Escritos",
      usuarios: [],
      fotoShow: true
    };
  },
  methods: {
    obterEscritos() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarios = res.data;
      });
    },
    handler() {
      this.obterEscritos(),
      this.fotoShow = false
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");

h1 {
  font-family: "Parisienne", cursive;
  font-weight: bold;
  color: rgb(87, 81, 81);
  opacity: 0.8;
}

img {
  width: 60%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn {
  margin: 0 auto;
}
</style>
