<script setup></script>

<template>
  <div id="container" class="mx-20 mt-20">
    <div
      id="title"
      class="text-center text-xl mb-10 text-[var(--color-blue)] font-semibold"
    >
      People Reviews to Kanemura Japanese Food
    </div>

    <div id="rating-widget">
      <div
        class="elfsight-app-b7344501-b119-4a28-a41b-e754e2729c94"
        data-elfsight-app-lazy
      ></div>
    </div>
  </div>
</template>

<style scoped>
#rating-widget {
  background-color: var(--color-red);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 10px 10px var(--color-blue);
}

@media (max-width: 991px) {
  #container {
    margin: 40px;
  }

  #title {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
</style>
