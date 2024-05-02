<script setup></script>

<template>
  <div class="w-full h-auto">
    <img
      src="@/assets/img/dots1.png"
      alt="dots"
      class="absolute w-20 mt-40 left-0"
    />
    <img
      src="@/assets/img/dots2.png"
      alt="dots"
      class="absolute w-28 mt-[500px] right-10"
    />

    <div id="container" class="px-40 py-24">
      <div class="grid grid-cols-2">
        <div id="text" class="flex justify-center items-center px-32">
          <div>
            <div id="title" class="flex items-center mb-10">
              <img
                src="@/assets/img/point.png"
                alt="point"
                class="w-5 h-5 mr-5"
              />
              <div class="text-xl font-semibold">Visi Kanemura</div>
            </div>
            <div id="visi">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              quos provident atque autem consequatur illum! Neque iste iusto
              earum quos ipsa, dolorum aliquid tenetur ea pariatur repellendus
              vitae eius est. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed dignissimos officiis nulla rerum sunt aspernatur
              quisquam dolor excepturi libero! Accusantium ipsa enim voluptatum
              impedit eius laudantium eveniet corporis quia eaque! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Et eligendi sapiente
              illum esse. Quae cum minima nostrum doloribus dignissimos dolores,
              maxime nulla odit quas recusandae. Quam velit commodi officiis
              molestiae.
            </div>
          </div>
        </div>
        <div id="img" class="flex justify-center items-center">
          <div id="img-container" class="w-[25rem] h-[25rem]">
            <img
              src="@/assets/img/bg-auth.png"
              alt="foto-visi"
              class="w-full h-full object-cover rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  font-family: var(--font-fredoka);
}
</style>
