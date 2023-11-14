<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    title() {
      if (this.item.title) {
        return this.item.title;
      } else if (this.item.name) {
        return this.item.name;
      }
    },
    originalTitle() {
      if (this.item.original_title) {
        return this.item.original_title;
      } else if (this.item.original_name) {
        return this.item.original_name;
      }
    },
    vote() {
      return Math.round(this.item.vote_average / 2);
    },
  },
};
</script>
<template>
  <div class="box">
    <div class="card">
      <img
        :src="`${this.store.imgPath}${this.item.poster_path}`"
        alt="poster"
      />
      <div class="overlay">
        <ul>
          <li><span>Titolo originale:</span> {{ originalTitle }}</li>
          <li>
            <span>Voto:</span>
            <font-awesome-icon
              v-for="n in vote"
              :key="n"
              :icon="['fas', 'star']"
              class="star"
            />
          </li>
          <li><span>Overview:</span> {{ item.overview }}</li>
        </ul>
      </div>
    </div>
    <h4>{{ title }}</h4>
    <img
      v-if="store.flags[item.original_language]"
      :src="store.flags[item.original_language]"
      alt="flag"
    />
    <p v-else>{{ item.original_language }}</p>
  </div>
</template>
<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 4);
  padding: 10px;

  img {
    border: 2px solid white;
    border-radius: 10px;
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
    border-radius: 10px;

    li {
      margin-bottom: 5px;
      font-size: 14px;
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

.star {
  color: yellow;
}
</style>
