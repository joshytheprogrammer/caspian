<template>
  <div class="py-8 lg:py-16">
    <Carousel :items-to-show="1.9" :autoplay="3000" :wrap-around="true">
      <Slide v-for="item in imagesInSlide" :key="item">
        <div >
          <img style="width: 732.87px; height: 359.04px; object-fit: cover;" class="px-8" :src="item" alt="Slide">
        </div>
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

<style  scoped>
.carousel__prev,
.carousel__next {
  color: white;
  
}
</style>