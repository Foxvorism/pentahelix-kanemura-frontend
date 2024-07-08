<script setup>
const contacts = [
  {
    icon: "ph ph-whatsapp-logo",
    type: "Whatsapp",
    value: "+62-85934733148",
    action: "Chat",
    link: "https://wa.link/7wxry4",
  },
  {
    icon: "ph ph-envelope",
    type: "Email",
    value: "kanemuraaa88@gmail.com",
    action: "Mail",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=kanemuraaa88@gmail.com&tf=cm",
  },
  {
    icon: "ph ph-map-pin-area",
    type: "Address",
    value:
      "Jl. Kumbang No. 33, RT.02/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128.",
    action: "Go To",
    link: "https://maps.app.goo.gl/49FqzgFC3YE6tx7z7",
  },
];

const buttonAction = (linkto) => {
  window.open(linkto);
};
</script>

<template>
  <div class="flex justify-center items-center">
    <div id="container" class="w-[65vw]">
      <el-carousel type="card" :autoplay="false">
        <el-carousel-item v-for="item in contacts" :key="item">
          <div class="flex flex-col items-center justify-center h-full">
            <div
              id="header"
              class="flex justify-center items-center px-10 mb-5"
            >
              <div
                id="icon"
                class="flex justify-center items-center rounded-full bg-[var(--color-red)] w-[45px] h-[45px] text-3xl text-[var(--color-cream)] mr-3"
              >
                <i :class="item.icon"></i>
              </div>
              <div id="type" class="text-lg font-semibold tracking-wider">
                {{ item.type }}
              </div>
            </div>
            <div id="body" class="px-10 text-center mb-5">
              {{ item.value }}
            </div>
            <div id="btn-action" class="flex justify-center items-center">
              <button
                class="px-5 py-1 bg-[var(--color-red)] rounded-full"
                @click="buttonAction(item.link)"
              >
                {{ item.action }}
              </button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 991px) {
  #container {
    width: 100%;
    margin: 40px;
  }

  #type {
    display: none;
  }
}
</style>
