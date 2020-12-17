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
  {
    path: "/community",
    name: "Community",
    component: () => import( "../views/Community.vue")
  },
  {
    path: "/community/users",
    name: "CommunityUsers",
    component: () => import( "../views/CommunityuUser.vue")
  },
  
  {
    path: "/userProfile",
    name: "userProfile",
    component: () => import( "../views/UserProfile.vue")
  },
  {
    path: "/userProfile/changePassword",
    name: "changePassword",
    component: () => import( "../views/changePassword.vue")
  },
  {
    path: "/userProfile/email",
    name: "changeEmail",
    component: () => import( "../views/ProfileEmail.vue")
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import( "../views/Profil.vue")
  },
  {
    path: "/userProfile/profileDescription",
    name: "profilDescription",
    component: () => import( "../views/profilDescription.vue")
  },
  {
    path: "/userProfile/profileDeleteAccount",
    name: "profileDeleteAccount",
    component: () => import( "../views/ProfileDeleteAccount.vue")
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
