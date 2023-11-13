<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  props: {
    popularItem: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="box">
    <img
      :src="`${this.store.imgPath}${this.popularItem.poster_path}`"
      alt="poster"
    />
    <p>{{ popularItem.title }}</p>
    <p>{{ popularItem.original_title }}</p>
    <p>{{ popularItem.original_language }}</p>
    <p>{{ popularItem.vote_average }}</p>
  </div>
</template>

<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 5);
  padding: 10px;
  overflow: auto;
}
</style>
