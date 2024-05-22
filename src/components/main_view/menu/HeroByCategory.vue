<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const route_id = route.params.id;
const route_category = route.params.category.replace("-", " ");

const japanese = ref("");

if (route_id == 1) {
  japanese.value = "どんぶり";
} else if (route_id == 2) {
  japanese.value = "辛口ラーメン";
} else if (route_id == 3) {
  japanese.value = "ラーメン";
} else if (route_id == 4) {
  japanese.value = "アラカルト";
} else if (route_id == 5) {
  japanese.value = "おやつ";
} else if (route_id == 6) {
  japanese.value = "スペシャルメニュー";
}
</script>

<template>
  <div class="h-[60vh] flex justify-center items-center text-center">
    <img
      src="@/assets/img/hero-2.png"
      alt="hero 2"
      class="absolute w-[34vw] left-0 top-[25vh] z-[1]"
    />
    <img
      src="@/assets/img/hero-3.png"
      alt="hero 2"
      class="absolute w-[34vw] right-0 top-0 z-[1]"
    />

    <div class="z-[5] text-[var(--color-blue)]">
      <div id="title" class="text-8xl mb-5">{{ route_category }}</div>
      <div id="japanese" class="text-4xl tracking-widest font-semibold">
        {{ japanese }}
      </div>
    </div>
  </div>

  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 1">
    Donburi adalah makanan Jepang berupa nasi putih dengan berbagai macam lauk
    di atasnya seperti ikan, daging dan sayur-sayuran berkuah yang dihidangkan
    di dalam mangkuk besar yang juga disebut donburi. Kuah untuk donburi
    bergantung pada jenis makanan, tetapi pada umumnya berupa dashi dicampur
    kecap asin dan mirin.
  </div>
  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 2">
    Dry ramen sendiri sering juga disebut dengan abura soba. Berupa ramen yang
    disajikan kering tanpa kuah, dibumbui dengan minyak dan diberi tare atau
    saus. Dry ramen ini cocok buat penggemar mie goreng.
  </div>
  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 3">
    Ramen adalah hidangan mi Jepang yang terdiri dari mi gandum disajikan dalam
    kaldu berbasis daging atau ikan, sering dibumbui kecap atau miso, dan
    dilengkapi dengan berbagai topping seperti irisan daging, telur rebus, dan
    rumput laut.
  </div>
  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 4">
    A'la carte adalah istilah dalam dunia kuliner yang berarti "dari menu", di
    mana hidangan dipesan secara terpisah dan bukan sebagai bagian dari satu set
    makanan. Setiap item pada menu memiliki harga sendiri, sehingga pelanggan
    dapat memilih hidangan yang diinginkan secara individual.
  </div>
  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 5">
    Snack adalah makanan ringan yang dikonsumsi di antara waktu makan utama dan
    sering dimakan untuk menghilangkan rasa lapar sementara atau sebagai
    camilan.
  </div>
  <div class="px-60 py-10 text-center font-semibold" v-if="route_id == 6">
    Special menu adalah menu khas
    <span class="text-[var(--color-red)]">Kanemura Japanese Food</span> yang
    memiliki citarasa khas antara makanan Jepang dan Indonesia.
  </div>
</template>

<style scoped>
#title {
  font-family: var(--font-japanese2020);
}
</style>
