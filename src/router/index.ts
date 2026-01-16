import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Import views
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import MenuPage from '../views/MenuPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home - Little Heave Restaurant'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About Us - Little Heave Restaurant'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
    meta: {
      title: 'Our Menu - Little Heave Restaurant'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us - Little Heave Restaurant'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Little Heave Restaurant';
  next();
});

export default router;
