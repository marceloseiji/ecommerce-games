<template>
  <div class="hello">
    <h1>Home</h1>
    <div class="col-12 col-md-4" v-for="item in items" v-bind:key="item.id">
      {{ item.name }}:
      {{ item.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
  },
  data(){
    return {
      items: null
    }
  },
  methods: {
    showAll() {
      this.$request.getAll().then((response) => {
        this.items = response;
        console.log(this.items);
      })
    }
  },
  mounted() {
    this.showAll();
  }
};
</script>

<style lang="scss">
  .hello {
    h1 {
      color: red;
    }
  }
</style>
