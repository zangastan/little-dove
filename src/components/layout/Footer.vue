<template>
  <footer class="bg-primary-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <!-- Column 1: About -->
        <div>
          <h3 class="text-2xl font-heading font-bold mb-4 text-primary-300">Little Heave</h3>
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
              <span class="mr-3 mt-1">
                <PinIcon class="w-6 h-6"/>
              </span>
              <span>Livingstonia<br>Rumphi, Malawi</span>
            </li>
            <li class="flex items-center">
              <span class="mr-3">📞</span>
              <a href="tel:+265 00 00 000" class="hover:text-primary-300 transition-colors">+265 00 00 000</a>
            </li>
            <li class="flex items-center">
              <span class="mr-3">✉️</span>
              <a href="mailto:info@heave.mw" class="hover:text-primary-300 transition-colors">info@heave.mw</a>
            </li>
          </ul>

          <!-- Opening Hours -->
          <div class="mt-6">
            <h5 class="font-semibold mb-2 text-primary-300">Opening Hours</h5>
            <p class="text-sm text-gray-300">Monday - Saturday: 08:00 AM - 10:00 PM</p>
            <p class="text-sm text-gray-300">Sunday: 08:00 PM - 9:00 PM</p>
          </div>

          <!-- Social Media -->
          <div class="flex space-x-4 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Facebook">
              <faceBookIcon class="w-6 h-6"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Instagram">
              <twitterIcon class="w-6 h-6"/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary-300 transition-colors text-2xl" aria-label="Twitter">
              <InstaIcon class="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-primary-700 pt-8 mt-8">
        <div class="text-center text-gray-400 text-sm">
          <p>Designed and Developed by: Augustine kasolota - 
            <a target="_blank" class="text-blue-500" href="https://augustinekasolota.netlify.app/">
              Check Me Out
            </a>
          </p>
          <p>&copy; {{ currentYear }} Little Heave Restaurant. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import FaceBookIcon from "../../assets/facebook-svgrepo-com.svg";
import InstaIcon from "../../assets/instagram-svgrepo-com.svg";
import TwitterIcon from "../../assets/twitter-svgrepo-com.svg";
import PinIcon from "../../assets/pin-sharp-circle-625-svgrepo-com.svg"
const currentYear = computed(() => new Date().getFullYear());
</script>
