import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import cartridge from "./plugins/cartridges/cartridge"

Vue.config.productionTip = false;
Vue.use(cartridge);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
