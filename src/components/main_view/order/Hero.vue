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

    <div>
      <div id="text" class="z-[2]">
        <div id="title" class="text-8xl">Order</div>
        <div id="subtitle">
          <div class="tracking-widest text-xl">注文</div>
        </div>
      </div>
    </div>
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
