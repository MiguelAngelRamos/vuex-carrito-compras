import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarritoProductosView from '../views/CarritoProductosView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrito',
    name: 'CarritoProductos',
    component: CarritoProductosView
  },
  // {
  //   path: '/carrito',
  //   name: 'CarritoProductos',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Carrito" */ '../views/CarritoProductosView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
