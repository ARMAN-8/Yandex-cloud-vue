import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register')
  },
    /*documentation*/
  {
    path: '/overview',
    name: 'overview',
    component: () => import('../views/Documentation/overview')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
