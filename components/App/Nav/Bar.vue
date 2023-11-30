<template>
  <div class="w-full bg-white px-8 md:px-12 lg:px-28 py-8  text-neutral-800 flex items-center justify-between">
    <div class="w-fit" >
      <NuxtLink class="flex items-center bg-white cursor-pointer text-primary-700" @click.prevent="$router.push('/')" >
        <!-- <img class="w-36 pr-4" src="/LOGO.png" alt="Caspian Logo"> -->
        <span class="text-4xl text-primary-700 font-bold">Caspian</span>
      </NuxtLink>
    </div>
    <div class="text-base font-medium no-underline">
      <NuxtLink class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900 " to="/#">Home</NuxtLink>
      <NuxtLink class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/about">About</NuxtLink>
      <NuxtLink class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/services">Services</NuxtLink>
      <NuxtLink class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/projects">Projects</NuxtLink>
      <NuxtLink class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply text-white bg-primary-700 hover:bg-none hover:no-underline;
}
</style>