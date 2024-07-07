<script setup></script>

<template>
  <div id="container" class="mx-40 mt-10 text-[var(--color-blue)]">
    <div id="img-mobile">
      <div class="flex justify-center items-center">
        <img
          src="@/assets/img/kanemura-1.png"
          alt="vektor mobile"
          id="vektor-mobile"
          class="w-[70%]"
        />
      </div>
    </div>
    <div class="product-grid mb-40">
      <div id="text" class="col-span-2 flex items-center">
        <div class="px-20">
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              id="point"
              class="w-5 h-5 mr-5"
            />
            <div id="title" class="text-xl font-semibold">
              Kanemura - カネムラ
            </div>
          </div>
          <div id="paragraph" class="text-lg mb-5">
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
          <div id="btn-about">
            <router-link :to="{ name: 'about' }">
              <button
                class="px-14 py-4 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
              >
                About Us
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div id="vektor-top" class="flex justify-center items-center">
        <img
          src="@/assets/img/kanemura-1.png"
          alt="vektor 1"
          id="vektor1"
          class="w-[90%]"
        />
      </div>
    </div>

    <img
      src="@/assets/img/kanemura-3.png"
      alt="vektor 3"
      id="vektor3"
      class="absolute left-0 w-[15vw] -mt-40"
    />
    <img
      src="@/assets/img/dots-1.png"
      alt="dots 1"
      id="dots1"
      class="absolute -left-8 w-16 mt-6"
    />

    <div class="product-grid">
      <div id="vektor-bottom">
        <img src="@/assets/img/kanemura-2.png" alt="vektor 2" id="vektor2" />
      </div>
      <div id="text" class="col-span-2 flex items-center">
        <div class="px-20">
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              id="point"
              class="w-5 h-5 mr-5"
            />
            <div id="title" class="text-xl font-semibold">
              Authentic Menu - 本物
            </div>
          </div>
          <div id="paragraph" class="text-lg mb-5">
            <span class="text-[var(--color-red)] font-medium">Kanemura</span>
            memiliki berbagai jenis makanan khas Jepang, diantaranya ada
            <span class="font-medium">
              Donburi, Dry Ramen, Soup Ramen, A'la Carte, Snack, dan Special
              Menu
            </span>
            khas
            <span class="text-[var(--color-red)] font-medium">Kanemura</span>.
          </div>
          <div id="btn-menu">
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
  </div>
</template>

<style scoped>
#img-mobile {
  display: none;
}

.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 991px) {
  #img-mobile {
    display: block;
    margin-bottom: 30px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 10px;
  }

  #container {
    margin: 40px;
  }

  #container .px-20 {
    padding: 0;
  }

  #vektor-top > #vektor1,
  #vektor-bottom > #vektor2,
  #vektor3,
  #dots1 {
    display: none;
  }

  #point {
    width: 10px;
    height: 10px;
  }

  #title {
    font-size: 18px;
  }

  #paragraph {
    font-size: 14px;
  }

  #btn-about,
  #btn-menu {
    display: flex;
    justify-content: center;
  }

  #btn-about button,
  #btn-menu button {
    padding: 6px 20px;
    font-size: 14px;
  }
}
</style>
