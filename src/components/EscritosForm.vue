<template>
  <div class="dados">
    <h1>Adicionar novo Escrito</h1>
    <b-card class="shadow">
      <b-form-input
        type="date"
        v-model="usuario.data_obra"
        class="mb-2"
      ></b-form-input>
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
        >Salvar</b-button
      >
    </b-card>
    <b-button class="mt-4">
      <router-link to="/dashboard">
        <i class="fas fa-arrow-circle-left"></i>
      </router-link>
    </b-button>
  </div>
</template>

<script>
// import firebase from "firebase";
import { VueEditor } from "vue2-editor"
export default {
  name: "Escritos Formulário",
  components: {
  VueEditor
            },
  data() {
    return {
      name: "usuarios",
      usuarioDados: "",
      id: null,
      usuario: {
        data_obra: "",
        nome_autor: "",
        nome_obra: "",
        obra: "",
      },
    }
  },
  methods: {
    salvar() {
      const metodo = this.id ? "patch" : "post"
      const finalUrl = this.id ? `${this.id}.json` : ".json"
      this.$http[metodo](`usuarios${finalUrl}`, this.usuario)
      alert('Escrito adicionado com sucesso!')
       // const uid = firebase.auth().currentUser.uid
       // this.$http.post("usuarios.json", this.usuario).child(uid).set({
       // this.usuario.data_obra = "";
       // this.usuario.nome_autor = "";
       // this.usuario.nome_obra = "";
       // this.usuario.obra = "";
        //return firebase.database().ref('usuarios').child(uid).set({
          // name: this.form.name
            // })

      // });
      // alert('Escrito adicionado com sucesso!')
    },
  },
};
</script>

<style lang="css">
.dados {
  width: 50%;
  margin: 2rem auto;
}
</style>
