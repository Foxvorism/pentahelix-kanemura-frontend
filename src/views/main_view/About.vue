<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/about/Hero.vue";
import VisiMisi from "@/components/main_view/about/VisiMisi.vue";
import WhyKanemura from "@/components/main_view/about/WhyKanemura.vue";
import Footer from "@/components/main_view/Footer.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Navbar />
  <div id="main" class="w-full min-h-screen bg-[var(--color-cream)] py-20">
    <div id="hero">
      <Hero />
    </div>
    <div id="visi-misi">
      <VisiMisi />
    </div>
    <div id="why-kanemura">
      <WhyKanemura />
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
