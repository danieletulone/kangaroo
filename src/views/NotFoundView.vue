<script setup lang="ts">
import { useSimilarRoute } from "@/composables";
import { RouterLink } from "vue-router";

const similarRoute = useSimilarRoute();
</script>

<template>
  <div
    class="container flex-center flex-column py-5"
    style="height: calc(100vh - 100px)"
  >
    <h1>Not Found.</h1>
    <p>
      Maybe you search for:
      <router-link :to="similarRoute" style="color: blue">
        {{ similarRoute }}
      </router-link>
    </p>
  </div>
</template>
