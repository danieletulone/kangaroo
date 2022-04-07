<script setup lang="ts">
import { RouterView } from "vue-router";
import KHeader from "@/components/organisms/headers/KHeader.vue";
import KFooter from "@/components/organisms/footers/KFooter.vue";
</script>

<template>
  <k-header />

  <RouterView />

  <k-footer />
</template>
