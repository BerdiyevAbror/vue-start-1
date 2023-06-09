import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import './tailwind.css'
import store from "./store/main";


import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
