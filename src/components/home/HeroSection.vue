<template>
  <section class="relative h-[90vh] flex items-center overflow-hidden">
    <!-- Background Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-primary-900/50 z-10"></div>
      <img src="/meal1.jpg" alt="Little Heave"
        class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="max-w-2xl text-white fade-in-up">
        <h1 class="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
         
           {{ props.title.lenght > 0 ? props.title : "" }}
           Taste the Heart of <span class=text-primary-400>Malawi</span>
        </h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-100 font-body">
          Experience authentic flavors at Little Heave Restaurant. From Lake Malawi fresh chambo to traditional nsima,
          we bring you the finest local cuisine.
        </p>

        <div v-if="viewButtons" class="flex justify-center items-center  flex-col sm:flex-row gap-4">
          <router-link to="/menu"
            class="p-3 w-sm bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl text-center">
            View Our Menu
          </router-link>
          <router-link to="/about"
            class="w-sm p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all text-center">
            Our Story
          </router-link>
        </div>

      </div>
    </div>

    <!-- Decorative leaf element -->
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-10"></div>
  </section>
</template>

<script setup>
  const props = {
    desc : String | "",
    title : String | "",
    viewMenu : Boolean | true,
    viewStory : Boolean | true,
    viewButtons : Boolean | true
  }
</script>
