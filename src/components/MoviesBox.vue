<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  props: {
    movieItem: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="box">
    <img
      :src="`${this.store.imgPath}${this.movieItem.poster_path}`"
      alt="poster"
    />
    <p>{{ movieItem.title }}</p>
    <p>{{ movieItem.original_title }}</p>
    <p>{{ movieItem.original_language }}</p>
    <p>{{ movieItem.vote_average }}</p>
  </div>
</template>
<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 5);
  padding: 10px;
  overflow: auto;
}
</style>
