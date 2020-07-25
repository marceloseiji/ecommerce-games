<template>
  <div class="hello">
    <h1>Homes</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
  },
  data(){
    return {

    }
  },
  methods: {
    showAll() {
      console.log("This ");
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
