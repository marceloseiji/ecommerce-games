<template>
  <div class="row cart" id="cart">
    <b-card tag="article" class="mb-2">
      <div class="cart-part head">
        <h3 class="title">Carrinho</h3>
      </div>
      <div id="cart-body" class="cart-part body" @change="cartChange()">
        <b-img :src="require(`@/assets/cart-icon.svg`)" fluid alt="Cart Image"></b-img>
        <b-card-text class="text">Até o momento seu carrinho está vazio</b-card-text>

        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                src="https://picsum.photos/400/400/?image=20"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
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
    return {
      cartTotal: null
    };
  },
  methods: {
    async addToCart(res) {
      console.log("res: ", res);
      return res;
    }
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
