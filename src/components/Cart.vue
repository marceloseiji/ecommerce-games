<template>
  <div class="row cart" id="cart">
    <b-card tag="article" class="mb-2">
      <div class="cart-part head">
        <h3 class="title">Carrinho</h3>
      </div>
      <div id="cart-body" class="cart-part body">
        <b-img :src="require(`@/assets/cart-icon.svg`)" fluid alt="Cart Image"></b-img>
        <b-card-text class="text">Até o momento seu carrinho está vazio</b-card-text>

        <div v-for="item in cartItems" v-bind:key="item.id">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="require(`@/assets/${item.image}`)" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="item.name">
                  <b-card-text>R$ {{ item.price }}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
      <div class="cart-part footer">
        <b-button class="btn" href="#" variant="primary">Finzalizar compra</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "Cart",
  props: {},
  data() {
    return {
      cartVector: [],
      cartItems: null
    };
  },
  methods: {
    addToCart() {}
  },
  created() {
    bus.$on("addToCartBusEvent", data => {
      console.log(data);
      this.cartVector.push({ ...data });
      this.cartItems = Object.assign({}, this.cartVector);
    });
  }
};
</script>

<style lang="scss">
@import "../variables.scss";

.cart {
  margin-top: 44px;
  min-height: 325px;
  .card {
    margin-left: 10px;
  }
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
    text-align: left;
    justify-content: flex-start;
    .title {
      font-size: 18px;
      font-weight: 800;
    }
  }
  .body {
    justify-content: center;
    .text {
      font-size: 14px;
      font-weight: 300;
      color: $color3;
      margin-top: 16px;
    }
  }
  .footer {
    justify-content: flex-end;
  }
}
</style>
