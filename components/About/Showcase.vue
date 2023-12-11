<template>
  <div class=" py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16">
    <div class="">
      <h2 class="text-4xl md:text-6xl lg:text-8xl font-bold text-primary-950">
        Showcase
      </h2>
      <hr class="my-8">
      <h3 class="text-xl md:text-2xl lg:text-3xl font-normal tracking-wider text-primary-900">Where Reliability Meets Speed - Our Logistics Promise
      </h3>
    </div>
    <div class="block md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
      <figure class="col-span-1 mx-auto py-2 md:py-0" v-for="item in images">
        <img class="w-full h-full object-cover lg:hover:scale-105 transition-all ease-in-out duration-300" :src="item" alt="">
      </figure>
    </div>
  </div>
</template>

<script setup>
const images = [
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/top-viwe-transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/cargo-ship-carrying-containers-export-import-is-shown-global-world-service-freight.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/truck-with-white-trailer-that-says-scania-side.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative.jpg",
  "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/international-cargo-transportation-containers-by-sea-sea-huge-ship-with-containers-sea-mixed-media-concept-transport-logistics-delivery-business-globalization.jpg"
];
</script>

<style lang="scss" scoped>

</style>