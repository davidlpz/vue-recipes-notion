import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import('@/views/RecipeDetail.vue')
    }
  ]
});

export default router;
