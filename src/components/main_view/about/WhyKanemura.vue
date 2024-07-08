<script setup></script>

<template>
  <div id="container" class="px-20 py-14">
    <div id="title" class="font-semibold text-center text-xl mb-16">
      Why You Should Choose Kanemura?
    </div>

    <div id="list" class="flex item-center justify-center">
      <div>
        <div class="product-grid gap-32">
          <div
            id="card"
            class="px-20 py-10 bg-[var(--color-red)] text-[var(--color-cream)] text-center uppercase font-semibold tracking-wider rounded-md"
          >
            Best Quality Food
          </div>
          <div
            id="card"
            class="px-20 py-10 bg-[var(--color-red)] text-[var(--color-cream)] text-center uppercase font-semibold tracking-wider rounded-md"
          >
            At The Best Price
          </div>
          <div
            id="card"
            class="px-20 py-10 bg-[var(--color-red)] text-[var(--color-cream)] text-center uppercase font-semibold tracking-wider rounded-md"
          >
            Great Service
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#card {
  box-shadow: 10px 10px var(--color-blue);
}

.product-grid {
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 911px) {
  #container {
    padding: 40px;
  }

  #title {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .product-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }
  #card {
    padding: 20px 40px;
    font-size: 14px;
  }
}
</style>
