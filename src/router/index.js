import { createRouter, createWebHistory } from "vue-router";
import List from "../views/List.vue";

// component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/bill",
    name: "Bill",
    component: () => import(/* webpackChunkName: "bill" */ "../views/Bill.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
