import { createRouter, createWebHistory } from 'vue-router'
import ProductsIndex from '../views/ProductsIndex.vue';
import ProductsEdit from '../views/ProductsEdit.vue';
import ProductsNew from '../views/ProductsNew.vue';
import ProductsShow from '../views/ProductsShow.vue';

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsIndex
  },
  {
    path: '/products/:id/edit',
    name: 'ProductsEdit',
    component: ProductsEdit
  },
  {
    path: '/products/new',
    name: 'ProductsNew',
    component: ProductsNew
  },
  {
      path: '/products/:id',
      name: 'ProductsShow',
      component: ProductsShow
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
