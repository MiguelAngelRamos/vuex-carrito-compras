<template>
<div class="mt-2 card" style="width: 19rem;">
  <img :src="productoCard.image" class="mt-2 card-img-top" alt="">
  <div class="card-body">
    <h5 class="mt-1 card-title text-center">{{productoCard.title}}</h5>
  </div>
  <span class="d-block text-center font-weight-bold mb-3">${{ Intl.NumberFormat().format(productoCard.precio) }}</span>
  <button class="btn btn-success mb-2" @click="agregar(productoCard)">Agregar al carrito</button>
</div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    productoCard: Object
  },
  setup() {
    const store = useStore();

    // methods
    const agregar = (producto) => {
      store.dispatch('agregarAlCarrito', producto)
    };

    return {
      agregar
    }
  }

}
</script>

<style scoped>
  img {
    width: 280px;
    height: 260px;
  }
  button {
    background-color: #2E6E52 !important; 
    border: 1px solid grey;
  }
  button:hover {
    background-color: #37976C !important;
    border: 1px solid grey;
  }

  span {
    font-size: 24px;
    font-weight: 700;
  }
</style>