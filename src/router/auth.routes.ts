import { RouteName } from "@/common";
import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw = {
  path: "/auth",
  name: RouteName.AUTH,
  component: () => import("@/views/auth/AuthView.vue"),
  redirect: "/auth/login",
  children: [
    {
      path: "register",
      name: RouteName.AUTH_REGISTER,
      component: () => import("@/views/auth/RegisterView.vue"),
    },
    {
      path: "login",
      name: RouteName.AUTH_LOGIN,
      component: () => import("@/views/auth/LoginView.vue"),
    },
  ],
};

export default authRoutes;
