<script setup></script>

<template>
  <div
    id="container"
    class="h-[60vh] flex justify-center items-center text-center"
  >
    <img
      src="@/assets/img/hero-2.png"
      alt="hero 2"
      id="hero2"
      class="absolute w-[34vw] left-0 top-[25vh] z-[1]"
    />
    <img
      src="@/assets/img/hero-3.png"
      alt="hero 3"
      id="hero3"
      class="absolute w-[34vw] right-0 top-0 z-[1]"
    />

    <div class="z-[5] text-[var(--color-blue)]">
      <div id="title" class="text-8xl mb-5">Order</div>
      <div id="japanese" class="text-4xl tracking-widest font-semibold">
        注文
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

@media (max-width: 911px) {
  #container {
    height: 25vh;
  }

  #hero2 {
    top: 180px;
  }

  #hero3 {
    top: 50px;
  }

  #title {
    font-size: 55px;
    margin-bottom: 0;
  }

  #japanese {
    font-size: 20px;
  }
}
</style>
