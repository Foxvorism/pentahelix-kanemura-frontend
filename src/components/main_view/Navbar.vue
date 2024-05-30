<script setup>
import { onMounted } from "vue";

onMounted(() => {
  onScroll();
});

const onScroll = () => {
  document.addEventListener("scroll", () => {
    const top = document.querySelector(".back-to-top");
    if (window.scrollY > 100) {
      top.classList.add("active");
    } else {
      top.classList.remove("active");
    }
  });
};
</script>

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

  <div id="back-to-top" class="back-to-top">
    <a
      href="#"
      class="text-[var(--color-cream)] font-bold text-xl flex justify-center items-center"
    >
      <i class="ph-bold ph-caret-up"></i>
    </a>
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

.back-to-top {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 100;
  background: var(--color-blue);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  scale: 1.1;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>
