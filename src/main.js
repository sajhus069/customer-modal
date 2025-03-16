import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios; // Attach Axios globally

new Vue({
  render: (h) => h(App),
}).$mount("#app");
