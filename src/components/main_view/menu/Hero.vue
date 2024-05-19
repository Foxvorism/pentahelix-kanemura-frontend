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
      <div id="title" class="text-8xl mb-5">Menu</div>
      <div id="japanese" class="text-4xl tracking-widest font-semibold">
        メニュー
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  font-family: var(--font-japanese2020);
}
</style>
