import { RouteName } from "@/common";
import type { RouteRecordRaw } from "vue-router";

const storeRoutes: RouteRecordRaw = {
  path: "/store",
  name: RouteName.STORE,
  component: () => import("@/views/auth/AuthView.vue"),
  children: [
    {
      path: "colors",
      name: RouteName.STORE_COLOURS,
      component: () => import("@/views/auth/LoginView.vue"),
    },
    {
      path: "styles",
      name: RouteName.STORE_STYLES,
      component: () => import("@/views/auth/RegisterView.vue"),
    },
    {
      path: "plugins",
      name: RouteName.STORE_PLUGINS,
      component: () => import("@/views/auth/RegisterView.vue"),
    },
  ],
};

export default storeRoutes;
