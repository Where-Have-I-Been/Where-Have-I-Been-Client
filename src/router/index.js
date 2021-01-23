import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () => import( "../views/Profil.vue")
  },
  {
    path: "/userProfile",
    name: "User Profile",
    component: () => import("../views/ProfileSettingsView/UserProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userProfile/changePassword",
    name: "Change Password",
    component: () => import("../views/ProfileSettingsView/changePassword.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userProfile/resetPassword",
    name: "Reset Password",
    component: () => import("../views/ProfileSettingsView/resetPassword.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userProfile/email",
    name: "Change Email",
    component: () => import("../views/ProfileSettingsView/ProfileEmail.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userProfile/profileDescription",
    name: "Profil Description",
    component: () => import("../views/ProfileSettingsView/profilDescription.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userProfile/profileDeleteAccount",
    name: "profileDeleteAccount",
    component: () => import("../views/ProfileSettingsView/ProfileDeleteAccount.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
        router.push("/")
      } else {
        next(true)
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
        router.push("/")
      } else {
        next(true)
      }
    },
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("../views/Feed.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/community",
    name: "Community",
    component: () => import("../views/Community.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/community/users",
    name: "Community Users",
    component: () => import("../views/CommunityuUser.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      return next();
    } else {
      next("/login");
    }
  } else {
    return next();
  }
});

export default router;