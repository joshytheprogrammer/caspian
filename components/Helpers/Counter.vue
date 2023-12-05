<template>
  <div class="test inline-flex">
    <count-up :autoplay="true" :end-val="end.num" :options="{ duration: 8, useEasing: true, enableScrollSpy:true }" ></count-up>%
  </div>
</template>

<script setup>
const end = defineProps(['num'])
import CountUp from 'vue-countup-v3'
</script>

<style>
.test {
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: #333;
  font-size: 86px;
  color: transparent;
}
</style>