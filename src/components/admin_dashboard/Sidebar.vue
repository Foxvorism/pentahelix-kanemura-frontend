<script setup>
import { ref, onMounted } from "vue";
import useAuth from "@/composables/auth.js";

const { detail_user, getUserInfo } = useAuth();

onMounted(() => {
  getUserInfo();
});

const submenuToogle = () => {
  const menu = document.querySelector("#w-submenu");
  menu.classList.toggle("active");

  const submenu = document.querySelector("#submenu");
  submenu.classList.toggle("hidden");
};
</script>

<template>
  <div
    id="sidebar"
    class="w-[256px] h-screen flex flex-col bg-white rounded-r-xl p-6 gap-5"
  >
    <div id="head" class="flex gap-5 pb-5">
      <div id="user-img" class="w-[50px] h-[50px] rounded-full overflow-hidden">
        <img
          src="../../assets/img/logo-kanemura.png"
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
            Admin {{ detail_user.name }}
          </p>
        </div>
      </div>
    </div>
    <div id="nav">
      <div id="menu">
        <p
          id="title"
          class="text-[10px] font-medium text-[#757575] uppercase mb-1"
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
          <li id="w-submenu" class="list-none mb-[5px]" @click="submenuToogle">
            <div
              class="flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
            >
              <i id="icon" class="ph-bold ph-article text-lg"></i>
              <span id="text" class="tracking-wide flex-1">Menu</span>
              <i id="icon-arrow" class="ph-bold ph-caret-right text-sm"></i>
            </div>
            <ul id="submenu" class="hidden ml-5 pl-5 pt-[5px]">
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">Donburi</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">Ramen</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">A'la Carte</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">Snack</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">Special</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'auth' }"
                  class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
                >
                  <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                  <span id="text" class="tracking-wide flex-1">Additional</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

#container {
  font-family: "Inter", sans-serif;
}

#head {
  border-bottom: 2px solid #f6f6f6;
}

#menu ul li a,
#w-submenu div {
  transition: all 0.3s ease;
}

#menu ul li a.active,
#menu ul li a:hover,
#w-submenu div:hover {
  cursor: pointer;
  color: var(--color-red);
  background-color: var(--color-cream);
}

#w-submenu i#icon-arrow {
  transition: all 0.2s ease;
}

#w-submenu.active i#icon-arrow {
  transform: rotate(90deg);
}

#submenu {
  transition: all 0.3s ease;
  border-left: 1px solid #f6f6f6;
}
</style>
