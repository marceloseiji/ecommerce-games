<template>
  <div class="container home">
    <h1 class="title">Games</h1>
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-4"
        v-for="item in items"
        v-bind:key="item.id"
      >
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
          <b-card-text>
            {{ item.price }}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
@import "../variables.scss";
.home {
  font-family: $font;
  .title {
    text-align: left;
  }
  .card {
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
      }
      .card-text {
      }
    }
  }
}
</style>
