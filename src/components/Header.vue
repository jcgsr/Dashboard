<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <router-link to="/">
        <i class="fas fa-home text-white"></i>
      </router-link>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
         <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuário</em>
            </template>

            <template v-if="user.loggedIn">
              <b-nav class="ml-4">{{ user.data.displayName }}</b-nav>

              <b-dropdown-item>
                <router-link to="/dashboard">Painel</router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <a @click.prevent="signOut">Sign out</a>
              </b-dropdown-item>
            </template>

            <template v-else>
              <b-dropdown-item>
                <router-link to="/login">Login</router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link to="/escritos">Enviar Escrito</router-link>
              </b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Header",
  data() {
    return {
      name: "header",
      searchQuery: null,
      resources: [
        { author: "Jovane", uri: "jovane" },
        { author: "Manoel Bandeira", uri: "manoel" },
        { author: "Carlos Drummond de Andrade", uri: "drummond" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.author.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
  },
};
</script>

<style lang="css">
#id {
  margin: 0 auto;
}
</style>
