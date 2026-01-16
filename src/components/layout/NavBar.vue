<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-primary-900 text-white shadow-lg backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <span class="text-2xl font-heading font-bold">🌿 Little Heave </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 p-3">
          <router-link 
            to="/" 
            class="nav-link font-medium hover:text-primary-300 text-xl transition-colors"
            :class="{ 'text-primary-300 border-b-2 border-primary-300': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="nav-link font-medium hover:text-primary-300 transition-colors"
            :class="{ 'text-primary-300 border-b-2 border-primary-300': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link 
            to="/menu" 
            class="nav-link font-medium hover:text-primary-300 transition-colors"
            :class="{ 'text-primary-300 border-b-2 border-primary-300': $route.path === '/menu' }"
          >
            Menu
          </router-link>
          <router-link 
            to="/contact" 
            class="nav-link font-medium hover:text-primary-300 transition-colors"
            :class="{ 'text-primary-300 border-b-2 border-primary-300': $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden p-3 rounded-lg hover:bg-primary-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden py-4 border-t border-primary-700"
      >
        <router-link 
          to="/" 
          @click="closeMenu"
          class="block py-3 px-4 hover:bg-primary-800 rounded-lg transition-colors"
          :class="{ 'bg-primary-800 text-primary-300': $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          @click="closeMenu"
          class="block py-3 px-4 hover:bg-primary-800 rounded-lg transition-colors"
          :class="{ 'bg-primary-800 text-primary-300': $route.path === '/about' }"
        >
          About
        </router-link>
        <router-link 
          to="/menu" 
          @click="closeMenu"
          class="block py-3 px-4 hover:bg-primary-800 rounded-lg transition-colors"
          :class="{ 'bg-primary-800 text-primary-300': $route.path === '/menu' }"
        >
          Menu
        </router-link>
        <router-link 
          to="/contact" 
          @click="closeMenu"
          class="block py-3 px-4 hover:bg-primary-800 rounded-lg transition-colors"
          :class="{ 'bg-primary-800 text-primary-300': $route.path === '/contact' }"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  padding-bottom: 0.25rem;
}
</style>
