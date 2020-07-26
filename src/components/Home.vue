<template>
  <div class="hello">
    <h1>Home</h1>
    <div class="col-12 col-md-4" v-for="item in items" v-bind:key="item.id">
      <GameCard />
    </div>
  </div>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  name: "Home",
  components: {
    GameCard,
  },
  props: {},
  data() {
    return {
      items: null,
    };
  },
  methods: {
    showAll() {
      this.$request.getAll().then((response) => {
        this.items = response;
        console.log(this.items);
      });
    },
  },
  mounted() {
    this.showAll();
  },
};
</script>

<style lang="scss">
.hello {
  h1 {
    color: red;
  }
}
</style>
