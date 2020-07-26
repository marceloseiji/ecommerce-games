<template>
  <div class="row cart" id="cart">
    <b-card tag="article" class="mb-2">
      <div class="cart-part head">
        <h3 class="title">Carrinho</h3>
      </div>
      <div class="cart-part body">
        <b-img :src="require(`@/assets/cart-icon.svg`)" fluid alt="Cart Image"></b-img>
        <b-card-text class="text">Até o momento seu carrinho está vazio</b-card-text>
      </div>
      <div class="cart-part footer">
        <b-button class="btn" href="#" variant="primary">Finzalizar compra</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../variables.scss";

.cart {
  margin-top: 44px;
  min-height: 325px;
  .card-body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .cart-part {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .head {
    justify-content: flex-start;
  }
  .body {
    justify-content: center;
  }
  .footer {
    justify-content: flex-end;
  }
}
</style>
