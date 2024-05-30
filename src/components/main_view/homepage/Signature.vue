<script setup>
import { onMounted } from "vue";
import useMenu from "@/composables/menu.js";

const { menus, getSignatureMenus } = useMenu();

const img_api = import.meta.env.VITE_BASE_URL + "/image/fileSystem/";

onMounted(() => {
  getSignatureMenus();
});
</script>

<template>
  <div class="mx-20 mt-20">
    <img
      src="@/assets/img/sushi-1.png"
      alt="sushi-1"
      class="absolute -left-24 w-[15vw] mt-72"
    />
    <img
      src="@/assets/img/sushi-2.png"
      alt="sushi-2"
      class="absolute -right-10 w-[10vw] mt-14"
    />
    <img
      src="@/assets/img/sushi-1.png"
      alt="sushi-1"
      class="absolute -right-24 w-[15vw] mt-[30rem]"
    />

    <img
      src="@/assets/img/sushi-2.png"
      alt="sushi-2"
      class="absolute -left-10 w-[10vw] mt-[47rem]"
    />

    <div
      id="title"
      class="text-center text-xl mb-10 text-[var(--color-blue)] font-semibold z-[2]"
    >
      Our Signature Menu
    </div>

    <div id="card-container" class="mb-10">
      <el-scrollbar>
        <div class="flex overflow-x-auto gap-5 px-5">
          <div v-for="item in menus" :key="item.id" class="mb-5">
            <div
              id="menu-card"
              class="px-5 py-3 rounded-md w-[350px] min-h-full bg-[var(--color-red)]"
            >
              <div id="image">
                <div
                  id="img-container"
                  class="h-[20vh] p-3 flex justify-center items-center"
                >
                  <img
                    :src="img_api + item.nama_img"
                    :alt="item.nama_img ?? 'Image not found'"
                    class="h-full object-contain"
                  />
                </div>
              </div>
              <div
                id="menu-name"
                class="bg-[var(--color-blue)] rounded-full text-center text-[var(--color-cream)] text-md py-1 px-2 mb-2"
              >
                {{ item.namaMenu }}
              </div>
              <div
                id="menu-desc"
                class="text-center text-[var(--color-cream)] text-md mb-2"
              >
                {{ item.description }}
              </div>
              <div
                id="menu-price"
                class="text-center text-[var(--color-cream)] text-lg font-medium"
              >
                IDR
                {{
                  item.harga.toLocaleString("de-DE", {
                    maximumFractionDigits: 3,
                  })
                }}
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>

  <div id="button-container" class="flex justify-center gap-10">
    <router-link :to="{ name: 'menu' }">
      <button
        class="px-14 py-3 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
      >
        Menu
      </button>
    </router-link>
    <router-link :to="{ name: 'order' }">
      <button
        class="px-14 py-3 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
      >
        Order
      </button>
    </router-link>
  </div>
</template>

<style scoped>
#menu-card {
  border: 2px solid var(--color-blue);
  box-shadow: 10px 10px var(--color-blue);
}
</style>
