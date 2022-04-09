<script lang="ts" setup>
import { useStyle } from "@/stores";
import { StyleProp } from "@/common";

const style = useStyle();

const primary = style.colors[StyleProp.COLOR_PRIMARY];
const secondary = style.colors[StyleProp.COLOR_SECONDARY];
</script>

<template>
  <button>
    <slot>Hello</slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 7.5px;
  border: 1px solid #fff;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-family: Nunito, sans-serif;
  letter-spacing: 1px;
  padding: 5px 15px;
  text-transform: uppercase;
  transition: 0.5s;
  background-color: v-bind(primary);
}

button:hover {
  background: v-bind(secondary);
  box-shadow: 0 8px 5px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
</style>
