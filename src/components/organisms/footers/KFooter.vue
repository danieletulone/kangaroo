<script lang="ts" setup>
import KFooterBrand from "@/components/organisms/footers/KFooterBrand.vue";
import KFooterLinks from "@/components/organisms/footers/KFooterLinks.vue";
</script>

<template>
  <footer class="container-fluid">
    <div class="container">
      <k-footer-links />
      <k-footer-brand class="py-4" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #5f5f5f;
}
</style>
