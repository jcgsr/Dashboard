<template>
  <div>
    <h1 class="m-4">Bem-vindo(a), {{ user.data.displayName }}!</h1>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-tabs content-class="m-3">
              <b-tab title="Adicionar Escritos">
                <b-button variant="success">
                  <router-link to="/escritos">
                    <li>
                      <i class="fas mr-4 fa-plus-square"></i>Adicionar Escritos
                    </li>
                  </router-link>
                </b-button>
              </b-tab>
              <b-tab title="Editar Escritos">
                <b-button variant="info">
                  <router-link to="/edit">
                    <li><i class="fas mr-4 fa-pen"></i>Editar Escritos</li>
                  </router-link>
                </b-button>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
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

<style scoped>
.lista {
  list-style: none;
  margin: 0 auto;
  display: inline-grid;
}

.btn {
  display: flex;
  margin: 2rem auto;
}

a {
  color: white;
  text-decoration: none;
}
li {
  list-style: none;
}

.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  color: white;
}
</style>
