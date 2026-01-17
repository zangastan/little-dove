<template>
  <div class="home-page lg:max-w-7xl overflow-hidden">
    <HeroSection />
    <FeaturedDishes />
    <WhyChooseUs />

<!-- Opening Hours / Quick Contact -->
<section class="py-16 bg-white border-y border-gray-100">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

      <!-- Opening Hours -->
      <div class="flex items-start space-x-5">
        <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
          <clockIcon class="w-6 h-6 text-primary-700" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-primary-900">Opening Hours</h3>
          <p class="text-gray-600">Mon – Sat: 11am – 10pm</p>
          <p class="text-gray-600">Sun: 12pm – 9pm</p>
        </div>
      </div>

      <!-- Location -->
      <div class="flex items-start space-x-5">
        <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
          <pinIcon class="w-6 h-6 text-primary-700" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-primary-900">Our Location</h3>
          <p class="text-gray-600">Livingstonia</p>
          <p class="text-gray-600">Rumphi, Malawi</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="flex items-start space-x-5">
        <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
          <phoneIcon class="w-6 h-6 text-primary-700" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-primary-900">Quick Contact</h3>
          <p class="text-gray-600">+265 00 00 000</p>
          <p class="text-gray-500 italic text-sm">Call to book your table</p>
        </div>
      </div>

    </div>
  </div>
</section>


    <Testimonials />

    <!-- Final CTA -->
    <section class="py-24 gradient-green relative overflow-hidden text-center text-white">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl md:text-6xl font-heading font-bold mb-8">Ready for a Delicious Journey?</h2>
        <p class="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-body">
          Join us today and discover why Little Heave is Rumphi's favorite destination for authentic Malawian cuisine.
        </p>
        <router-link to="/contact"
          class="inline-block px-12 py-5 bg-white text-primary-800 rounded-full font-bold text-xl hover:bg-primary-50 transition-all shadow-2xl">
          Get In Touch
        </router-link>
      </div>
      <!-- Background leaf pattern SVG or something -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-300/20 blur-3xl rounded-full"></div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue';
import FeaturedDishes from '../components/home/FeaturedDishes.vue';
import WhyChooseUs from '../components/home/WhyChooseUs.vue';
import Testimonials from '../components/home/Testimonials.vue';
import pinIcon from "../assets/pin-sharp-circle-625-svgrepo-com.svg"
import phoneIcon from "../assets/phone-svgrepo-com.svg"
import clockIcon from "../assets/clock-0900-svgrepo-com.svg"

</script>
