import { user } from "@/stores/auth/auth.state";

export const login = function (id: string, token: string) {
  user.id = id;
  user.token = token;
};
