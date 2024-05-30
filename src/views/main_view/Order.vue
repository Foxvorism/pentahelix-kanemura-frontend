<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/order/Hero.vue";
import Timeline from "@/components/main_view/order/Timeline.vue";
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
    <div id="timeline">
      <Timeline />
    </div>
  </div>
  <Footer />
</template>
