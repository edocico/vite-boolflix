<script>
import MoviesBox from "./MoviesBox.vue";

import { store } from "../store";
import axios from "axios";

export default {
  components: {
    MoviesBox,
  },
  emits: ["close"],
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
            :item="movie"
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
            :item="tv"
          />
        </div>
      </div>
    </section>

    <section
      class="popular-section"
      v-if="
        store.movieResults.length === 0 &&
        store.tvResults.length === 0 &&
        store.upcomingResults.length === 0
      "
    >
      <h2>popular:</h2>
      <div class="container">
        <div class="row">
          <MoviesBox
            v-for="(popular, index) in this.store.popularResults"
            :key="index"
            :item="popular"
          />
        </div>
      </div>
    </section>

    <section class="upcoming-section" v-if="store.upcomingResults.length > 0">
      <h2>upcoming:</h2>
      <div class="container">
        <div class="row">
          <MoviesBox
            v-for="(upcoming, index) in this.store.upcomingResults"
            :key="index"
            :item="upcoming"
          />
        </div>
      </div>
    </section>

    <div class="modal" v-if="this.store.modalOpen">
      <div class="list">
        <ul>
          <li v-for="(genere, index) in this.store.generiResults">
            {{ genere.name }}
          </li>
        </ul>
      </div>
      <font-awesome-icon
        @click="$emit('close')"
        class="cross"
        icon="fa-solid fa-xmark"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.app-main {
  flex-grow: 1;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background-color: #525659;
  position: relative;

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

  .upcoming-section {
    padding: 30px;

    h2 {
      text-transform: uppercase;
      color: white;
      text-shadow: 1px 1px 2px black;
      margin-bottom: 15px;
    }
  }

  .modal {
    background-color: rgba($color: #000000, $alpha: 0.9);
    width: 20%;
    min-height: 300px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: 15px;

    .cross {
      color: white;
      font-size: 20px;
    }

    li {
      color: white;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: 900;
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
