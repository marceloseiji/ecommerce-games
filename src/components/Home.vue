<template>
  <div class="hello">
    <h1>Home</h1>
    <div class="col-12 col-md-4" v-for="item in items" v-bind:key="item.id">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
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
.hello {
  h1 {
    color: red;
  }
}
</style>
