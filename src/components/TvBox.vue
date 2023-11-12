<script>
export default {
  data() {
    return;
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
    <p>titolo</p>
    <p>titolo originale</p>
    <p>lingua</p>
    <p>voto</p>
  </div>
</template>
<style lang="scss" scoped>
.box {
  flex-basis: calc(100% / 5);
  padding: 10px;
}
</style>
