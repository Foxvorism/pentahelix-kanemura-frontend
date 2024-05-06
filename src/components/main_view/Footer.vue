<script setup></script>

<template>
  <div class="w-screen bg-[var(--color-red)] px-36 py-10">
    <div class="flex justify-center gap-32">
      <div id="img" class="flex justify-center">
        <div class="bg-[var(--color-cream)] w-[200px] rounded-full">
          <img
            src="@/assets/img/logo-kanemura.png"
            alt="logo kanemura"
            class="w-full"
          />
        </div>
      </div>
      <div id="address" class="text-[var(--color-cream)] tracking-wide">
        <div id="title" class="text-lg font-semibold mb-3">
          Kanemura Japanese Food
        </div>
        <div id="address-title" class="text-lg font-semibold">Address</div>
        <div id="address">
          Jl. Kumbang No.33, Bogor Tengah, Kota Bogor, Jawa Barat 16128
        </div>
      </div>
      <div
        id="nav"
        class="text-[var(--color-cream)] tracking-wide font-semibold"
      >
        <div id="home" class="mb-3">Home</div>
        <div id="about" class="mb-3">About Us</div>
        <div id="menu" class="mb-3">Menu</div>
        <div id="order" class="mb-3">Order</div>
        <div id="contact">Contact Us</div>
      </div>
      <div id="social-media" class="text-[var(--color-cream)] tracking-wide">
        <div id="insta" class="flex items-center mb-3">
          <div
            id="icon"
            class="mr-2 bg-[var(--color-blue)] rounded-full w-10 h-10 flex justify-center items-center"
          >
            <i class="ph-bold ph-instagram-logo text-2xl"></i>
          </div>
          <div id="text" class="font-semibold">@kanemura.jpn</div>
        </div>
        <div id="tiktok" class="flex items-center">
          <div
            id="icon"
            class="mr-2 bg-[var(--color-blue)] rounded-full w-10 h-10 flex justify-center items-center"
          >
            <i class="ph-bold ph-tiktok-logo text-2xl"></i>
          </div>
          <div id="text" class="font-semibold">@kanemura.jpn</div>
        </div>
      </div>
    </div>
  </div>
</template>
