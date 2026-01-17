<template>
  <section class="py-24 lg:w-7xl w-auto mx-auto bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">Guest Experiences</h2>
        <div class="w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow relative"
        >
          <div class="text-primary-500 text-5xl absolute top-4 right-8 opacity-20 font-serif">"</div>
          <div class="flex text-yellow-400 mb-4">
            <span v-for="i in 5" :key="i">★</span>
          </div>
          <p class="text-gray-600 mb-8 italic leading-relaxed z-10 relative">
            "{{ testimonial.text }}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
              {{ testimonial.initials }}
            </div>
            <div>
              <h4 class="font-bold text-primary-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text: "The Chambo fish here is the best I've ever had. Truly authentic flavors that remind me of home. A must-visit in Rumphi!",
    name: "Tiwonge Banda",
    initials: "TB",
    location: "Rumphi, Malawi"
  },
  {
    text: "Beautiful atmosphere and excellent service. The Nsima was perfectly prepared. It's the perfect place for a family dinner.",
    name: "Kondwani Phiri",
    initials: "KP",
    location: "Blantyre, Malawi"
  },
  {
    text: "Fresh ingredients and such a creative menu. I loved the Baobab juice! The staff is incredibly friendly and welcoming.",
    name: "Sarah Johnstone",
    initials: "SJ",
    location: "Cape Town, SA"
  }
];
</script>
