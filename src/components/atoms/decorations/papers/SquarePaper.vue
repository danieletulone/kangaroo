<script lang="ts" setup>
import KPaperLined from "@/components/atoms/decorations/papers/LinedPaper.vue";
</script>

<template>
  <k-paper-lined>
    <div class="line-b" v-for="i in 15" :key="i"></div>
  </k-paper-lined>
</template>

<style scoped>
.line-b {
  border-left: 1px solid #c4c4c4;
  left: 0;
  margin: 0 17.5px;
  height: 100%;
}
</style>
