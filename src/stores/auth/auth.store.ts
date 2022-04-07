import { defineStore } from "pinia";
import { user } from "@/stores/auth/auth.state";
import { isAuthenticated } from "@/stores/auth/auth.computed";
import { login } from "@/stores/auth/auth.actions";

/**
 * Auth store module.
 * Use it for user authentication and management.
 */
export const useAuth = defineStore("user", () => {
  return {
    user,
    login,
    isAuthenticated,
  };
});
