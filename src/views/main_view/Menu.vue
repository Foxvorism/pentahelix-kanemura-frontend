<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/menu/Hero.vue";
import CategoriesList from "@/components/main_view/menu/CategoriesList.vue";
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
    <div id="categorieslist">
      <CategoriesList />
    </div>
  </div>
  <Footer />
</template>
