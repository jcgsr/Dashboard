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
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Escritor"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Procurar</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Fonte" right>
            <b-dropdown-item href="#">Lato</b-dropdown-item>
            <b-dropdown-item href="#">Georgia</b-dropdown-item>
            <b-dropdown-item href="#">Roboto</b-dropdown-item>
            <b-dropdown-item href="#">Ubuntu</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Usuário</em>
            </template>

             <template v-if="user.loggedIn">
            <b-nav class="ml-4">{{user.data.displayName}}</b-nav>
            <b-dropdown-item>
              <a @click.prevent="signOut">Sign out</a>
            </b-dropdown-item>
          </template>
          <template v-else>
            <b-dropdown-item >
              <router-link to="/login">Entrar</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/register">Cadastrar</router-link>
            </b-dropdown-item>
          </template>
            <!-- <b-dropdown-item>
              <router-link to="/login">Entrar</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/register">Cadastrar</router-link>
            </b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'home'
          })
        })
    }
  }
}
</script>

<style lang="css">
#id {
  margin: 0 auto;
}
</style>