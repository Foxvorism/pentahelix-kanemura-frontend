<script setup>
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/order/Hero.vue";
import Footer from "@/components/main_view/Footer.vue";
</script>

<template>
  <Navbar />
  <div id="main" class="w-full min-h-screen bg-[var(--color-cream)] py-20">
    <div id="hero">
      <Hero />
    </div>
  </div>
  <Footer />
</template>
