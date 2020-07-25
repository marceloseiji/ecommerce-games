import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import VueRouter from "vue-router";
import request from "./request";

Vue.prototype.$request = request;

Vue.config.productionTip = false;

//Cria os objetos para as rotas
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  }
];

//Instacia o router do vue
const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: (h) => h(App),
  router, //Passa para o vue as configurações das rotas
}).$mount("#app");
