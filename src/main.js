import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import VueRouter from "vue-router";

//Controllers request, cart methods
import controllers from "./controllers";
import cart from "./components/Cart";
Vue.prototype.$controllers = controllers;
Vue.prototype.$cart = cart.methods;

Vue.config.productionTip = false;

//Add bootstrap-vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Cria os objetos para as rotas
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

//Instacia o router do vue
const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: (h) => h(App),
  router, //Passa para o vue as configurações das rotas
}).$mount("#app");
