<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center px-40 py-20 w-full">
    <div class="text-2xl font-bold mb-10 text-[var(--color-blue)]">
      Discover Our Authentic Menu
    </div>
    <div class="grid grid-cols-3 gap-10">
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '1', category: 'donburi' },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_donburi.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">Donburi</div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '2', category: 'dry-ramen' },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_dryramen.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">Dry Ramen</div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '3', category: 'soup-ramen' },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_soupramen.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">Soup Ramen</div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '4', category: `a'la-carte` },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_alacarte.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">A'la Carte</div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '5', category: 'snack' },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_snack.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">Snack</div>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'menu-by-category',
          params: { id: '6', category: 'special-menu' },
        }"
      >
        <div
          id="card"
          class="flex flex-col justify-center items-center w-full h-full text-[var(--color-red)] font-medium p-5 rounded-lg"
        >
          <div id="img" class="p-10">
            <img
              src="@/assets/img/k_specialmenu.png"
              alt="foto kategori"
              class="object-contain"
            />
          </div>
          <div id="text" class="text-center text-lg">Special Menu</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#card {
  transition: all 0.3s ease;
}

#card:hover {
  background-color: var(--color-red);
  box-shadow: 10px 10px var(--color-blue);
  color: var(--color-cream);
}
</style>
