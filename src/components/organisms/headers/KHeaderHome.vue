<script lang="ts" setup>
import KLogo from "@/components/atoms/KLogo.vue";
</script>

<template>
  <header class="flex-center py-5">
    <div class="flex-center" style="flex-direction: column">
      <k-logo />
      <h1>Kangaroo</h1>
      <p>{{ $t("headers.home.slogan") }}</p>
    </div>
  </header>
</template>

<style scoped>
h1 {
  color: #828282;
  font-family: "Playfair Display SC", serif;
  font-size: 42px;
}

p {
  color: #c4c4c4;
  font-family: Nunito, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>
