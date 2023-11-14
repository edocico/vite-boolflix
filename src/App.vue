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
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/genre/tv/list", {
        params: {
          api_key: this.store.Api_Key,
          language: "it-IT",
        },
      })
      .then((res) => {
        console.log(res.data.genres);
        const gen = res.data.genres;
        this.store.generiResults = gen;
      });
  },
  methods: {
    fetchQuery() {
      (store.popularResults = []), (store.upcomingResults = []);
      if (this.store.searchText === "") {
        store.movieResults = [];
        store.tvResults = [];
      }
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.Api_Key,
            language: "it-IT",
            query: this.store.searchText,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          const movieItem = res.data.results;
          this.store.movieResults = movieItem;
        });
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.store.Api_Key,
            language: "it-IT",
            query: this.store.searchText,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          const tvItem = res.data.results;
          this.store.tvResults = tvItem;
        });
    },
    returnHome() {
      (store.movieResults = []),
        (store.tvResults = []),
        (store.upcomingResults = []);
      store.byGenResults = [];
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
    fetchUpcoming() {
      (store.movieResults = []),
        (store.tvResults = []),
        (store.popularResults = []);
      axios
        .get("https://api.themoviedb.org/3/movie/upcoming", {
          params: {
            api_key: this.store.Api_Key,
            language: "it_IT",
          },
        })
        .then((res) => {
          console.log(res.data);
          const upcomingItem = res.data.results;
          this.store.upcomingResults = upcomingItem;
        });
    },
    controlModal() {
      this.store.modalOpen = !this.store.modalOpen;
    },
    closeModal() {
      this.store.modalOpen = false;
    },
  },
};
</script>

<template>
  <div class="app">
    <AppHeader
      @search="fetchQuery"
      @home="returnHome"
      @next="fetchUpcoming"
      @open="controlModal"
    />
    <AppMain @close="closeModal" />
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
