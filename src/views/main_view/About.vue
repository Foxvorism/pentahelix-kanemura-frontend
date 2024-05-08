<script setup>
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/about/Hero.vue";
import Visi from "@/components/main_view/about/Visi.vue";
import Misi from "@/components/main_view/about/Misi.vue";
import WhyKanemura from "@/components/main_view/about/WhyKanemura.vue";
import Footer from "@/components/main_view/Footer.vue";
</script>

<template>
  <Navbar />
  <div id="main" class="w-full min-h-screen bg-[var(--color-cream)] py-20">
    <div id="hero">
      <Hero />
    </div>
    <div id="visi">
      <Visi />
    </div>
    <div id="misi">
      <Misi />
    </div>
    <div id="why-kanemura">
      <WhyKanemura />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
