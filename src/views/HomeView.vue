<script setup lang="ts">
import { RouterLink } from "vue-router";
import KHeaderHome from "@/components/organisms/headers/KHeaderHome.vue";
import KButton from "@/components/atoms/KButton.vue";
import KFooter from "@/components/organisms/footers/KFooter.vue";
import KPaper from "@/components/atoms/decorations/papers/Paper.vue";
import KPaperLined from "@/components/atoms/decorations/papers/LinedPaper.vue";
</script>

<template>
  <!-- Header -->
  <KHeaderHome />

  <!-- Call To Action -->
  <div class="container" style="margin-top: 50px">
    <div class="flex-center">
      <k-button>
        <RouterLink to="dashboard">
          {{ $t("views.home.callToAction") }}
        </RouterLink>
      </k-button>
    </div>
  </div>

  <!-- Paper Decoration -->
  <div class="container paper-container flex-center" style="margin-top: 50px">
    <k-paper-lined color="#efefef" />
    <k-paper color="#ffdada"></k-paper>
  </div>

  <!-- Footer -->
  <k-footer />
</template>

<style lang="scss">
// | ---------------------------------
// | Generic Css
// | ---------------------------------

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: inherit;
  text-decoration: none;

  &:focus,
  &:hover {
    color: inherit;
  }
}

// | ---------------------------------
// | Paper Decoration Composition
// | ---------------------------------

.paper-container {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.paper:nth-child(1) {
  transform: rotate(-15deg) translateX(-120px);
  z-index: 1;
  bottom: -100px;
}

.paper:nth-child(2) {
  transform: rotate(15deg) translateX(120px);
  bottom: -65px;
}
</style>
