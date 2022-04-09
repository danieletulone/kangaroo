import { StyleProp } from "@/common";
import { reactive } from "vue";

export const colors = reactive({
  [StyleProp.COLOR_PRIMARY]: "#5F5F5F",
  [StyleProp.COLOR_SECONDARY]: "#383838",
  [StyleProp.COLOR_LIGHT]: "#E0E0E0",
});
