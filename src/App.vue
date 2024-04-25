<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: var(--font-fredoka);
}

/*===== Custom Scrollbar =====*/
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-blue);
  border-radius: 10px;
}

/*===== Root Variable =====*/
:root {
  --color-red: #ff0000;
  --color-blue: #012243;
  --color-cream: #fff7e3;

  --font-japanese2020: Japanese2020;
  --font-fredoka: Fredoka;
}
</style>
