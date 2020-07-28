<template>
  <b-dropdown :text="filtro" variant="outline-secondary" class="m-2">
    <b-dropdown-item @click="filtro = 'Preço'; sort()" href="#">Preço</b-dropdown-item>
    <b-dropdown-item @click="filtro = 'Popularidade'; sort()" href="#">Popularidade</b-dropdown-item>
    <b-dropdown-item @click="filtro = 'Ordem alfabética'; sort()" href="#">Ordem alfabética</b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { bus } from "../main";

export default {
  name: "Dropdown",
  props: {},
  data() {
    return {
      filtro: "Filtros"
    };
  },
  methods: {
    sort() {
      bus.$emit("SortElements", this.filtro);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "../variables.scss";

.dropdown-holder {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  .dropdown {
    width: 64%;
    margin: 8px 0 8px 8px !important;
    button {
      text-align: left;
      border: 1px solid rgba(0, 0, 0, 0.125);
    }
    button::after {
      float: right;
      margin-top: 10px;
    }
  }
}
</style>
