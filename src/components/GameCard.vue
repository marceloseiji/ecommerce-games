<template>
  <div class="row">
    <div
      class="col-sm-12 col-md-6 col-lg-4"
      v-for="item in items"
      v-bind:key="item.id"
      :id="item.id"
      @click="add(item.id, item.name)"
    >
      <a class="card-link">
        <b-card
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <div class="img-holder">
            <img :src="require(`@/assets/${item.image}`)" />
          </div>

          <h4 class="card-title">{{ item.name }}</h4>

          <b-card-text class="message">Adicionar ao carrinho</b-card-text>

          <b-card-text class="price">R$ {{ item.price }}</b-card-text>
        </b-card>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {},
  data() {
    return {
      items: null,
      showThis: null,
      game: {
        id: null,
        name: null,
      },
      cart: [],
      browserCart: document.getElementById("cart"),
    };
  },
  methods: {
    showAll() {
      this.$controllers.getAll().then((response) => {
        if (!response.error) {
          this.items = response;
          console.info("Items loaded");
        } else {
          throw new Error(response.error);
        }
      });
    },
    add(id, name) {
      this.game.id = id;
      this.game.name = name;

      this.$controllers.addToCart(id, name).then((response) => {
        if (!response.error) {
          console.log("chamando controllers", response);
          this.$bvToast.toast("foi adicionado ao carrinho", {
            title: this.game.name,
            variant: "success",
            toaster: "b-toaster-top-center",
          });
          this.cart.push(response);
          this.browserCart.innerHTML = this.cart;
          console.log(this.cart);
        } else {
          throw new Error(response.error);
        }
      });
    },
  },
  mounted() {
    this.showAll();
  },
};
</script>

<style lang="scss">
@import "../variables.scss";
.title {
  font-size: 48px;
  margin: 44px 0;
  text-align: left;
}
.card-link {
  color: inherit;
}
.card.mb-2 {
  border: none;
  position: relative;
  margin-bottom: 104px !important;
  .img-holder {
    display: flex;
    height: 230px;
    background-color: $color1;
    img {
      width: 180px;
      height: 180px;
      margin: auto;
    }
  }
  .card-body {
    padding: 0;
    .card-title {
      font-size: 16px;
      font-weight: 300;
      margin: 11px 0 2px 0;
    }
    .card-text {
      color: $color2;
      font-weight: 800;
      font-size: 16px;
    }
    .message {
      position: absolute;
      top: 225px;
      margin-top: 23px;
      opacity: 0;
      transition: 0.5s ease;
      width: 100%;
    }
  }
  &:hover {
    cursor: pointer;
    .message {
      opacity: 1;
    }
    .price {
      opacity: 0;
    }
    .card-title {
      opacity: 0;
    }
  }
}
</style>
