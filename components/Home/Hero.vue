<template>
  <div>
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="item in array" :key="item">
        <div class="w-full text-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-32  bg-repeat bg-fixed h-fit md:h-[640px]" :style="`background-image: url('${item}')`">
          <div class="text-left pb-4">
            <h1 class="text-5xl lg:text-7xl font-bold">Building</h1>
            <h4 class="text-xl lg:text-4xl font-bold pt-2">4 a better Nigeria</h4>
          </div>
          <p class="py-4 leading-7 lg:pb-12 md:w-full lg:w-1/2 text-left">The United Akokwa Christian Elites Forum is a non denominational forum with a special assignment for our clan and our generation - Spreading the gospel, helping the needy, blessing the poor and putting smiles on the faces of our countrymen. We have been working at it for over <span class="font-semibold">2 DECADES</span> and we won't stop anytime soon. </p>
          <div class="flex pt-4 sm:pt-0">
            <NuxtLink to="/contact" class="block bg-primary-500 rounded-2xl px-4 sm:px-8 py-4 mr-4">Join us</NuxtLink>
            <NuxtLink to="/about" class="block hover:bg-primary-500 border-2 border-primary-500 rounded-2xl px-4 sm:px-8 py-4 mr-4">Read More</NuxtLink>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const array = [
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268228/caspian/transport-logistic-manager-engineer-checking-generative-ai-illustration_orhsru.jpg",
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268228/caspian/truck-with-white-trailer-that-says-scania-side_lh8gka.jpg",
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/global-logistic-airplane-parcel-box-concept-air-delivery-shipping-generative-ai_b2ig8x.jpg",
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/large-containers-with-cargo-delivered-by-cargo-train-railway-station_cctdhj.jpg",
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/futuristic-truck-with-neon-lights-night-roadcreated-with-generative-ai-technology_suzo2q.jpg",
  "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation_ro1ngs.jpg"
];
</script>

<style >

</style>