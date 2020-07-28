<template>
  <div class="container home">
    <div class="row">
      <div class="col-sm-12 col-md-9">
        <div class="row">
          <div class="col-sm-12 col-md-6 title-holder">
            <h1 class="title">Games</h1>
          </div>
          <div class="col-sm-12 col-md-6 dropdown-holder">
            <Dropdown />
          </div>
        </div>

        <GameCard />
      </div>
      <div class="col-sm-12 col-md-3">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard";
import Cart from "./Cart";
import Dropdown from "./Dropdown";

export default {
  name: "Home",
  components: {
    GameCard,
    Cart,
    Dropdown
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
