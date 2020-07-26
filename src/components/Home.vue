<template>
  <div class="container home">
    <div class="row">
      <div class="col-9">
        <h1 class="title">Games</h1>
        <GameCard />
      </div>
      <div class="col-3">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard";
import Cart from "./Cart";

export default {
  name: "Home",
  components: {
    GameCard,
    Cart
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "../variables.scss";
.home {
  font-family: $font;
  h1 {
    font-size: 48px;
    margin: 44px 0;
    text-align: left;
  }
}
</style>
