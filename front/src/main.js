/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import CreatePost from "./views/CreatePost.vue";
import UserPage from "./views/UserPage.vue";

import "@/assets/base.css";
import "tw-elements";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  { path: "/createPost", component: CreatePost },
  { path: "/userPage", component: UserPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
