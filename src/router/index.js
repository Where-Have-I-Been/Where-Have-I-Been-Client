import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import( "../views/Home.vue")
  },
  {
    path: "/community",
    name: "Community",
    meta: {title: 'Community'},
    component: () => import( "../views/Community.vue")
  },
  {
    path: "/community/users",
    name: "CommunityUsers",
    meta: {title: 'Community Users'},
    component: () => import( "../views/CommunityuUser.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
