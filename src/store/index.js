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
      state.carrito.hasOwnProperty(producto.id)? producto.cantidad = state.carrito[producto.id].cantidad+1:producto.cantidad = 1;
      commit('setCarrito', producto);
    }
  },
  getters: {
  },
  modules: {
  }
})
