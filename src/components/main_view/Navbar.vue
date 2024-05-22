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
          <router-link :to="{ name: 'menu' }">Menu</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'order' }">How To Order</router-link>
        </div>
        <div
          id="link"
          class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wide"
        >
          <router-link :to="{ name: 'contact' }">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  filter: drop-shadow(0px 0.4px 4px var(--color-blue));
}

#navbar a {
  transition: all 0.3s ease;
  border-radius: 5px;
  padding: 2px 5px;
}

#navbar a:hover,
#navbar a.active {
  background-color: var(--color-red);
  box-shadow: 3px 3px var(--color-blue);
  color: var(--color-cream);
}
</style>
