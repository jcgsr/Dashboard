<template>
  <div class="dados">
    <h1 class="m-4">Adicionar novo Escrito</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="shadow">
            <b-form-input
              type="date"
              v-model="usuario.data_obra"
              class="mb-2"
            ></b-form-input>
            <b-form-input
              type="email"
              placeholder="E-mail"
              required
              v-model="usuario.email"
              class="mb-2"
            ></b-form-input>
            <p id="obr">*Campo obrigatório</p>
            <b-form-input
              type="text"
              placeholder="Nome do Autor"
              class="mb-2"
              v-model="usuario.nome_autor"
            ></b-form-input>
            <b-form-input
              type="text"
              placeholder="Nome do Obra"
              class="mb-2"
              v-model="usuario.nome_obra"
            ></b-form-input>

            <!-- Vue2Editor -->
            <div class="vue_editor">
              <vue-editor v-model="usuario.obra"></vue-editor>
            </div>

            <b-button class="mt-2" @click.prevent="salvar" variant="success"
              >Enviar Escrito</b-button
            >
          </b-card>
          <b-button class="mt-4">
            <router-link to="/dashboard">
              <i class="fas fa-arrow-circle-left"></i>
            </router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from "firebase";
import { VueEditor } from "vue2-editor";
export default {
  name: "EscritosFormulário",
  components: {
    VueEditor,
  },
  data() {
    return {
      name: "usuarios",
      usuarioDados: "",
      id: null,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      usuario: {
        data_obra: "",
        nome_autor: "",
        email: "",
        nome_obra: "",
        obra: "",
      },
    };
  },
  methods: {
    limpar() {
      (this.usuario.data_obra = ""),
        (this.usuario.nome_autor = ""),
        (this.usuario.nome_obra = ""),
        (this.usuario.obra = ""),
        (this.usuario.email = "");
    },
    isEmailValid: function() {
      return this.usuario.email == ""
        ? ""
        : this.reg.test(this.email)
        ? "E-mail válido!"
        : "E-mail inválido!";
    },
    salvar() {
      if (this.isEmailValid) {
        const metodo = this.id ? "patch" : "post";
        const finalUrl = this.id ? `${this.id}.json` : ".json";
        this.$http[metodo](`usuarios${finalUrl}`, this.usuario);
        alert("Escrito adicionado com sucesso!");
        this.limpar();
      } else {
        alert("E-mail inválido!");
      }
    },
  },
};
</script>

<style lang="css">
.btn {
  margin: 0 auto;
}
#obr {
  font-size: x-small;
  color: red;
  text-align: left;
}
i {
  color: white;
}
</style>
