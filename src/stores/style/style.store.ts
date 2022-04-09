import { defineStore } from "pinia";
import { StoreId } from "@/common";
import { colors } from "@/stores/style/style.state";

export const useStyle = defineStore(StoreId.STYLE, () => {
  return {
    colors,
  };
});
