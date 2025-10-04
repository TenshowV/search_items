import { createRouter, createWebHistory, type RouteLocationNormalizedGeneric, type NavigationGuardNext, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home page' },
    beforeEnter: (to, from, next) => {
      window.document.title = to.meta.title as string;
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
