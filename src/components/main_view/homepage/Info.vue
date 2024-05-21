<script setup></script>

<template>
  <div id="info" class="mx-20 mt-10">
    <div class="grid grid-cols-2 gap-10 px-20">
      <div
        id="card-info"
        class="w-full px-10 py-5 bg-[var(--color-red)] rounded-md"
      >
        <div class="flex items-center gap-5">
          <div>
            <div
              id="icon"
              class="flex justify-center items-center rounded-full bg-[var(--color-cream)] w-16 h-16 text-3xl text-[var(--color-blue)]"
            >
              <i class="ph-bold ph-map-pin-area"></i>
            </div>
          </div>
          <div id="content" class="col-span-3">
            <div
              id="title"
              class="text-lg font-semibold text-[var(--color-cream)]"
            >
              Address
            </div>
            <div id="text" class="text-md text-[var(--color-cream)]">
              Jl. Kumbang No. 33, RT.02/RW.04, Babakan, Kecamatan Bogor Tengah,
              Kota Bogor, Jawa Barat 16128.
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-info"
        class="w-full px-10 py-5 bg-[var(--color-red)] rounded-md"
      >
        <div class="flex items-center gap-5">
          <div>
            <div
              id="icon"
              class="flex justify-center items-center rounded-full bg-[var(--color-cream)] w-16 h-16 text-3xl text-[var(--color-blue)]"
            >
              <i class="ph-bold ph-phone"></i>
            </div>
          </div>
          <div id="content" class="col-span-3">
            <div
              id="title"
              class="text-lg font-semibold text-[var(--color-cream)]"
            >
              Contact
            </div>
            <div id="text" class="text-md text-[var(--color-cream)]">
              +62-85934733148
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-info"
        class="w-full px-10 py-5 bg-[var(--color-red)] rounded-md"
      >
        <div class="flex items-center gap-5">
          <div>
            <div
              id="icon"
              class="flex justify-center items-center rounded-full bg-[var(--color-cream)] w-16 h-16 text-3xl text-[var(--color-blue)]"
            >
              <i class="ph-bold ph-envelope"></i>
            </div>
          </div>
          <div id="content" class="col-span-3">
            <div
              id="title"
              class="text-lg font-semibold text-[var(--color-cream)]"
            >
              Email
            </div>
            <div id="text" class="text-md text-[var(--color-cream)]">
              kanemuraaa88@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-info"
        class="w-full px-10 py-5 bg-[var(--color-red)] rounded-md"
      >
        <div class="flex items-center gap-5">
          <div>
            <div
              id="icon"
              class="flex justify-center items-center rounded-full bg-[var(--color-cream)] w-16 h-16 text-3xl text-[var(--color-blue)]"
            >
              <i class="ph-bold ph-clock-user"></i>
            </div>
          </div>
          <div id="content" class="col-span-3">
            <div
              id="title"
              class="text-lg font-semibold text-[var(--color-cream)]"
            >
              Opening Hour
            </div>
            <div id="text" class="text-md text-[var(--color-cream)]">
              10 AM - 11 PM <span class="mx-1"> | </span> Everyday
            </div>
            <div id="text" class="text-md text-[var(--color-cream)]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card-info {
  box-shadow: 10px 10px var(--color-blue);
}
</style>
