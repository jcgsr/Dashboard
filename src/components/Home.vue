<template>
  <div class="hello">
    <h1 class="animate__animated animate__backInUp mt-4 display-1">
      {{ msg }}
    </h1>
    <img
      src="../assets/pen.jpg"
      id="pen"
      class="animate__animated animate__fadeIn"
      alt="Foto de uma Caneta"
      v-show="fotoShow"
    />
    <div class="spinner">
      <rotate-square2 v-show="loadShow"></rotate-square2>
    </div>
    <b-container class="escritos mt-2">
      <b-row>
        <b-col>
          <b-button class="m-4" id="btn" @click="handler()" variant="success"
            >Ler Escritos</b-button
          >
          <b-button
            class="m-4"
            @click="$router.push('escritos')"
            variant="warning"
          >
            <i class="fas fa-pen"></i>
          </b-button>

          <b-list-group>
            <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
              <strong>Autor: </strong> {{ usuario.nome_autor }} <br />
              <strong> Obra: </strong> {{ usuario.nome_obra }} <br />
              <b-card class="shadow text-left oldpaper">
                <read-more
                  more-str="continuar lendo..."
                  :text="usuario.obra"
                  link="#"
                  less-str="mostrar menos..."
                  :max-chars="300"
                ></read-more>
                <a href="#btn" v-smooth-scroll>
                  <i class="fas fa-arrow-circle-up"></i>
                </a>
              </b-card>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { RotateSquare2 } from "vue-loading-spinner";
export default {
  name: "Home",
  components: {
    RotateSquare2,
  },
  data() {
    return {
      msg: "Meus Escritos",
      usuarios: [],
      fotoShow: true,
      loadShow: false,
    };
  },
  methods: {
    async obterEscritos() {
      this.loadShow = true;
      try {
        await this.$http.get("usuarios.json").then((res) => {
          this.usuarios = res.data;
          this.$toasted.show(
            "As personagens e o universo ficcional de todas as obras nesse site são propriedade exclusiva de seus criadores e, por isso, de sua inteira responsabilidade. Este site é apenas um veículo para que se possa divulgar os Escritos dos escritores (principalmente de estudantes) para um público mais amplo, sem fins lucrativos."
          );
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.loadShow = false;
      }
    },
    handler() {
      this.obterEscritos(), (this.fotoShow = false);
    },
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
i {
  color: beige;
  font-size: 1.5rem;
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
  color: #12c273;
}
#readmore {
  color: yellow;
}
.escritos,
.text-left,
.hello,
#btn {
  scroll-behavior: smooth;
  font-size: 1.3rem;
}
.btn {
  margin: 0 auto;
}
.oldpaper {
  /* background-image: url("../assets/oldpaper2.jpg"); */
  background-color: rgb(87, 81, 81);
  color: white;
}
a {
  color: yellow;
}
#photo {
  display: none;
}
.spinner {
  margin: 0 auto;
}
</style>
