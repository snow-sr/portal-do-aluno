/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
