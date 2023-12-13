<template>
  <div class="bg-gray-300 py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-24 block lg:flex justify-center gap-8">
    <div class="w-full h-fit lg:w-1/3 bg-white px-4 py-8 shadow-md">
      <div class="flex pb-8 text-lg items-center">
        <Icon name="lets-icons:package-search" size="2.5em" />
        <h2 class="text-4xl font-normal pl-2 ">Track</h2>
      </div>
      <form @submit.prevent="" class="">
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 ">Tracking number</label>
          <input type="text" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-primary-500 focus:border-primary-500 outline-primary-950">
        </div>
        <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Track</button>
      </form>
    </div>
    <div class="w-full bg-white lg:w-2/3 my-8 lg:my-0 px-4 py-8 shadow-md space-y-6">
      <div class="">
        <h2 class="text-4xl font-normal ">Package Details</h2>
      </div>
      <div>
        <p>Enter a valid tracking number...</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>