<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueMarket</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <!-- Icono del carrito de compra -->
        <div class="carrito-container d-flex">
         <div class="carrito-icon">
           <!-- Icono de carrito -->
           <i class="fas fa-cart-plus"></i>
         </div>
         <div class="counter">
           <div class="counter-number">
             {{ Object.keys(carrito).length }}
           </div>
         </div>
        </div>
        <!-- Fin Icono del carrito de compra -->
      </div>
    </div>
  </nav>
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const carrito = computed( () => store.state.carrito)

    return {
      carrito
    }
  }
};
</script>

<style>
.navbar {
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.4);
}

.carrito-container {
  position: relative;
}

.carrito-icon {
  font-size: 32px;
  color: #37976C;
  margin-right: 40px;
}
.counter {
  position: absolute;
  background-color: tomato;
  color: white;
  padding: 10px;
  border-radius: 50%;
  height: 32px;
  width: 30px;
  top: -8px;
  left: 29px;
}

.counter .counter-number {
  position: relative;
  top: -6px;
}
</style>