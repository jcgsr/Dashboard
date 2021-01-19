<template>
  <div class="login">
    <h1>Login</h1>
    <b-container>
    <b-row>
    <b-col lg="8" offset-lg="2">
    <b-card class="shadow">
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <b-form @submit.prevent="submit" v-if="show">
        <b-form-group
          id="input-group-1"
          label="E-mail:"
          label-for="input-1"
          description="Seu e-mail nunca será compartilhado."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Digite seu e-mail"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Senha:" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Digite sua senha"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Entrar</b-button>
      </b-form>
    </b-card>
    </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
.login {
  margin: 0 auto;
}
.btn {
  margin: 0 auto;
}
</style>
