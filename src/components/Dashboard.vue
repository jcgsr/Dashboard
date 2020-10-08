<template>
  <div>
    <h1 class="mt-4">Bem-vindo, {{ user.data.displayName }}!</h1>
    <b-button v-b-toggle.sidebar-right>Painel</b-button>
    <b-sidebar id="sidebar-right" title="Painel" left shadow>
      <div class="px-3 py-2">
        <ul class="lista">
          <b-button variant="success">
            <router-link to="/escritos">
              <li><i class="fas fa-plus-square"></i> Adicionar Escritos</li>
            </router-link>
          </b-button>
          <b-button>
            <li><i class="fas fa-pen-square"></i> Editar Escritos</li>
          </b-button>
          <b-button variant="danger">
            <li><i class="fas fa-minus-square text-white"></i> Excluir Escritos</li>
          </b-button>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style lang="css">
.lista {
  list-style: none;
  margin: 0 auto;
  display: inline-grid;
}

.btn {
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.fa, .fab, .fad, .fal, .far, .fas {
  color: white;
}
</style>