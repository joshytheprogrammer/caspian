<template>
  <div class="py-8 lg:py-16">
    <Carousel :items-to-show="1.9" :autoplay="3000" :wrap-around="true">
      <Slide v-for="item in imagesInSlide" :key="item">
        <img class="w-[714px] h-[210px] md:h-[352px] mx-8 transition-transform transform-gpu hover:scale-105 hover:brightness-75 duration-300 ease-in-out brightness-90" :src="item" alt="Slide">
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const imagesInSlide = ref([
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/earth-surrounded-by-cardboard-boxes-cargo-container-ship-flying-plan-car-van-truck-1.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration-copy.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/train-track-with-blue-container-top.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/transportation-logistics-copy.jpg"
]);
</script>

