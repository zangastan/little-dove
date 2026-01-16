<template>
  <section class="py-24 bg-primary-900 text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            Why Choose <br><span class="text-primary-400">Little Heave?</span>
          </h2>
          <p class="text-gray-300 text-lg mb-12">
            Founded with a passion for preserving Malawian culinary heritage, we strive to provide an unparalleled dining experience that celebrates our rich culture.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🥬</div>
              <h3 class="text-xl font-heading font-bold mb-2">Farm Fresh</h3>
              <p class="text-gray-400">Directly sourced from local farmers in Lilongwe to ensure maximum freshness.</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍🍳</div>
              <h3 class="text-xl font-heading font-bold mb-2">Expert Chefs</h3>
              <p class="text-gray-400">Our culinary team masterfully blends traditional recipes with modern techniques.</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🛖</div>
              <h3 class="text-xl font-heading font-bold mb-2">Heritage First</h3>
              <p class="text-gray-400">Every dish tells a story of Malawian culture and authentic village traditions.</p>
            </div>
            <div class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
              <h3 class="text-xl font-heading font-bold mb-2">Premium Quality</h3>
              <p class="text-gray-400">We never compromise on food quality, hygiene, or customer service.</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://placehold.co/1000x1000/1B4332/white?text=Authentic+Quality" 
              alt="Fresh Ingredients" 
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative bits -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-600 rounded-full blur-[80px] opacity-40"></div>
          <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-400 rounded-full blur-[100px] opacity-30"></div>
          <div class="absolute top-1/2 -translate-y-1/2 -right-6 w-32 h-32 border-8 border-primary-500/20 rounded-full z-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
