import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/homePage.vue';
import Auth from '../components/authComponent.vue';
import Memos from '../components/memoSection.vue';
import PlanSection from '../components/planSection.vue';
import { getAuth } from 'firebase/auth';
import setNickname from '../components/setNickname.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Auth, meta: { requiresAuth: false } },
  { path: '/memos', name: 'Memos', component: Memos, meta: { requiresAuth: true } },
  { path: '/plans', name: 'Plans', component: PlanSection, meta: { requiresAuth: true } },
  { path: '/set-nickname', name: 'SetNickname', component: setNickname, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (!requiresAuth && isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;