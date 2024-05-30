<script setup>
import { onMounted } from "vue";
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/contact/Hero.vue";
import ContactList from "@/components/main_view/contact/ContactList.vue";
import Instagram from "@/components/main_view/contact/Instagram.vue";
import Tiktok from "@/components/main_view/contact/Tiktok.vue";
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
    <div id="contact-list" class="mb-20">
      <ContactList />
    </div>
    <div id="Instagram" class="mb-20">
      <Instagram />
    </div>
    <div id="Tiktok">
      <Tiktok />
    </div>
  </div>
  <Footer />
</template>
