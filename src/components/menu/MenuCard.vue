<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
    <div class="relative h-56 overflow-hidden">
      <img 
        :src="item.image" 
        :alt="item.name" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-heading font-bold text-primary-900">{{ item.name }}</h3>
      </div>
      <p class="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
        {{ item.description }}
      </p>
      <div class="flex items-center justify-between mt-auto">
        <span class="text-lg font-bold text-primary-700">{{ item.price.toLocaleString() }} MWK</span>
        <button class="p-2 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors" title="Add to favorites">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '../../data/menuData';

defineProps<{
  item: MenuItem;
}>();
</script>
