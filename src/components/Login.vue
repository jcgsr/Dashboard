<template>
  <div class="login">
    <h1>Login</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">     
     

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

      <b-form-group
        id="password"
        label="Senha:"
        label-for="password"        
      >
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
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",       
        password: ""
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";      
      this.form.password = "";
     
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="css">
   .login {
      width: 40%;
      margin: 0 auto;
   }
</style>