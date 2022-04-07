import { reactive } from "vue";
import type { User } from "@/common/interfaces/user.interface";

export const user = reactive<User>({
  id: "",
  token: "",
});
