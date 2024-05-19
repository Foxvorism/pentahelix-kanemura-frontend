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
      <div id="title" class="text-8xl mb-5">Contact Us</div>
      <div id="japanese" class="text-4xl tracking-widest font-semibold">
        お問い合わせ
      </div>
    </div>
  </div>

  <div id="img-caontainer" class="h-[65vh]">
    <div id="img" class="h-full w-full"></div>
  </div>
</template>

<style scoped>
#title {
  font-family: var(--font-japanese2020);
}

#img {
  background-image: url(@/assets/img/bg-auth.png);
  background-size: cover;
  background-position: center;
}
</style>
