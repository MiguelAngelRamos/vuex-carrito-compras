import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if(state.carrito[payload].cantidad == 0) {
        delete state.carrito[payload]
      }
    },
    cancelarOrden(state) {
      state.carrito = {};
    }
  }, 
  actions: {
    async getProductoApi({commit}){
      try {
        const response = await fetch('api.json');
        const data = await response.json();
        commit('setProductos', data)
      } catch (error) {
        throw error;
      }
    },
    agregarAlCarrito({commit, state}, producto) {
      console.log('agregando al carrito');
      // El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
      state.carrito.hasOwnProperty(producto.id) ? producto.cantidad = state.carrito[producto.id].cantidad+1 : producto.cantidad = 1;
      commit('setCarrito', producto);
    }
  },
  getters: {
    // getters toman algo del state y pueden devolver un calculo sobre el
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio), 0);;
    }
  },
  modules: {
  }
})
