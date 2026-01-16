<template>
  <div class="contact-page">
    <!-- Header -->
    <header class="py-20 bg-primary-900 text-white text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-heading font-bold mb-4">Get in Touch</h1>
        <p class="text-xl text-primary-300 max-w-2xl mx-auto">We'd love to hear from you. Book a table or just say hello!</p>
      </div>
    </header>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="fade-in-up">
            <h2 class="text-3xl font-heading font-bold text-primary-900 mb-8">Contact Information</h2>
            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-primary-900 text-lg mb-1">Our Location</h4>
                  <p class="text-gray-600">123 Victoria Avenue, Lilongwe, Malawi</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-primary-900 text-lg mb-1">Phone Number</h4>
                  <p class="text-gray-600">+265 1 234 567</p>
                  <p class="text-sm text-primary-600 font-medium mt-1">Available for reservations during hours</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-primary-900 text-lg mb-1">Email Address</h4>
                  <p class="text-gray-600">info@zikomogarden.mw</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 mr-6">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-primary-900 text-lg mb-1">Working Hours</h4>
                  <p class="text-gray-600">Mon - Sat: 11:00 AM - 10:00 PM</p>
                  <p class="text-gray-600">Sun: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Placeholder Map -->
            <div class="mt-12 rounded-3xl h-64 bg-gray-100 overflow-hidden relative shadow-inner border border-gray-200">
              <div class="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Map View (Lilongwe, Malawi)
              </div>
              <img src="https://placehold.co/1000x500/1B4332/white?text=Map+Location+Lilongwe" alt="Map pattern" class="w-full h-full object-cover opacity-30 grayscale">
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-primary-50/50 p-10 rounded-3xl border border-primary-100 shadow-sm transition-all duration-300 hover:shadow-xl">
             <h2 class="text-3xl font-heading font-bold text-primary-900 mb-8">Send Us a Message</h2>
             <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="transition-transform duration-300 focus-within:scale-[1.01]">
                  <label class="block text-primary-900 font-bold mb-2">Full Name</label>
                  <input v-model="form.name" type="text" required placeholder="John Doe" class="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none transition-colors">
                </div>
                <div class="transition-transform duration-300 focus-within:scale-[1.01]">
                  <label class="block text-primary-900 font-bold mb-2">Email Address</label>
                  <input v-model="form.email" type="email" required placeholder="john@example.com" class="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none transition-colors">
                </div>
                <div class="transition-transform duration-300 focus-within:scale-[1.01]">
                  <label class="block text-primary-900 font-bold mb-2">How can we help?</label>
                  <select v-model="form.subject" class="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none transition-colors bg-white">
                    <option value="reservation">Table Reservation</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="event">Private Event</option>
                  </select>
                </div>
                <div class="transition-transform duration-300 focus-within:scale-[1.01]">
                  <label class="block text-primary-900 font-bold mb-2">Message</label>
                  <textarea v-model="form.message" rows="5" required placeholder="Tell us more..." class="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98] disabled:opacity-50" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
                <p v-if="success" class="text-center font-bold text-green-600 animate-bounce">
                  ✨ Thank you! We'll get back to you soon.
                </p>
             </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: 'reservation',
  message: ''
});

const isSubmitting = ref(false);
const success = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    success.value = true;
    
    // Reset form after success
    form.name = '';
    form.email = '';
    form.message = '';
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      success.value = false;
    }, 5000);
  }, 1500);
};
</script>
