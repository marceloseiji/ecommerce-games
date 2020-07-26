<template>
  <div class="row">
    Carrinho
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {},
  data() {
    return {
      items: null,
      showThis: null,
      game: {
        id: null,
        name: null,
      },
    };
  },
  methods: {
    addToCart(id, name) {
      this.game.id = id;
      this.game.name = name;
      this.$bvToast.toast("foi adicionado ao carrinho", {
        title: this.game.name,
        variant: "success",
        toaster: "b-toaster-top-center",
      });
      console.log(id, name);
    },
  },
};
</script>

<style lang="scss">
@import "../variables.scss";
</style>
