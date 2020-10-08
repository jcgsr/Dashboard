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
      <b-form-textarea
        id="textarea"
        placeholder="Coloque seus Escritos aqui..."
        v-model="usuario.obra"
      ></b-form-textarea>

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
export default {
  data() {
    return {
      usuario: {
        data_obra: "",
        nome_autor: "",
        nome_obra: "",
        obra: "",
      },
    };
  },
  methods: {
    salvar() {
      this.$http.post("usuarios.json", this.usuario).then(() => {
        this.usuario.data_obra = "";
        this.usuario.nome_autor = "";
        this.usuario.nome_obra = "";
        this.usuario.obra = "";
      });
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