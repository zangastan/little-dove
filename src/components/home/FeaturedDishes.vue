<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">Signature Dishes</h2>
        <div class="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        <p class="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Masterfully prepared by our chefs using traditional techniques and the freshest local ingredients.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div 
          v-for="dish in featuredDishes" 
          :key="dish.id"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="dish.image" 
              :alt="dish.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-primary-600 text-white px-4 py-1 rounded-full font-bold shadow-md">
              {{ dish.price.toLocaleString() }} MWK
            </div>
          </div>
          <div class="p-8 text-center">
            <h3 class="text-2xl font-heading font-bold text-primary-900 mb-3">{{ dish.name }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ dish.description }}
            </p>
            <router-link 
              to="/menu" 
              class="text-primary-700 font-bold hover:text-primary-500 transition-colors inline-flex items-center"
            >
              Learn More <span class="ml-2">→</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <router-link 
          to="/menu" 
          class="inline-block px-10 py-4 border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white rounded-full font-bold text-lg transition-all"
        >
          Explore All Dishes
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getFeaturedDishes } from '../../data/menuData';
const featuredDishes = getFeaturedDishes();
</script>
