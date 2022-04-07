import { computed } from "vue";
import { useAuth } from "@/stores/auth/auth.store";

export const useRootLink = function () {
  const authStore = useAuth();

  const link = computed(() => {
    if (authStore.isAuthenticated) {
      return { name: "dashboard" };
    }

    return { name: "home" };
  });

  return {
    link,
  };
};
