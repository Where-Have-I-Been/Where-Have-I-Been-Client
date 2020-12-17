import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: () => import( "../views/ProfileSettingsView/UserProfile.vue")
  },
  {
    path: "/userProfile/changePassword",
    name: "changePassword",
    component: () => import( "../views/ProfileSettingsView/changePassword.vue")
  },
  {
    path: "/userProfile/email",
    name: "changeEmail",
    component: () => import( "../views/ProfileSettingsView/ProfileEmail.vue")
  },
  {
    path: "/userProfile/profileDescription",
    name: "profilDescription",
    component: () => import( "../views/ProfileSettingsView/profilDescription.vue")
  },
  {
    path: "/userProfile/profileDeleteAccount",
    name: "profileDeleteAccount",
    component: () => import( "../views/ProfileSettingsView/ProfileDeleteAccount.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
