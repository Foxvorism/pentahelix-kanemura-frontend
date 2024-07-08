<script setup></script>

<template>
  <div class="w-full h-auto">
    <img
      src="@/assets/img/dots-1.png"
      alt="dots"
      id="dots"
      class="absolute w-20 mt-28 -left-8"
    />
    <img
      src="@/assets/img/dots-2.png"
      alt="dots"
      id="dots"
      class="absolute w-20 mt-[400px] right-10"
    />

    <div id="container" class="py-24 px-32 flex justify-around w-full">
      <div id="text" class="flex justify-center items-center px-32">
        <div>
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              id="point"
              class="w-5 h-5 mr-5"
            />
            <div class="text-xl font-semibold">Visi Kanemura</div>
          </div>
          <div id="visi" class="text-lg">
            Menjadikan kedai makanan jepang yang terbaik, terenak dan termurah
            di indonesia.
          </div>
        </div>
      </div>
      <div id="text" class="flex justify-center items-center px-32">
        <div>
          <div id="title" class="flex items-center mb-5">
            <img
              src="@/assets/img/point.png"
              alt="point"
              id="point"
              class="w-5 h-5 mr-5"
            />
            <div class="text-xl font-semibold">Misi Kanemura</div>
          </div>
          <div id="misi" class="text-lg pl-10">
            <ol class="list-disc">
              <li>Memberikan kualitas makanan, dan harga yang terbaik.</li>
              <li>Memberikan pelayanan yang optimal dan terbaik.</li>
              <li>Selalu menggunakan bahan-bahan yang segar.</li>
              <li>
                Selalu menjaga kualitas makan dan pelayanan agar tetap menjadi
                yang terbaik.
              </li>
              <li>
                Mengutamakan kebersihan setiap proses pengolahan makanan dan
                pelayanan makanan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  font-family: var(--font-fredoka);
}

@media (max-width: 911px) {
  #dots {
    display: none;
  }

  #container {
    flex-direction: column;
    padding: 40px;
    gap: 20px;
  }

  #container #text {
    padding: 0;
  }

  #title {
    margin-bottom: 5px;
  }

  #point {
    width: 10px;
    height: 10px;
  }

  #title .text-xl {
    font-size: 16px;
  }

  #visi,
  #misi {
    font-size: 14px;
  }
}
</style>
