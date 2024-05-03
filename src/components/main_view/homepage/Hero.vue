<script setup></script>

<template>
  <div class="h-[45vh] flex justify-center items-center text-center">
    <img
      src="@/assets/img/hero-1.png"
      alt="hero 1"
      class="absolute w-full -top-10 z-[2]"
    />
    <img
      src="@/assets/img/hero-2.png"
      alt="hero 2"
      class="absolute w-[30vw] left-0 mt-[80px]"
    />
    <img
      src="@/assets/img/hero-3.png"
      alt="hero 3"
      class="absolute w-[35vw] right-0 -top-5 z-[1]"
    />

    <div class="mt-20 z-[5] text-[var(--color-blue)]">
      <div id="welcome" class="text-8xl mb-5">Welcome</div>
      <div id="japanese" class="text-4xl tracking-widest font-semibold">
        いらっしゃいませ
      </div>
    </div>
  </div>
</template>

<style scoped>
#welcome {
  font-family: var(--font-japanese2020);
}

#japanese {
  font-family: var(--font-fredoka);
}
</style>
