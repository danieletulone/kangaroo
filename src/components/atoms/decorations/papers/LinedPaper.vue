<script lang="ts" setup>
import KPaper from "@/components/atoms/decorations/papers/Paper.vue";
</script>

<template>
  <k-paper>
    <div class="lines-wrapper">
      <div class="line" v-for="i in 15" :key="i"></div>
    </div>

    <div class="lines-wrapper d-flex">
      <slot></slot>
    </div>
  </k-paper>
</template>

<style scoped>
.lines-wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.line {
  border-top: 1px solid #c4c4c4;
  left: 0;
  margin: 35px 0px;
  width: 100%;
}
</style>
