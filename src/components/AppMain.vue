<script>
import MoviesBox from "./MoviesBox.vue";
import TvBox from "./TvBox.vue";
import { store } from "../store";

export default {
  components: {
    MoviesBox,
    TvBox,
  },
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <main class="app-main">
    <section class="movies-section">
      <h2>movies:</h2>
      <div class="container">
        <div class="row">
          <MoviesBox
            v-for="(movie, index) in this.store.movieResults"
            :key="index"
            :movieItem="movie"
          />
        </div>
      </div>
    </section>
    <section class="tv-section">
      <h2>tv:</h2>
      <div class="container">
        <div class="row">
          <TvBox
            v-for="(tv, index) in this.store.tvResults"
            :key="index"
            :tvItem="tv"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  flex-grow: 1;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background-color: gray;

  .movies-section {
    border-bottom: 1px solid black;
    flex-basis: calc(100% / 2);
    padding: 30px;

    h2 {
      text-transform: uppercase;
      color: white;
      text-shadow: 1px 1px 2px black;
      margin-bottom: 15px;
    }
  }

  .tv-section {
    border-bottom: 1px solid black;
    flex-basis: calc(100% / 2);
    padding: 30px;

    h2 {
      text-transform: uppercase;
      color: white;
      text-shadow: 1px 1px 2px black;
      margin-bottom: 15px;
    }
  }
}

.container {
  overflow: auto;
}

.row {
  flex-wrap: wrap;
}
</style>
