import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import( "../views/Home.vue")
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import( "../views/Feed.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
