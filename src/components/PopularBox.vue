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
    <div class="card">
      <img
        :src="`${this.store.imgPath}${this.popularItem.poster_path}`"
        alt="poster"
      />
      <div class="overlay">
        <ul>
          <li>
            <span>Titolo originale:</span> {{ popularItem.original_title }}
          </li>
          <li><span>Voto:</span> {{ popularItem.vote_average }}</li>
          <li><span>Overview:</span> {{ popularItem.overview }}</li>
        </ul>
      </div>
    </div>
    <h4>{{ popularItem.title }}</h4>
    <img
      v-if="store.flags[popularItem.original_language]"
      :src="store.flags[popularItem.original_language]"
      alt=""
    />
    <p v-else>{{ popularItem.original_language }}</p>
  </div>
</template>

<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 4);
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

  .card {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 50;
    overflow: auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    padding: 5px;

    li {
      margin-bottom: 5px;
      font-size: 12px;
    }

    span {
      text-transform: uppercase;
      font-weight: 900;
    }
  }
}

.box.box:hover .overlay {
  display: block;
}
</style>
