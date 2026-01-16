<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="py-24 bg-primary-900 text-white relative overflow-hidden">
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-heading font-bold mb-6">Our Story</h1>
        <p class="text-xl text-primary-300 max-w-2xl mx-auto font-body">
          Preserving Malawian culinary traditions since 20**.
        </p>
      </div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[100px]"></div>
      </div>

      <!-- <HeroSection /> -->
    </section>

    <!-- Content Section -->
    <section class="w-7xl m-auto py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span class="text-primary-600 font-bold tracking-widest uppercase mb-4 block text-sm">How it all
              began</span>
            <h2 class="text-4xl font-heading font-bold text-primary-900 mb-6 leading-tight">Authentic Roots, <br>Global
              Passion.</h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              Little Heave started as a small family kitchen in the heart of Livingstonia. Our founder, Mama, had a
              simple mission: to share the authentic flavors of Malawian villages with the growing city.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Today, we remain dedicated to that original vision. Every bowl of nsima, every grilled chambo, and every
              cup of maheu is prepared using the same traditional recipes passed down through generations.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="p-4 bg-primary-50 rounded-xl">
                <div class="text-3xl font-bold text-primary-700 mb-1">{{ YearsCounter }}+</div>
                <p class="text-sm text-gray-500 font-bold uppercase transition-transform">Years of Excellence</p>
              </div>
              <div class="p-4 bg-primary-50 rounded-xl">
                <div class="text-3xl font-bold text-primary-700 mb-1">{{ partCounter }}+</div>
                <p class="text-sm text-gray-500 font-bold uppercase transition-transform">Local Farm Partners</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://placehold.co/1000x800/1B4332/white?text=Our+Kitchen+History" alt="Our Kitchen"
              class="rounded-3xl shadow-2xl relative z-10" />
            <div class="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-600 rounded-2xl -z-10 transform rotate-12">
            </div>
          </div>
        </div>

        <!-- Mission & Values -->
        <div class="w-7xl m-auto  grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            class="text-center p-10 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary-100 group">
            <div
              class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
              🌱</div>
            <h3 class="text-2xl font-heading font-bold text-primary-900 mb-4">Quality First</h3>
            <p class="text-gray-600">We source only the finest organic ingredients from Malawian farmers who share our
              respect for nature.</p>
          </div>
          <div
            class="text-center p-10 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary-100 group">
            <div
              class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
              🌍</div>
            <h3 class="text-2xl font-heading font-bold text-primary-900 mb-4">Community</h3>
            <p class="text-gray-600">Supporting our local community and providing sustainable livelihoods is at the
              heart of everything we do.</p>
          </div>
          <div
            class="text-center p-10 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary-100 group">
            <div
              class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
              ✨</div>
            <h3 class="text-2xl font-heading font-bold text-primary-900 mb-4">Innovation</h3>
            <p class="text-gray-600">While honoring tradition, we continuously explore new ways to elevate Malawian
              flavors for modern palates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class=" w-7xl m-auto  py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-heading font-bold text-primary-900 mb-4">Meet Our Culinary Artists</h2>
          <div class="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Chef 1 -->
          <div class="group">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 relative">
              <img src="https://placehold.co/800x1066/1B4332/white?text=Exec+Chef" alt="Executive Chef"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div
                class="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p class="text-white italic">"Cooking is a language of love and culture."</p>
              </div>
            </div>
            <h4 class="text-xl font-bold text-primary-900">Chef Limbani Gondwe</h4>
            <p class="text-primary-600 font-medium">Executive Chef</p>
          </div>
          <!-- Chef 2 -->
          <div class="group">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 relative">
              <img src="https://placehold.co/800x1066/1B4332/white?text=Pastry+Chef" alt="Head Chef"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div
                class="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p class="text-white italic">"Every ingredient has a soul that deserves respect."</p>
              </div>
            </div>
            <h4 class="text-xl font-bold text-primary-900">Chef Chisomo Mwale</h4>
            <p class="text-primary-600 font-medium">Head of Pastry</p>
          </div>
          <!-- Chef 3 -->
          <div class="group">
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 relative">
              <img src="https://placehold.co/800x1066/1B4332/white?text=Sous+Chef" alt="Sous Chef"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
              <div
                class="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p class="text-white italic">"Tradition is the foundation of our future."</p>
              </div>
            </div>
            <h4 class="text-xl font-bold text-primary-900">Chef Tamanda Kumwenda</h4>
            <p class="text-primary-600 font-medium">Sous Chef</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import HeroSection from '../components/home/HeroSection.vue';

import { onMounted, ref, onUnmounted } from 'vue';

let YearsCounter = ref(0)
let partCounter = ref(0)
let intervalId = null

onMounted(() => {
    intervalId = setInterval(() => {
      if (YearsCounter.value !== 15) YearsCounter.value += 1
      if (partCounter.value !== 20) partCounter.value += 1
      else clearInterval(intervalId)
    }, 100)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

</script>
