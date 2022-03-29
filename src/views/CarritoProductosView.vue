<template>
  <Layout> 
    <h2>Detalle del carrito de compras</h2>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Cantidad</th>
          <th>Acción</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <!-- aqui vamos a renderizar los items (productos) -->
        <Item v-for="item in carrito" :key="item.id" :itemProp="item"/>
        <!-- <pre>
            {{ carrito }}
        </pre> -->
      
      </tbody>

      <tfoot>
        <tr>
          <th colspan="5" v-if="Object.keys(carrito).length ===0">Carrito Vacio, Ningún producto seleccionado</th>
          <FooterTotal />
        </tr>
      </tfoot>
    </table>
  </Layout>
</template>

<script>
// Vuex
import { useStore } from 'vuex';
import { computed } from 'vue';

// Componentes
import Layout from '../layout/Layout.vue';
import FooterTotal from '../components/FooterTotal.vue';
import Item from '../components/Item.vue';

export default {
  components: {
    Layout,
    FooterTotal,
    Item
  },
  setup() {
    const store = useStore();
    const carrito = computed( () => store.state.carrito);

    return {
      carrito
    }
  }

}
</script>

<style>

</style>