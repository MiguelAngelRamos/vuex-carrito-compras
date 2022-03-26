<template>
  <div class="layout">
    <!-- navbar -->
    <Navbar/>
    <div class="container mt-5">
      <!-- aqui se van renderizar todos nuestros componentes -->
      <slot/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>