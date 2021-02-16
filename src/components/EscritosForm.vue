<template>
  <div class="dados">
    <h1 class="m-4">Adicionar novo Escrito</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="shadow">
            <b-form-input
              type="date"
              v-model="usuario.data_obra"
              class="mb-2"
            ></b-form-input>
            <b-form-input
              class="form-control mb-2"
              @submit.prevent="handleSubmit"
              :class="{
                'is-invalid': $v.usuario.email.$error,
                'is-valid': !$v.usuario.email.$invalid,
              }"
              type="email"
              placeholder="E-mail*"
              required
              v-model.trim="$v.usuario.email.$model"
            ></b-form-input>
            <div class="invalid-feedback">
              <span v-if="!$v.usuario.email.required"
                >E-mail é obrigatório</span
              >
              <span v-if="!$v.usuario.email.isUnique">E-mail inválido</span>
            </div>
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

            <p id="obr">*Campo obrigatório</p>
            <!-- Vue2Editor -->
            <div class="vue_editor">
              <vue-editor v-model="usuario.obra"></vue-editor>
            </div>
            <vue-recaptcha ref="recaptcha" @click="verify" sitekey="6LfealkaAAAAALSUbaChAdKbElfF9X3uEItoQmAs"></vue-recaptcha>
             <audio id="play" src="../assets/writing.mp3"></audio>
            <b-button class="mt-2" @click.prevent="handler()" variant="success"
              >Enviar Escrito</b-button
            >
          </b-card>
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
// import firebase from "firebase";
import { VueEditor } from "vue2-editor";
import { required, email } from "vuelidate/lib/validators";
import VueRecaptcha from 'vue-recaptcha'
export default {
  name: "EscritosFormulário",
  components: {
    VueEditor, VueRecaptcha
  },
  data() {
    return {
      name: "usuarios",
      usuarioDados: "",
      sound: "../assets/writing.mp3",
      id: null,
      robot: true,
      usuario: {
        data_obra: "",
        nome_autor: "",
        email: "",
        nome_obra: "",
        obra: "",
      },
    };
  },
  validations: {
    usuario: {
      email: {
        required,
        email,
        isUnique(value) {
          if (value === "") return true;
          // eslint-disable-next-line
          let email_regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(email_regex.test(value));
            }, 350 + Math.random() * 300);
          });
        },
      },
    },
  },
  methods: {
    limpar() {
      (this.usuario.data_obra = ""),
        (this.usuario.nome_autor = ""),
        (this.usuario.nome_obra = ""),
        (this.usuario.obra = ""),
        (this.usuario.email = "");
    },
    salvar() {
      let filter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.usuario.email === "") {
        alert("E-mail é obrigatório!");
      } else if (!this.usuario.email.match(filter)) {
        alert("Não é um e-mail válido!");
      } else if (this.robot) {
        alert("Recaptcha necessário!")
      } else {
        const metodo = this.id ? "patch" : "post";
        const finalUrl = this.id ? `${this.id}.json` : ".json";
        this.$http[metodo](`usuarios${finalUrl}`, this.usuario);
        alert("Escrito enviado com sucesso!");
        this.limpar();
      }
    },
    verify(response) {
      if (response) this.robot = false
    },
    playSound() {
      document.querySelector("#play").play();
    },
    handler() {
      this.salvar(), this.playSound();
    },
  },
};
</script>

<style lang="css">
.btn {
  margin: 0 auto;
}
#obr {
  font-size: x-small;
  color: red;
  text-align: left;
}
i {
  color: white;
}
</style>
