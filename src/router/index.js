import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import( "../views/Home.vue")
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
