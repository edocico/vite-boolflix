<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store: store,
    };
  },
  created() {},
};
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
