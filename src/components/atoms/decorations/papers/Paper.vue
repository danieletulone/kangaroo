<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  absolute: {
    typy: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#c4c4c4",
  },
  ratio: {
    type: Number,
    default: 0.65,
  },
  width: {
    type: Number,
    default: 325,
  },
  height: {
    type: Number,
    default: 500,
  },
});

/**
 * Width expressed in pixel.
 */
const widthPixels = computed(() => {
  return props.width + "px";
});

/**
 * Height expressed in pixel.
 */
const heightPixels = computed(() => {
  return props.height + "px";
});

const position = computed(() => {
  return props.absolute !== undefined ? "absolute" : "relative";
});
</script>

<template>
  <div class="paper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.paper {
  overflow: hidden;
  background-color: v-bind(color);
  border-radius: 35px;
  height: v-bind(heightPixels);
  position: v-bind(position);
  width: v-bind(widthPixels);
}
</style>
