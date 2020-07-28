<template>
  <div class="row cart" id="cart">
    <b-card tag="article" class="mb-2">
      <div class="cart-part head">
        <h3 class="title">Carrinho</h3>
      </div>
      <div id="cart-body" class="cart-part body">
        <b-img
          v-if="cartItems == null"
          :src="require(`@/assets/cart-icon.svg`)"
          fluid
          alt="Cart Image"
        ></b-img>
        <b-card-text v-if="cartItems == null" class="text">Até o momento seu carrinho está vazio</b-card-text>

        <div v-for="item in cartItems" v-bind:key="item.id" class="mini-card">
          <b-icon icon="plus-circle-fill" class="remove-icon" @click="remove(item.id, item.name)"></b-icon>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="4" class="img-holder">
                <b-card-img
                  :src="require(`@/assets/${item.image}`)"
                  alt="Image"
                  class="rounded-0 game-img"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="item.name">
                  <b-card-text>R$ {{ item.price }}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="values">
        <div class="subtotal">
          Subtotal
          <span>R$: {{ subtotal }}</span>
        </div>
        <div class="shipping">
          Frete
          <span v-if="shipping != 0">R$: {{ shipping }}</span>
          <span v-if="shipping == 0" style="color: green">Grátis</span>
        </div>
        <div class="total">
          Total
          <span>R$: {{ total }}</span>
        </div>
      </div>

      <div class="cart-part footer">
        <b-button class="btn" href="#" variant="primary">Finalizar compra</b-button>
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
      cartItems: null,
      shipping: "0,00",
      subtotal: "0,00",
      subtotalCalc: null,
      total: "0,00",
      totalCalc: null,
      itemIdRemove: null,
      itemIndexRemove: null
    };
  },
  methods: {
    remove(id, name) {
      //Find element to remove index
      this.itemIndexRemove = this.cartVector.findIndex((element, index) => {
        if (element.id === id) {
          console.log(index);
          return index;
        }
      });

      //Remove from array the element to remove
      this.cartVector.splice(this.itemIndexRemove, 1);

      this.$bvToast.toast("foi removido do carrinho", {
        title: name,
        variant: "danger",
        toaster: "b-toaster-top-center"
      });
      this.itemsUpdate();
    },
    itemsUpdate() {
      //Update items from cart
      this.cartItems = Object.assign({}, this.cartVector); //Objects creator
      this.valueCalcs();
    },
    valueCalcs() {
      if (this.cartVector.length > 0) {
        //Calc of shipping
        this.shipping = (this.cartVector.length * 10).toFixed(2);

        //Calc of subtotal
        this.subtotalCalc = this.cartVector.map(element => {
          return element.price;
        });
        this.subtotal = this.subtotalCalc.reduce(function(
          acumulator,
          actualValue
        ) {
          return acumulator + actualValue;
        });
        this.subtotal = this.subtotal.toFixed(2);
        if (this.subtotal > 250) {
          this.shipping = 0;
        }

        //Total calc
        this.total = (
          parseFloat(this.shipping) + parseFloat(this.subtotal)
        ).toFixed(2);
      } else {
        this.shipping = "0,00";
        this.subtotal = "0,00";
        this.subtotalCalc = null;
        this.total = "0,00";
        this.cartItems = null;
      }
    }
  },
  created() {
    bus.$on("addToCartBusEvent", data => {
      this.cartVector.push({ ...data }); //Vector creator
      this.cartItems = Object.assign({}, this.cartVector); //Objects creator

      this.valueCalcs();
    });
  }
};
</script>

<style lang="scss">
@import "../variables.scss";

.cart {
  margin-top: 52px;
  min-height: 325px;
  .card {
    margin-left: 10px;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 25px 20px 5px 20px;
    text-align: left;
    .card-title {
      font-size: 14px;
      margin: 0;
      color: $color3;
    }
    .card-text {
      font-size: 14px;
      font-weight: 800;
    }
    .game-img {
      width: 41px;
      height: 42px;
    }
    .img-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color1;
    }
  }
  .cart-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    .mini-card {
      position: relative;
      &:hover {
        .remove-icon {
          opacity: 1;
          cursor: pointer;
          transition: 0.5s ease;
        }
      }
      .remove-icon {
        color: #3486e6;
        transform: rotate(45deg);
        position: absolute;
        right: -9px;
        top: 50%;
        z-index: 1;
        opacity: 0;
        transition: 0.5s ease;
      }
      .card-body {
        padding: 7px 9px;
      }
      .card {
        margin: 0;
        min-height: 68px;
        margin: 2px 0;
        border: none;
      }
    }
  }
  .head {
    text-align: left;
    justify-content: flex-start;
    .title {
      font-size: 18px;
      font-weight: 700;
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
    .btn {
      background-color: $color2;
      padding: 15px 0.75rem;
      font-weight: 600;
    }
  }
  .values {
    margin-bottom: 22px;
    div {
      margin: 15px 0;
      font-size: 14px;
      color: $color3;
    }
    .subtotal,
    .shipping {
      span {
        font-size: 16px;
        font-weight: 700;
        float: right;
        color: $color4;
      }
    }
    .total {
      span {
        font-size: 20px;
        font-weight: 700;
        float: right;
        color: $color4;
      }
    }
  }
}
</style>
