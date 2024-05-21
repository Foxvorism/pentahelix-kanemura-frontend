<script setup></script>

<template>
  <div id="container" class="px-20 py-14">
    <div id="title" class="font-semibold text-center text-xl mb-16">
      Why You Should Choose Kanemura?
    </div>

    <div class="flex item-center justify-center">
      <div>
        <div class="grid grid-cols-3 gap-32">
          <div id="card">Best Quality Food</div>
          <div id="card">At The Best Price</div>
          <div id="card">Great Service</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-cream);
  background-color: var(--color-red);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 8px;
  box-shadow: 10px 10px var(--color-blue);
}
</style>
