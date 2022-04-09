import { reactive, watch, type ComputedRef } from "vue";
import { useRoute } from "vue-router";

export const useAutoHide = function (
  shouldHide: ComputedRef<boolean>,
  height: number
) {
  const route = useRoute();

  const style = reactive({
    transform: "translateY(0px)",
    height: `${height}px`,
  });

  watch(route, () => {
    if (shouldHide.value) {
      style.transform = "translateY(-80px)";
      style.height = "0px";
    } else {
      style.transform = "translateY(0px)";
      style.height = "80px";
    }
  });

  return {
    style,
  };
};
