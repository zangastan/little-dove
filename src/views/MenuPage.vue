<template>
  <div class="menu-page">
    <!-- Header -->
    <header class="py-20 bg-primary-900 text-white text-center relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-5xl md:text-6xl font-heading font-bold mb-4">Our Menu</h1>
        <p class="text-xl text-primary-300 max-w-2xl mx-auto">Explore the rich and authentic flavors of Malawi.</p>
      </div>
      <div class="absolute inset-0 bg-primary-800/10 bg-cover bg-center">
        <img src="https://placehold.co/1920x600/1B4332/white?text=Discover+Our+Flavors" class="w-full h-full object-cover opacity-10">
      </div>
    </header>

    <!-- Menu Section -->
    <section class="py-24 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-8 py-3 rounded-full font-bold text-lg transition-all border-2"
            :class="activeCategory === cat.id 
              ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105' 
              : 'bg-white text-gray-500 border-gray-100 hover:border-primary-400 hover:text-primary-600'"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Menu Grid -->
        <TransitionGroup 
          name="list" 
          tag="div" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <MenuCard 
            v-for="item in filteredItems" 
            :key="item.id" 
            :item="item" 
          />
        </TransitionGroup>

        <!-- No Items State -->
        <div v-if="filteredItems.length === 0" class="text-center py-24">
          <p class="text-gray-500 text-xl font-body">Searching for delicious items...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { menuItems, type MenuItem } from '../data/menuData';
import MenuCard from '../components/menu/MenuCard.vue';

const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Dishes' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'desserts', name: 'Desserts' }
];

const activeCategory = ref('all');

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return menuItems;
  return menuItems.filter((item: MenuItem) => item.category === activeCategory.value);
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>
