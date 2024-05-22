<script setup>
import Navbar from "@/components/main_view/Navbar.vue";
import HeroByCategory from "@/components/main_view/menu/HeroByCategory.vue";
import Menus from "@/components/main_view/menu/Menus.vue";
import Footer from "@/components/main_view/Footer.vue";
</script>

<template>
  <Navbar />
  <div id="main" class="w-full min-h-screen bg-[var(--color-cream)] py-20">
    <div id="hero-by-category">
      <HeroByCategory />
    </div>
    <div id="menus">
      <Menus />
    </div>
  </div>
  <Footer />
</template>
