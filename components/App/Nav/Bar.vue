<template>
  <div class="w-full bg-white px-8 md:px-12 lg:px-28 py-8  text-neutral-800 flex items-center justify-between">
    <div class="w-fit" >
      <a href="/" class="flex items-center bg-white cursor-pointer text-primary-700" >
        <img class="w-20 pr-4" src="https://res.cloudinary.com/dsgvwxygr/image/upload/v1702373816/caspian/LOGO_iuelih.png" alt="Caspian Logo">
        <span class="text-4xl text-primary-700 font-bold">Caspian</span>
      </a>
    </div>
    <div class="text-base font-medium no-underline">
      <NuxtLink href="/" class="py-8 px-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900 ">Home</NuxtLink>
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