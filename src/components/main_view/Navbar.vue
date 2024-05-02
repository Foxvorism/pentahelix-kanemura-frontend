<script setup></script>

<template>
  <div
    id="navbar"
    class="w-full h-24 bg-[var(--color-cream)] flex items-center fixed z-50"
  >
    <div class="w-full grid grid-cols-2">
      <div class="flex justify-center items-center">
        <img
          src="@/assets/img/logo-kanemura.png"
          alt="logo kanemura"
          class="w-20 scale-[1.75] -ml-40"
        />
      </div>
      <div class="flex justify-center items-center">
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'home' }">Home</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'about' }">About Us</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'home' }">Menu</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'home' }">Order</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'home' }">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  filter: drop-shadow(0px 0.4px 4px var(--color-blue));
}
</style>
