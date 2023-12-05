<template>
  <div class="bg-[url('https://res.cloudinary.com/dsgvwxygr/image/upload/v1701787429/caspian/large-cargo-ship-with-containers-port-generative-ai_saksit.jpg')] bg-top bg-cover bg-primary-950 bg-no-repeat bg-fixed py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-24 h-[430px]">
    <Carousel :items-to-show="2.5" :autoplay="1000" :wrap-around="true">
      <Slide v-for="item in slide" :key="item">
        <div class="carousel__item text-white">{{ item }}</div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
const slide = ref(['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6', 'Brand 7', 'Brand 8']);
</script>

<style lang="scss" scoped>

</style>
