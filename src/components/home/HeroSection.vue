<template>
  <section class="relative h-[90vh] flex items-center overflow-hidden">
    <!-- Background Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-primary-900/40 z-10"></div>
      <img 
        src="https://placehold.co/1920x1080/1B4332/white?text=Zikomo+Garden+Ambiance" 
        alt="Restaurant Atmosphere" 
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="max-w-2xl text-white fade-in-up">
        <h1 class="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          Taste the Heart of <span class="text-primary-400">Malawi</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-100 font-body">
          Experience authentic flavors at Zikomo Garden Restaurant. From Lake Malawi fresh chambo to traditional nsima, we bring you the finest local cuisine.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <router-link 
            to="/menu" 
            class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl text-center"
          >
            View Our Menu
          </router-link>
          <router-link 
            to="/about" 
            class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all text-center"
          >
            Our Story
          </router-link>
        </div>
      </div>
    </div>

    <!-- Decorative leaf element -->
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-10"></div>
  </section>
</template>

<script setup lang="ts">
</script>
