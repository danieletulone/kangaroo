import { computed } from "vue";
import { user } from "@/stores/auth/auth.state";

/**
 * Check if the user is authenticated.
 */
export const isAuthenticated = computed(() => {
  return user.id !== "";
});
