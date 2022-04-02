<script setup lang="ts">
import { Section } from "@/enums";

const footerLists: Record<string, string[]> = {
  [Section.DEVELOPERS]: ["Open Source", "Community", "Docs", "Get Started"],
  [Section.STORAGE]: ["Local", "Google Drive", "Dropbox", "Other Service"],
  [Section.SHOP]: ["Colours", "Styles", "Plugings"],
  [Section.PROJECT]: ["Creator", "Feedback", "Report a Problem", "Next steps"],
};
</script>

<template>
  <div class="row py-5">
    <div class="col-md-3" v-for="key in Object.keys(footerLists)" :key="key">
      <label>{{ $t("sections." + key) }}</label>
      <ul class="list-unstyled">
        <li v-for="link in footerLists[key]" :key="key + '' + link">
          <RouterLink to="dashboard">{{ link }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
label {
  color: #c2dbff;
  font-family: Nunito, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

ul {
  li {
    color: #c4c4c4;
    font-family: Nunito, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    margin: 10px 0;
  }
}
</style>
