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

const toggle_mobile = () => {
  document.documentElement.scrollTop = 0;
  const navbar = document.querySelector("#navbar");
  navbar.classList.toggle("navbar-mobile");

  const icon = document.querySelector(".mobile-nav-toggle");
  icon.classList.toggle("ph-list");
  icon.classList.toggle("ph-x");
};

// const mobile_mode = () => {
//   const w = window.innerWidth;
//   if (w < 600) {
//     const navbar = document.querySelector("#navbar");
//     navbar.classList.toggle("navbar-mobile");

//     const icon = document.querySelector(".mobile-nav-toggle");
//     icon.classList.toggle("ph-list");
//     icon.classList.toggle("ph-x");
//   }
// };
</script>

<!-- <template>
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
</template> -->

<template>
  <header id="header" class="fixed w-screen">
    <div
      id="container"
      class="w-full h-24 bg-[var(--color-cream)] flex items-center justify-between fixed px-28"
    >
      <img
        id="logo"
        src="@/assets/img/logo-kanemura.png"
        alt="logo kanemura"
        class="w-20 scale-[1.75] ml-8"
      />

      <nav id="navbar" class="navbar">
        <ul class="text-lg">
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link
                class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wider"
                :to="{ name: 'home' }"
              >
                Home
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link
                class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wider"
                :to="{ name: 'about' }"
              >
                About Us
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link
                class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wider"
                :to="{ name: 'menu' }"
              >
                Menu
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link
                class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wider"
                :to="{ name: 'order' }"
              >
                How To Order
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link
                class="text-center px-6 text-lg text-[var(--color-red)] font-semibold tracking-wider"
                :to="{ name: 'contact' }"
              >
                Contact Us
              </router-link>
            </button>
          </li>
        </ul>

        <i
          class="ph-bold ph-list mobile-nav-toggle font-bold text-xl"
          @click="toggle_mobile"
        />
      </nav>
    </div>
  </header>

  <div id="back-to-top" class="back-to-top">
    <a
      href="#"
      class="text-[var(--color-cream)] font-bold text-xl flex justify-center items-center"
    >
      <i class="ph-bold ph-caret-up"></i>
    </a>
  </div>
</template>

<!-- <style scoped>
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
</style> -->

<style scoped>
/* header */
#header {
  transition: all 0.5s ease;
  z-index: 997;
  filter: drop-shadow(0px 0.4px 4px var(--color-blue));
}

/* Desktop Navigation */
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
  margin: 0 5px;
}

.navbar > ul > li {
  white-space: nowrap;
  padding: 10px 12px;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 5px;
  padding: 2px 5px;
}

.navbar a:hover,
.navbar a.active {
  background-color: var(--color-red);
  box-shadow: 3px 3px var(--color-blue);
  color: var(--color-cream);
}

/* Mobile Navigation */
.mobile-nav-toggle {
  color: var(--color-red);
  cursor: pointer;
  display: none;
  transition: 0.5s;
}

.back-to-top {
  opacity: 0;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 100;
  background-color: var(--color-blue);
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

.navbar-mobile {
  position: fixed;
  overflow-y: hidden !important;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 247, 227, 0.9);
  transition: 0.3s;
  z-index: 999;
  height: 100vh;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 30px;
  right: 20px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile > ul > li {
  padding: 0;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.navbar-mobile a:hover:before,
.navbar-mobile li:hover > a:before,
.navbar-mobile .active:before {
  visibility: hidden;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 5px 20px;
  font-size: 15px;
  color: #000;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }

  .navbar-mobile ul {
    display: block;
  }

  #header #container {
    height: 70px;
    padding: 0 40px;
  }

  #logo {
    width: 50px;
    margin-left: 0 !important;
  }
}
</style>
