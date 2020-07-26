<template>
  <div class="container home">
    <h1 class="title">Games</h1>
    <div class="row">
      <div class="col-10">
        <GameCard />
      </div>
      <div class="col-2">
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
    Cart,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "../variables.scss";
.home {
  font-family: $font;
}
</style>
