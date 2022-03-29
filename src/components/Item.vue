<template>
 <tr>
   <td>{{itemProp.id}}</td>
   <td>{{ itemProp.title }}</td>
   <td>{{ itemProp.cantidad}}</td>
   <td>
     <button class="btn btn-success btn-sm" @click="aumentar(itemProp.id)">+</button>
     <button class="btn btn-danger btn-sm" @click="disminuir(itemProp.id)">-</button>
   </td>
   <td>$ {{ Intl.NumberFormat().format(itemProp.precio * itemProp.cantidad) }}</td>
 </tr>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    itemProp: Object
  },
  setup() {
    const store = useStore();

    // Método para aumentar
    const aumentar = (id) => {
      // console.log(id)
      store.commit('aumentar', id);
    }

    // Método para disminuir
    const disminuir = (id) => {
      store.commit('disminuir', id);
    }
    // si quiero utilizar estas funciones en el template necesito retornarlas
    return {
      aumentar,
      disminuir
    }
  }

}
</script>

<style scoped>
  button {
    border-radius: 50%;
    margin-right: 2px;
    width: 29px;
    font-weight: 800;
  }
</style>