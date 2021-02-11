<template>
  <div class="cadastro">
    <h1>Cadastro</h1>
    <b-card class="shadow">
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <b-form @submit.prevent="submit" v-if="show">
        <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Digite seu nome"
            autofocus
          ></b-form-input>
        </b-form-group>

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
            autofocus
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

        <b-button type="submit" variant="primary">Cadastrar</b-button>
      </b-form>
    </b-card>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
      error: null,
    };
  },
  methods: {
    submit() {
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(data => {
          data.user.updateProfile({
              displayName: this.form.name,
            })
            this.writeUser()
           .then(() => {});
            alert('Cadastro efetuado com sucesso!')
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
        })
      .catch((err) => {
         this.error = err.message;
        });
    },
    writeUser(userId, name, email) {
      firebase.database().ref('usuarios/' + userId).set({
        name: name,
        email: email
          })
    }
  },
};
</script>

<style scoped>
.cadastro {
  width: 70%;
  margin: 0 auto;
}
</style>
