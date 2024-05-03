<script setup></script>

<template>
  <div class="mx-40 mt-10 text-[var(--color-blue)]">
    <div class="grid grid-cols-3 mb-36">
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
          <div id="paragrap" class="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            pariatur facere? Incidunt nam perferendis esse, cupiditate ab ut
            error in voluptatem iure hic, illum sapiente id, temporibus nobis
            iste eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquid unde odio porro quod, eos temporibus. Odit repellat quod
            saepe dolores est nisi harum, similique porro id minima voluptatibus
            magni doloremque.
          </div>
          <button
            class="px-14 py-4 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
          >
            About Us
          </button>
        </div>
      </div>
      <div id="vektor">
        <div class="max-w-full">
          <img src="@/assets/img/kanemura-1.png" alt="vektor 1" />
        </div>
      </div>
    </div>

    <img
      src="@/assets/img/kanemura-3.png"
      alt="vektor 3"
      class="absolute left-0 w-[17vw] -mt-44"
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
          <div id="paragrap" class="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            pariatur facere? Incidunt nam perferendis esse, cupiditate ab ut
            error in voluptatem iure hic, illum sapiente id, temporibus nobis
            iste eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquid unde odio porro quod, eos temporibus. Odit repellat quod
            saepe dolores est nisi harum, similique porro id minima voluptatibus
            magni doloremque.
          </div>
          <button
            class="px-14 py-4 bg-[var(--color-red)] text-[var(--color-cream)] rounded-full font-semibold tracking-wider"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
