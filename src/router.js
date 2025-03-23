import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomeComponent.vue'
import Products from './pages/ProductsComponent.vue'
import ServiceComponent from './pages/ServiceComponent.vue'
import SingleProduct from './pages/SingleProduct.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/products', component: Products, name: 'Products' },
  { path: '/products/:id', component: SingleProduct, name: 'Single-Product' },
  { path: '/services', component: ServiceComponent, name: 'Services' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
