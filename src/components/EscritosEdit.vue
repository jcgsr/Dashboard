<template>
  <div class="edit">
    <h1 class="mt-4">{{ msg }}</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-list-group>
            <b-list-group-item>
              <b-card class="shadow">
                <ul class="list-group">
                  <li v-for="(dado, id) in usuarioDados" :key="id">
                    <strong>Nome da Obra:</strong> <br />
                    {{ dado.nome_obra }}
                    <hr />
                    <br />
                    <strong>Obra:</strong> <br />
                    {{ dado.obra }} <br />
                    <b-button
                      variant="info"
                      @click="carregar(id)"
                      class="mt-4 mr-4"
                      >Carregar Escrito</b-button
                    >
                    <b-button variant="danger" @click="excluir(id)" class="mt-4"
                      >Excluir Escrito</b-button
                    >
                    <hr id="hr-hr" />
                  </li>
                </ul>
              </b-card>
            </b-list-group-item>
          </b-list-group>

          <b-form-input> </b-form-input>

          <b-button variant="warning" @click="mostrar" class="mt-4"
            >Mostrar Escritos</b-button
          >

          <br />
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
export default {
  name: "EscritosEdit",
  data() {
    return {
      msg: "Editar Escritos",
      usuarioDados: [],
      id: null,
      usuario: {
        nome_obra: "",
        obra: "",
      },
    };
  },
  methods: {
    mostrar() {
      this.$http.get("usuarios.json").then((res) => {
        this.usuarioDados = res.data;
        console.log(this.usuarioDados);
      });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarioDados[id] };
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar());
      alert("Escrito excluído com sucesso!");
    },
    limpar() {
      (this.usuario.nome_obra = ""), (this.usuario.obra = "");
    },
  },
};
</script>
<style scoped>
#hr-hr {
  border-top: 2px solid green;
}
i {
  color: white;
}
li {
  list-style: none;
}
</style>
