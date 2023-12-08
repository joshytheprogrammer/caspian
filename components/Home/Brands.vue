<template>
  <div class="bg-[url('https://res.cloudinary.com/dsgvwxygr/image/upload/v1701787429/caspian/large-cargo-ship-with-containers-port-generative-ai_saksit.jpg')] bg-top bg-cover bg-primary-950 bg-no-repeat bg-fixed h-[240px] md:h-[430px] flex flex-col justify-end w-full">
    <div class="bg-[rgba(0,0,0,.6)]">
      <Carousel :items-to-show="3.5" :autoplay="1000" :wrap-around="true">
        <Slide v-for="item in slide" :key="item">
          <div class="carousel__item text-white">
            <div class="">
              <span class="brand text-xl md:text-4xl lg:text-8xl">{{ item }}</span>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<!--  -->
<script setup>
const slide = ref(['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6', 'Brand 7', 'Brand 8']);
</script>

<style lang="css" scoped>
.brand {
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: #cce7af;
  color: transparent;
}

</style>
