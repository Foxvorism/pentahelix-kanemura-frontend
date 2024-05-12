<script setup>
import { ref, onMounted } from "vue";
import useAuth from "@/composables/auth.js";

const { detail_user, getUserInfo } = useAuth();

onMounted(() => {
  getUserInfo();
});

const openSubmenu = () => {
  const w_submenu = document.getElementById("w-submenu");
  w_submenu.classList.toggle("opened");

  const submenu = document.getElementById("submenu");
  submenu.classList.toggle("hidden");
};
</script>

<template>
  <div
    id="sidebar"
    class="w-[256px] h-screen fixed flex flex-col bg-white rounded-r-xl p-6 gap-5 text-[var(--color-blue)]"
  >
    <div id="head" class="flex gap-5 pb-5">
      <div id="user-img" class="w-[50px] h-[50px] rounded-full overflow-hidden">
        <img
          src="@/assets/img/logo-kanemura.png"
          alt="logo kanemura"
          class="w-full object-cover"
        />
      </div>
      <div id="user-detail" class="flex items-center">
        <div>
          <p
            id="title"
            class="text-[10px] font-medium text-[#757575] uppercase"
          >
            Kanemura Japanese Food
          </p>
          <p id="name" class="text-sm font-medium">
            {{ detail_user.name }}
          </p>
        </div>
      </div>
    </div>
    <div id="nav" class="flex-1">
      <div id="menu">
        <p
          id="title"
          class="text-[10px] font-medium text-[#757575] uppercase mb-1 tracking-wider"
        >
          Dashboard
        </p>
        <ul>
          <li class="list-none mb-[5px]">
            <router-link
              :to="{ name: 'ad-user' }"
              class="flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
            >
              <i id="icon" class="ph-bold ph-users text-lg"></i>
              <span id="text" class="tracking-wide">Users</span>
            </router-link>
          </li>
          <li id="w-submenu" class="list-none mb-[5px]" @click="openSubmenu">
            <div
              class="flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
            >
              <i id="icon" class="ph-bold ph-article text-lg"></i>
              <span id="text" class="tracking-wide flex-1">Menu</span>
              <i id="icon" class="ph-bold ph-caret-right text-sm"></i>
            </div>
          </li>
          <ul id="submenu" class="hidden ml-3 pl-5 pt-[5px]">
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-donburi' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Donburi</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-soupramen' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Soup Ramen</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-dryramen' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Dry Ramen</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-alacarte' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">A la Carte</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-snack' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Snack</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-special' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Special</span>
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                :to="{ name: 'ad-additional' }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">Additional</span>
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <div id="system-menu" class="pt-5">
      <p
        id="title"
        class="text-[10px] font-medium text-[#757575] uppercase mb-1 tracking-wider"
      >
        System
      </p>
      <ul>
        <li class="list-none">
          <button
            class="w-full flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
          >
            <i id="icon" class="ph-bold ph-sign-out text-lg"></i>
            <span id="text" class="tracking-wide">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

#container {
  font-family: "Inter", sans-serif !important;
}

#head {
  border-bottom: 2px solid #f6f6f6;
}

#w-submenu.opened i.ph-caret-right {
  transform: rotate(90deg);
}

#submenu {
  transition: all 0.3s ease;
  border-left: 2px solid #f6f6f6;
}

#system-menu {
  border-top: 2px solid #f6f6f6;
}

#menu ul li a,
#w-submenu div,
#w-submenu i,
#system-menu ul li button {
  transition: all 0.3s ease;
}

#menu ul li a.active,
#menu ul li a:hover,
#w-submenu div:hover,
#system-menu ul li button.active,
#system-menu ul li button:hover {
  cursor: pointer;
  color: var(--color-red);
  background-color: var(--color-cream);
}
</style>
