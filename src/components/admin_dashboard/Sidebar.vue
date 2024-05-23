<script setup>
import { onMounted } from "vue";
import Swal from "sweetalert2";
import useAuth from "@/composables/auth.js";
import useCategory from "@/composables/category.js";

const { detail_user, getUserInfo, validationDashboard, logout } = useAuth();
const { categories, getCategories } = useCategory();

onMounted(() => {
  getUserInfo();
  getCategories();
  validationDashboard();
});

const openSubmenu = () => {
  const w_submenu = document.getElementById("w-submenu");
  w_submenu.classList.toggle("opened");

  const submenu = document.getElementById("submenu");
  submenu.classList.toggle("hidden");
};

const handleLogout = () => {
  Swal.fire({
    title: "Apakah anda yakin ingin logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#012243",
    cancelButtonColor: "#ff0000",
    confirmButtonText: "Iya",
    cancelButtonText: "Batal",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      logout();
    }
  });
};
</script>

<template>
  <div
    id="sidebar"
    class="w-[256px] h-screen fixed flex flex-col bg-white rounded-r-xl p-6 gap-5 text-[var(--color-blue)] overflow-y-auto"
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
          <li class="list-none mb-[5px]">
            <router-link
              :to="{ name: 'ad-category' }"
              class="flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
            >
              <i id="icon" class="ph-bold ph-article text-lg"></i>
              <span id="text" class="tracking-wide">Categories</span>
            </router-link>
          </li>
          <li id="w-submenu" class="list-none mb-[5px]" @click="openSubmenu">
            <div
              class="flex items-center gap-[10px] text-sm font-medium color-[#757575] py-2 px-4 rounded-lg"
            >
              <i id="icon" class="ph-bold ph-book-bookmark text-lg"></i>
              <span id="text" class="tracking-wide flex-1">Menu</span>
              <i id="icon" class="ph-bold ph-caret-right text-sm"></i>
            </div>
          </li>
          <ul id="submenu" class="hidden ml-3 pl-5 pt-[5px]">
            <li class="mb-1" v-for="item in categories" :key="item.id">
              <router-link
                :to="{ name: 'ad-' + item.nama_kategori.toLowerCase() }"
                class="flex items-center text-sm font-medium color-[#757575] py-2 px-3 rounded-lg"
              >
                <i id="icon" class="ph-bold ph-bowl-food text-lg mr-2"></i>
                <span id="text" class="tracking-wide flex-1">{{
                  item.nama_kategori
                }}</span>
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
            @click="handleLogout()"
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
