import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import cartridge from "./plugins/cartridges/cartridge";
import vagueShade from "./plugins/vagueShade/vagueShade";

Vue.config.productionTip = false;
Vue.use(cartridge);
Vue.use(vagueShade);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
