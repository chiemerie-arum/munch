import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Regiser",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/restaurants/:id",
    name: "Restaurant",
    props: true,
    component: () => import("../views/Restaurant.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
