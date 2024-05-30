<script setup></script>

<template>
  <div class="mx-40 mt-10 text-[var(--color-blue)]">
    <div class="grid grid-cols-3 mb-40">
      <div id="text" class="col-span-2 flex items-center">
        <div class="px-20">
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              class="w-5 h-5 mr-5"
            />
            <div class="text-xl font-semibold">Kanemura - カネムラ</div>
          </div>
          <div id="paragrap" class="text-lg mb-5">
            <span class="text-[var(--color-red)] font-semibold">Kanemura</span>
            berdiri sejak mei 2023.
            <span class="text-[var(--color-red)] font-semibold">Kanemura</span>
            merupakan resto makanan jepang yang berkonsep semi in-door dengan
            makanan yang murah, enak, dan ramah dikantong semua kalangan. Maka
            dari itu penamaan dari brand
            <span class="text-[var(--color-red)] font-semibold">Kanemura</span>
            yang berarti enak dan murah lalu diplesetkan menjadi
            <span class="text-[var(--color-red)] font-semibold">Kanemura</span>.
          </div>
          <router-link :to="{ name: 'about' }">
            <button
              class="px-14 py-4 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
            >
              About Us
            </button>
          </router-link>
        </div>
      </div>
      <div id="vektor" class="flex justify-center items-center">
        <img src="@/assets/img/kanemura-1.png" alt="vektor 1" class="w-[90%]" />
      </div>
    </div>

    <img
      src="@/assets/img/kanemura-3.png"
      alt="vektor 3"
      class="absolute left-0 w-[15vw] -mt-40"
    />
    <img
      src="@/assets/img/dots-1.png"
      alt="dots 1"
      class="absolute -left-8 w-16 mt-6"
    />

    <div class="grid grid-cols-3">
      <div id="vektor">
        <div class="max-w-full">
          <img src="@/assets/img/kanemura-2.png" alt="vektor 2" />
        </div>
      </div>
      <div id="text" class="col-span-2 flex items-center">
        <div class="px-20">
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              class="w-5 h-5 mr-5"
            />
            <div class="text-xl font-semibold">Authentic Menu - 本物</div>
          </div>
          <div id="paragrap" class="text-lg mb-5">
            <span class="text-[var(--color-red)] font-medium">Kanemura</span>
            memiliki berbagai jenis makanan khas Jepang, diantaranya ada
            <span class="font-medium">
              Donburi, Dry Ramen, Soup Ramen, A'la Carte, Snack, dan Special
              Menu
            </span>
            khas
            <span class="text-[var(--color-red)] font-medium">Kanemura</span>.
          </div>
          <router-link :to="{ name: 'menu' }">
            <button
              class="px-14 py-4 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
            >
              Menu
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
