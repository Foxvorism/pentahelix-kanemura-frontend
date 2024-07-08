<script setup>
import { onMounted } from "vue";

import useMenu from "@/composables/menu.js";
import { useRoute } from "vue-router";

const { menus, getMenusByCategory } = useMenu();

const route = useRoute();
const route_id = route.params.id;
const img_api = import.meta.env.VITE_BASE_URL + "/image/fileSystem/";

onMounted(() => {
  getMenusByCategory(route_id);
});
</script>

<template>
  <div id="container" class="px-40 py-20">
    <div class="product-grid">
      <div v-for="item in menus" :key="item.id">
        <div id="menu-card" class="px-5 py-3 rounded-md min-h-full">
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
          <div id="menu-desc" class="text-center text-md mb-2">
            {{ item.description }}
          </div>
          <div id="menu-price" class="text-center text-lg font-medium">
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
  </div>
</template>

<style scoped>
#menu-card {
  transition: all 0.3s ease;
  border: 2px solid var(--color-blue);
}

#menu-card:hover {
  background-color: var(--color-red);
  box-shadow: 10px 10px var(--color-blue);
  color: var(--color-cream);
}

.product-grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 911px) {
  #container {
    padding: 40px;
  }

  .product-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  #card-container {
    margin-bottom: 20px;
  }

  #img-container {
    height: 15vh;
  }

  #menu-name,
  #menu-desc {
    font-size: 14px;
  }

  #menu-price {
    font-size: 16px;
  }
}
</style>
