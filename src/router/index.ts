import { createRouter, createWebHistory } from "vue-router";
import { RouteName } from "@/common";
import authRoutes from "@/router/auth.routes";
import storeRoutes from "@/router/store.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteName.HOME,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/dashboard",
      name: RouteName.DASHBOARD,
      component: () => import("@/views/DashboardView.vue"),
    },
    authRoutes,
    storeRoutes,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
