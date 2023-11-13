<script>
import MoviesBox from "./MoviesBox.vue";
//import TvBox from "./TvBox.vue";
import { store } from "../store";
import axios from "axios";
//import PopularBox from "./PopularBox.vue";

export default {
  components: {
    MoviesBox,
    //TvBox,
    //PopularBox,
  },
  data() {
    return {
      store: store,
    };
  },
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: this.store.Api_Key,
          language: "it-IT",
        },
      })
      .then((res) => {
        console.log(res.data.results);
        const popularItem = res.data.results;
        this.store.popularResults = popularItem;
        console.log(this.store.popularResults);
      });
  },
};
</script>

<template>
  <main class="app-main">
    <section class="movies-section" v-if="store.movieResults.length > 0">
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
    <section class="tv-section" v-if="store.tvResults.length > 0">
      <h2>tv show:</h2>
      <div class="container">
        <div class="row">
          <MoviesBox
            v-for="(tv, index) in this.store.tvResults"
            :key="index"
            :tvItem="tv"
          />
        </div>
      </div>
    </section>
    <section
      class="popular-section"
      v-if="store.movieResults.length === 0 && store.tvResults.length === 0"
    >
      <h2>popular:</h2>
      <div class="container">
        <div class="row">
          <MoviesBox
            v-for="(popular, index) in this.store.popularResults"
            :key="index"
            :popularItem="popular"
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
  background-color: #525659;

  .movies-section {
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
    flex-basis: calc(100% / 2);
    padding: 30px;

    h2 {
      text-transform: uppercase;
      color: white;
      text-shadow: 1px 1px 2px black;
      margin-bottom: 15px;
    }
  }

  .popular-section {
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
  row-gap: 10px;
}
</style>
