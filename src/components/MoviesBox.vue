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
    <h4>{{ movieItem.title }}</h4>
    <p>{{ movieItem.original_title }}</p>
    <p>{{ movieItem.original_language }}</p>
    <p>{{ movieItem.vote_average }}</p>
  </div>
</template>
<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 5);
  padding: 10px;

  img {
    border: 2px solid white;
    box-shadow: 0px 0px 5px black;
    margin-bottom: 5px;
  }

  h4 {
    text-transform: uppercase;
    color: white;
    text-shadow: 0px 0px 3px black;
  }
}
</style>
