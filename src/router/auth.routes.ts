import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw = {
  path: "/auth",
  name: "auth",
  component: () => import("@/views/auth/AuthView.vue"),
  children: [
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/LoginView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/RegisterView.vue"),
    },
  ],
};

export default authRoutes;
