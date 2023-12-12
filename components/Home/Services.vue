<template>
  <div class="block lg:grid grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-28 py-24">
    <div class="col-span-2 flex flex-col space-y-8">
      <NuxtLink class="inline-flex space-x-4 items-center text-base font-semibold cursor-pointer underline-offset-[16px] hover:underline text-primary-950" to="/services">
        <span>All Services</span>
        <Icon name="tabler:arrow-up-right" size="1.5em" />
      </NuxtLink>
      <h2 class="text-4xl md:text-6xl lg:text-8xl font-black text-primary-950">
        Caspian <br>
        Capabilities
      </h2>
      <hr class="!mt-12">
      <h3 class="text-2xl font-normal tracking-wide text-primary-950">Delivering Possibilities, On Time</h3>
      <p class="text-sm leading-6 text-slate-500">At Caspian, we are more than just a logistics company - we are the architects of seamless supply chains, the navigators of global trade, and the enablers of business growth. </p>

      <div class="block sm:flex flex-auto sm:space-x-4 text-xs sm:text-sm text-primary-900 no-underline">
        <div class="space-y-3">
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
        <div class="py-2 sm:py-0 space-y-3">
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
    <div class="col-span-1 py-12 lg:py-0 space-y-8">
      <div class="">
        <HelpersCounter :num="100" />
        <hr>
        <p class="text-base font-semibold text-primary-950 py-4">On Time Delivery</p>
      </div>
      <div class="">
        <HelpersCounter :num="99" />
        <hr>
        <p class="text-base font-semibold text-primary-950 py-4">Project Completion</p>
      </div>
      <div class="">
        <HelpersCounter :num="90" />
        <hr>
        <p class="text-base font-semibold text-primary-950 py-4">Global Coverage</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped> 

</style>