<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    
    <main class="flex-grow pt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';
</script>