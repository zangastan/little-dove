<template>
  <footer class="bg-primary-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <!-- Column 1: About -->
        <div>
          <h3 class="text-2xl font-heading font-bold mb-4 text-primary-300">Zikomo Garden</h3>
          <p class="text-gray-300 leading-relaxed mb-4">
            Experience authentic Malawian cuisine crafted with passion. We use locally sourced ingredients 
            and traditional recipes to bring you the true taste of Malawi.
          </p>
          <p class="text-sm text-gray-400">
            Fresh • Authentic • Delicious
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-xl font-heading font-semibold mb-4 text-primary-300">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-primary-300 transition-colors flex items-center">
                <span class="mr-2">→</span> Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-primary-300 transition-colors flex items-center">
                <span class="mr-2">→</span> About Us
              </router-link>
            </li>
            <li>
              <router-link to="/menu" class="text-gray-300 hover:text-primary-300 transition-colors flex items-center">
                <span class="mr-2">→</span> Our Menu
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-primary-300 transition-colors flex items-center">
                <span class="mr-2">→</span> Contact Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div>
          <h4 class="text-xl font-heading font-semibold mb-4 text-primary-300">Contact Us</h4>
          <ul class="space-y-3 text-gray-300">
            <li class="flex items-start">
              <span class="mr-3 mt-1">📍</span>
              <span>123 Victoria Avenue<br>Lilongwe, Malawi</span>
            </li>
            <li class="flex items-center">
              <span class="mr-3">📞</span>
              <a href="tel:+2651234567" class="hover:text-primary-300 transition-colors">+265 1 234 567</a>
            </li>
            <li class="flex items-center">
              <span class="mr-3">✉️</span>
              <a href="mailto:info@zikomogarden.mw" class="hover:text-primary-300 transition-colors">info@zikomogarden.mw</a>
            </li>
          </ul>

          <!-- Opening Hours -->
          <div class="mt-6">
            <h5 class="font-semibold mb-2 text-primary-300">Opening Hours</h5>
            <p class="text-sm text-gray-300">Monday - Saturday: 11:00 AM - 10:00 PM</p>
            <p class="text-sm text-gray-300">Sunday: 12:00 PM - 9:00 PM</p>
          </div>

          <!-- Social Media -->
          <div class="flex space-x-4 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Facebook">
              📘
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Instagram">
              📷
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Twitter">
              🐦
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-primary-700 pt-8 mt-8">
        <div class="text-center text-gray-400 text-sm">
          <p>&copy; {{ currentYear }} Zikomo Garden Restaurant. All rights reserved.</p>
          <p class="mt-2">Made with ❤️ in Malawi</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
