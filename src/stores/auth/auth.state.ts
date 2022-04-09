import { reactive } from "vue";
import type { User } from "@/common";

export const user = reactive<User>({
  id: "",
  token: "",
});
