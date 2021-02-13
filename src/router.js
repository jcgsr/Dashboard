/*jshint esversion: 6 */
import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Info from "./components/Info";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EscritosForm from "./components/EscritosForm";
import EscritosEdit from "./components/EscritosEdit";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "link-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        auth: false,
        title: "Meus Escritos",
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        auth: false,
        title: "Cadastro",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        auth: true,
        title: "Login",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        auth: true,
        title: "Dashboard",
      },
    },
    {
      path: "/escritos",
      name: "escritos",
      component: EscritosForm,
      meta: {
        auth: false,
        title: "Escritos",
      },
    },
    {
      path: "/edit",
      name: "edit",
      component: EscritosEdit,
      meta: {
        auth: false,
        title: "Editar",
      },
    },
    {
      path: "/info",
      name: "info",
      component: Info,
      meta: {
        auth: false,
        title: "Info",
      },
    },
  ],
});
