import Vue from "vue";
import App from "./App.vue";

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

new Vue({
  render: (h) => h(App),
}).$mount("#app");
