<script lang="ts" setup>
import { computed } from "vue";

/**
 * Component properties.
 */
const props = defineProps({
  radius: {
    type: Number,
    default: 150,
  },
});

/**
 * Side, width or height, expressed in pixel.
 */
const sidePixels = computed(() => {
  return props.radius * 2 + "px";
});
</script>

<template>
  <button class="flex-center">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  width: v-bind(sidePixels);
  height: v-bind(sidePixels);
  background-color: #828282;
  border-radius: 50%;
}
</style>
