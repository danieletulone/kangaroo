<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useAutoHide } from "@/composables/style/autohide.composable";
import { useRootLink } from "@/composables/router/root-link.composable";
import KButton from "@/components/atoms/KButton.vue";

const route = useRoute();

const shouldHideHeader = computed(() => {
  return route.name === "dashboard";
});

const { autoHideStyle } = useAutoHide(shouldHideHeader, 80);

const titleLink = useRootLink();
</script>

<template>
  <header class="k-header-fluid container-fluid">
    <div class="k-header container">
      <div class="k-header-segment w-25">
        <k-button>
          <router-link to="login">Login</router-link>
        </k-button>
      </div>

      <div class="k-header-segment w-50">
        <div class="flex-center" style="flex-direction: column">
          <RouterLink :to="titleLink.link.value">
            <h1>Kangaroo</h1>
          </RouterLink>
        </div>
      </div>

      <div class="k-header-segment w-25">
        <div class="k-header-segment-content">
          <k-button>
            <router-link to="login">Login</router-link>
          </k-button>

          <k-button>
            <router-link to="register">Register</router-link>
          </k-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.k-header-fluid {
  transform: v-bind(autoHideStyle.transform);
  height: v-bind(autoHideStyle.height);
  transition: 0.5s;
  border-bottom: 1px solid #e0e0e0;
}

.k-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind(autoHideStyle.height);
}

h1 {
  color: #828282;
  font-family: "Playfair Display SC", serif;
  font-size: 32px;
  transition: 0.2s;
}
</style>
