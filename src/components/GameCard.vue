<template>
  <div class="row">
    <div
      class="col-sm-12 col-md-6 col-lg-4"
      v-for="item in items"
      v-bind:key="item.id"
      :id="item.id"
      @click="callAdd(item.id, item.name, item.price, item.image)"
    >
      <a class="card-link">
        <b-card
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 game-card"
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
import { bus } from "../main";

export default {
  name: "GameCard",
  props: {},
  data() {
    return {
      items: null,
      showThis: null,
      itemsVector: [],
      game: {
        id: null,
        name: null,
        price: null,
        image: null
      },
      cart: [],
      browserCart: null
    };
  },
  methods: {
    showAll() {
      this.$controllers.getAll().then(response => {
        if (!response.error) {
          this.itemsVector = response; //Armazena Vetor

          Object.assign({}, response); //Transforma vetor em objeto
          this.items = response;
          console.info("Items loaded");
        } else {
          throw new Error(response.error);
        }
      });
    },
    //Send item added to cart component, use cart method
    callAdd(id, name, price, image) {
      this.game.id = id;
      this.game.name = name;
      this.game.price = price;
      this.game.image = image;

      bus.$emit("addToCartBusEvent", this.game);

      this.$bvToast.toast("foi adicionado ao carrinho", {
        title: this.game.name,
        variant: "success",
        toaster: "b-toaster-top-center"
      });
    },
    sortElements(data) {
      switch (data) {
        case "Ordem alfabética":
          this.itemsVector.sort((a, b) => {
            let comparison = 0;

            if (a.name > b.name) {
              comparison = 1;
            } else if (a.name < b.name) {
              comparison = -1;
            }
            return comparison;
          });

          this.items = Object.assign({}, this.itemsVector); //Transforma vetor em objeto

          console.log(this.itemsVector);
          break;

        case "Popularidade":
          console.log(data);
          break;
        case "Preço":
          console.log(data);
          break;
        default:
          console.log("Nothing changed");
      }
    }
  },
  created() {
    bus.$on("SortElements", data => {
      this.sortElements(data);
    });
  },
  mounted() {
    this.showAll();
  }
};
</script>

<style lang="scss">
@import "../variables.scss";
.card-link {
  color: inherit;
}
.card.mb-2.game-card {
  border: none;
  position: relative;
  margin-bottom: 104px !important;
  .img-holder {
    display: flex;
    height: 230px;
    background-color: $color1;
    border-radius: 3px;
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
      font-weight: 700;
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
