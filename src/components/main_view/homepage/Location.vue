<script setup></script>

<template>
  <div id="container" class="mx-20 mt-20">
    <div
      id="title"
      class="text-center text-xl mb-10 text-[var(--color-blue)] font-semibold z-[2]"
    >
      Our Location
    </div>

    <div id="maps" class="px-20">
      <div id="maps-container" class="p-2 bg-[var(--color-red)] rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.463538783382!2d106.80322441093227!3d-6.589161193376972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5af1c7ba225%3A0xcef3fc2e8b59e4c6!2sKanemura%20Japanese%20Food!5e0!3m2!1sen!2sid!4v1714890654172!5m2!1sen!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-[50vh] rounded-lg"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
#maps-container {
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

  #maps {
    padding: 0;
  }
}
</style>
