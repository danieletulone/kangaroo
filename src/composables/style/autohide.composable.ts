import { reactive, watch, type ComputedRef } from "vue";
import { useRoute } from "vue-router";

export const useAutoHide = function (
  shouldHide: ComputedRef<boolean>,
  height: number
) {
  const route = useRoute();

  const autoHideStyle = reactive({
    transform: "translateY(0px)",
    height: `${height}px`,
  });

  watch(route, () => {
    if (shouldHide.value) {
      autoHideStyle.transform = "translateY(-80px)";
      autoHideStyle.height = "0px";
    } else {
      autoHideStyle.transform = "translateY(0px)";
      autoHideStyle.height = "80px";
    }
  });

  return {
    autoHideStyle,
  };
};
