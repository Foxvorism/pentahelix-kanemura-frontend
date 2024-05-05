<script setup>
const data = [
  {
    id: 1,
    nama_menu: "Ramen Tofu",
    description: "Kuah Gulai Kamping",
    harga: 25000,
    signature: true,
  },
  {
    id: 1,
    nama_menu: "Ramen Tofu",
    description: "Kuah Gulai Kamping",
    harga: 25000,
    signature: true,
  },
  {
    id: 1,
    nama_menu: "Ramen Tofu",
    description: "Kuah Gulai Kamping",
    harga: 25000,
    signature: true,
  },
  {
    id: 1,
    nama_menu: "Ramen Tofu",
    description: "Kuah Gulai Kamping",
    harga: 25000,
    signature: true,
  },
];
</script>

<template>
  <div class="mx-20 mt-20">
    <img
      src="@/assets/img/sushi-1.png"
      alt="sushi-1"
      class="absolute -left-24 w-[15vw] mt-32"
    />
    <img
      src="@/assets/img/sushi-2.png"
      alt="sushi-2"
      class="absolute -right-10 w-[10vw]"
    />

    <div
      id="title"
      class="text-center text-xl mb-10 text-[var(--color-blue)] font-semibold z-[2]"
    >
      Our Signature Menu
    </div>

    <div id="card-container" class="mb-10">
      <div class="grid grid-cols-4 gap-10 px-32">
        <div v-for="item in data" :key="item.id">
          <div
            id="menu-card"
            class="px-5 py-3 bg-[var(--color-red)] rounded-md min-h-full"
          >
            <div
              id="menu-name"
              class="bg-[var(--color-blue)] rounded-full text-center text-[var(--color-cream)] text-xl py-1 mb-2"
            >
              {{ item.nama_menu }}
            </div>
            <div
              id="menu-desc"
              class="text-center text-[var(--color-cream)] text-md mb-2"
            >
              {{ item.description }}
            </div>
            <div
              id="menu-price"
              class="text-center text-[var(--color-cream)] text-lg"
            >
              IDR {{ item.harga }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="button-container" class="flex justify-center gap-10">
    <button
      class="px-14 py-3 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
    >
      Menu
    </button>
    <button
      class="px-14 py-3 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
    >
      Order
    </button>
  </div>
</template>

<style scoped>
#menu-card {
  box-shadow: 10px 10px var(--color-blue);
}
</style>
