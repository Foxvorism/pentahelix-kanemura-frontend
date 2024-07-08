<script setup></script>

<template>
  <div
    id="container1"
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
      <div id="title" class="text-8xl mb-5">Kanemura</div>
      <div id="subtitle" class="grid grid-cols-2 font-semibold">
        <div id="sub1" class="text-left tracking-widest text-xl">
          Japanese food
        </div>
        <div id="sub2" class="text-right tracking-widest text-xl">カネムラ</div>
      </div>
    </div>
  </div>

  <div id="discover" class="my-10 mx-20 text-lg font-semibold">
    <div id="dis2">Discover Our Authentic</div>
    <div id="dis2">Japanese Restaurant</div>
  </div>

  <div id="container2" class="h-[65vh]">
    <div id="gradient" class="h-[65vh]">
      <div id="text" class="flex items-center mx-20 h-[65vh] text-6xl">
        <div>
          <div>About</div>
          <div>Us</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title,
#sub2,
#text {
  font-family: var(--font-japanese2020);
}

#sub1 {
  font-family: var(--font-fredoka);
}

#container2 {
  background-image: url(@/assets/img/bg-auth.png);
  background-size: cover;
  background-position: center;
}

#gradient {
  background-image: linear-gradient(
    to right,
    rgba(255, 247, 227, 1),
    rgba(255, 247, 227, 1),
    rgba(255, 247, 227, 0.3),
    rgba(255, 247, 227, 0.2),
    rgba(255, 247, 227, 0.1),
    rgba(255, 247, 227, 0)
  );
}

@media (max-width: 911px) {
  #container1 {
    height: 25vh;
  }

  #hero2 {
    top: 180px;
  }

  #hero3 {
    top: 60px;
    right: -30px;
  }

  #title {
    font-size: 50px;
    margin-bottom: 0;
  }

  #subtitle #sub1,
  #subtitle #sub2 {
    font-size: 17px;
  }

  #discover {
    font-size: 16px;
    text-align: center;
    margin: 20px;
  }

  #container2,
  #gradient,
  #container2 #text {
    height: 20vh;
  }

  #gradient {
    background-image: linear-gradient(
      to right,
      rgba(255, 247, 227, 0.55),
      rgba(255, 247, 227, 0.55)
    );
  }

  #container2 #text {
    justify-content: center;
  }

  #container2 #text div {
    display: flex;
    gap: 10px;
    font-size: 30px;
  }
}
</style>
