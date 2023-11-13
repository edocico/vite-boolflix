<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store: store,
    };
  },
  methods: {
    fetchQuery() {
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
  },
  mounted() {
    console.log(this.store);
  },
};
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <h1>Boolflix</h1>
    </div>
    <div class="search-box">
      <input
        class="text-box"
        type="text"
        v-model.trim="store.searchText"
        @keyup.enter="fetchQuery()"
      />
      <button class="search-btn" @click="fetchQuery()">Cerca</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  min-height: 120px;

  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  overflow: hidden;

  .logo {
    color: red;
    text-transform: uppercase;
    font-size: 32px;
  }

  .search-box {
    display: flex;
    gap: 30px;
    align-items: center;

    .text-box {
      min-width: 300px;
      height: 25px;
      border-radius: 20px;
      padding-left: 10px;
      border: 1px solid black;
    }

    .search-btn {
      border-radius: 20px;
      padding: 0px 20px;
      text-transform: uppercase;
      background-color: red;
      color: black;
      line-height: 2em;
      border: 1px solid black;
      font-weight: 900;
    }
  }
}
</style>
