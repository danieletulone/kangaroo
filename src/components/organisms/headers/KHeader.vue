<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useAutoHide, useRootLink } from "@/composables";
import { RouteName } from "@/common";
import KButton from "@/components/atoms/KButton.vue";

const route = useRoute();

const shouldHideHeader = computed(() => {
  return route.name === RouteName.DASHBOARD;
});

const { transform, height } = useAutoHide(shouldHideHeader, 80).style;

const titleLink = useRootLink();
</script>

<template>
  <header class="k-header-fluid container-fluid">
    <div class="k-header container">
      <div class="k-header-segment d-flex justify-content-start">
        <k-button>
          <router-link to="login">Login</router-link>
        </k-button>
      </div>

      <div class="k-header-segment flex-center">
        <RouterLink :to="titleLink.link.value">
          <h1>Kangaroo</h1>
        </RouterLink>
      </div>

      <div class="k-header-segment">
        <div class="k-header-segment-content d-flex justify-content-end">
          <k-button>
            <router-link :to="{ name: RouteName.AUTH_LOGIN }">
              Login
            </router-link>
          </k-button>

          <k-button>
            <router-link :to="{ name: RouteName.AUTH_REGISTER }">
              Register
            </router-link>
          </k-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.k-header-fluid {
  transform: v-bind(transform);
  height: v-bind(height);
  transition: 0.5s;
  border-bottom: 1px solid #e0e0e0;
}

.k-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: v-bind(height);
}

.k-header-segment {
  width: 33%;
}

h1 {
  color: #828282;
  font-family: "Playfair Display SC", serif;
  font-size: 32px;
  transition: 0.2s;
}
</style>
