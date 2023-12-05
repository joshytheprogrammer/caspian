<template>
  <div>
    <div class="test inline-flex">
      <count-up class=" " :end-val="100" :options="{ duration: 8, useEasing: true, enableScrollSpy:true }" ></count-up>%
    </div>
  </div>
</template>

<script setup>
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