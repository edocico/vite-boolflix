<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  props: {
    tvItem: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="box">
    <img :src="`${this.store.imgPath}${this.tvItem.poster_path}`" alt="" />
    <p>{{ tvItem.name }}</p>
    <p>{{ tvItem.original_name }}</p>
    <p>{{ tvItem.original_language }}</p>
    <p>{{ tvItem.vote_average }}</p>
  </div>
</template>
<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 5);
  padding: 10px;
  overflow: auto;
}
</style>
