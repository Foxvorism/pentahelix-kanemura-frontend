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
}

:root {
  --color-red: #ff0000;
  --color-blue: #012243;
  --color-cream: #fff7e3;
}
</style>
