import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import cartridge from "./plugins/cartridges/cartridge";
import shade from "./plugins/shade/shade";

Vue.config.productionTip = false;
Vue.use(cartridge);
Vue.use(shade);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
