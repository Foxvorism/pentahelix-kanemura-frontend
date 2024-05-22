<script setup></script>

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
      <div id="title" class="text-8xl mb-5">Kanemura</div>
      <div id="subtitle" class="grid grid-cols-2 font-semibold">
        <div id="sub1" class="text-left tracking-widest text-xl">
          Japanese food
        </div>
        <div id="sub2" class="text-right tracking-widest text-xl">カネムラ</div>
      </div>
    </div>
  </div>

  <div id="discover" class="my-10 mx-20 text-lg font-semibold">
    <div id="dis2">Discover Our Authentic</div>
    <div id="dis2">Japanese Restaurant</div>
  </div>

  <div id="container" class="h-[65vh]">
    <div id="gradient" class="h-[65vh]">
      <div id="text" class="flex items-center mx-20 h-[65vh] text-6xl">
        <div>
          <div>About</div>
          <div>Us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title,
#sub2,
#text {
  font-family: var(--font-japanese2020);
}

#sub1 {
  font-family: var(--font-fredoka);
}

#container {
  background-image: url(@/assets/img/bg-auth.png);
  background-size: cover;
  background-position: center;
}

#gradient {
  background-image: linear-gradient(
    to right,
    rgba(255, 247, 227, 1),
    rgba(255, 247, 227, 1),
    rgba(255, 247, 227, 0.3),
    rgba(255, 247, 227, 0.2),
    rgba(255, 247, 227, 0.1),
    rgba(255, 247, 227, 0)
  );
}
</style>
