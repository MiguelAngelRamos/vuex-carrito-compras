<template>
  <td colspan="2"> Total Producto</td>
  <td>{{ totalCantidad }}</td>
  <td>
    <button class="btn btn-warning btn-sm" @click="cancelar">Cancelar Orden</button>
  </td>
  <td class="font-weight-bold">
    <span>$ {{ Intl.NumberFormat().format(totalPrecio) }}</span>
  </td>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    // llamar a los getters
    const totalCantidad = computed( () => store.getters.totalCantidad);
    const totalPrecio = computed( () => store.getters.totalPrecio);

    // Llamando al mutation cancelar orden
    // metodo que llama a un mutation y este método se comporta como una acción
    const cancelar = () => { store.commit('cancelarOrden')}

    return {
      // Es6 es redundante
      // totalCantidad: totalCantidad,
      // totalPrecio: totalPrecio
      totalCantidad,
      totalPrecio,
      cancelar
    }
  }
}
</script>

<style>

</style>