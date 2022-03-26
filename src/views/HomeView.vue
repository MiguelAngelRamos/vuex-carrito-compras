<template>
 <Layout>
   <h3>Contenido de los Productos</h3>
   <div class="row d-flex justify-content-between">
     <!-- cards de bootstrap -->
     <CardProducto v-for="producto of getProductos" :key="producto.id" :productoCard="producto"/>

   </div>
 </Layout>
</template>

<script>
// Acceso al store 
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
// Componentes
import Layout from '../layout/Layout.vue';
import CardProducto from '../components/CardProducto.vue';

export default {
  name: 'HomeView',
  components: {
    Layout,
    CardProducto
  },
  setup() {
    const store = useStore();
    // onMounted se ejecuta antes template
    onMounted( () => {
      store.dispatch('getProductoApi')
    });
    // vamos a mapear el state 
    const getProductos = computed(()=> store.state.productos);

    return {
      getProductos
    }
  }
}
</script>
