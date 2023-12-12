<template>
  <div class="w-full block lg:flex items-center justify-between py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16">
    <div class="py-12">
      <h2 class="text-4xl md:text-6xl xl:text-8xl font-bold text-primary-950">
        Caspian <br>
        Capabilities
      </h2>
      <hr class="!mt-12">
    </div>
    <div class="block sm:flex sm:space-x-8 text-base text-primary-900 no-underline">
      <div class="space-y-6">
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>International Freight Forwarding</span>
        </NuxtLink>
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>Customs Clearance Services</span>
        </NuxtLink>
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>Project Management</span>
        </NuxtLink>
      </div>
      <div class="py-6 sm:py-0 space-y-6">
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>Ship's Agency</span>
        </NuxtLink>
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>Warehousing and Distribution</span>
        </NuxtLink>
        <NuxtLink class="block" to="/services">
          <Icon name="material-symbols:add-rounded" size="1.5em" />
          <span>Airport Protocol Services</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>