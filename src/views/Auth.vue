<script setup></script>

<template>
  <div class="w-full h-screen flex justify-center items-center bg-auth">
    <div
      class="bg-[var(--color-red)] opacity-60 absolute w-screen h-screen"
    ></div>
    <div class="w-[30vw] h-auto bg-white p-8 rounded-md z-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus
      magnam voluptatum quidem corporis non, quis minus rem quaerat vel unde
      temporibus voluptas. Mollitia at dolor ipsa, labore quia maiores!
    </div>
  </div>
</template>

<style scope>
.bg-auth {
  background-image: url("../assets/img/bg-auth.png");
  background-size: cover;
}
</style>
