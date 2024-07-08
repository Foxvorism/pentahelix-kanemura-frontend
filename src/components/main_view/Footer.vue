<script setup></script>

<template>
  <div id="container1" class="w-screen bg-[var(--color-red)] px-36 py-10">
    <div id="container2" class="flex justify-around">
      <div id="img" class="flex justify-center">
        <div
          id="img-container"
          class="bg-[var(--color-cream)] w-[200px] h-[200px] rounded-full"
        >
          <img
            src="@/assets/img/logo-kanemura.png"
            alt="logo kanemura"
            class="w-full"
          />
        </div>
      </div>
      <div
        id="address"
        class="text-[var(--color-cream)] tracking-wide max-w-[40%]"
      >
        <div id="title" class="text-lg font-semibold mb-3">
          Kanemura Japanese Food
        </div>
        <div id="address-title" class="text-lg font-semibold">Address</div>
        <div id="address">
          Jl. Kumbang No. 33, RT.02/RW.04, Babakan, Kecamatan Bogor Tengah, Kota
          Bogor, Jawa Barat 16128.
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
            <i class="ph ph-instagram-logo text-2xl"></i>
          </div>
          <div id="text" class="font-semibold">@kanemura.jpn</div>
        </div>
        <div id="tiktok" class="flex items-center">
          <div
            id="icon"
            class="mr-2 bg-[var(--color-blue)] rounded-full w-10 h-10 flex justify-center items-center"
          >
            <i class="ph ph-tiktok-logo text-2xl"></i>
          </div>
          <div id="text" class="font-semibold">@kanemura.jpn</div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="credits"
    class="w-full bg-[var(--color-blue)] text-[var(--color-cream)] py-3 text-center tracking-wider text-sm"
  >
    &copy; 2024
    <span class="font-semibold">Kanemura Japanese Food Website</span>
    Designed and Created by Pentahelix <span class="mx-1">|</span> All Right
    Reserved.
  </div>
</template>

<style scoped>
@media (max-width: 991px) {
  #container1 {
    padding: 20px 40px;
  }

  #container1 #container2 {
    justify-content: center;
    flex-direction: column;
  }

  #img-container {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }

  #title {
    text-align: center;
  }

  #title,
  #address-title {
    font-size: 16px;
  }

  #address {
    max-width: 100%;
    margin-bottom: 10px;
  }

  #address,
  #social-media #text {
    font-size: 14px;
  }

  #social-media #icon {
    width: 30px;
    height: 30px;
  }

  #social-media #icon i {
    font-size: 18px;
  }

  #nav {
    display: none;
  }

  #credits {
    padding: 7px 20px;
    font-size: 12px;
  }
}
</style>
