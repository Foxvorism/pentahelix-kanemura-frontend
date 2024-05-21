<script setup>
import Navbar from "@/components/main_view/Navbar.vue";
import Hero from "@/components/main_view/contact/Hero.vue";
import ContactList from "@/components/main_view/contact/ContactList.vue";
import Footer from "@/components/main_view/Footer.vue";
</script>

<template>
  <Navbar />
  <div id="main" class="w-full min-h-screen bg-[var(--color-cream)] py-20">
    <div id="hero">
      <Hero />
    </div>
    <div id="contactList">
      <ContactList />
    </div>
  </div>
  <Footer />
</template>


