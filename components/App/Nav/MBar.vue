<template>
  <div ref="mNav" class="w-full z-10 absolute bg-white px-4 sm:px-8 md:px-12 lg:px-28 py-8 text-neutral-800 flex flex-col items-center justify-between ">
    <div class="w-full items-center flex justify-between">
      <div class="w-fit">
        <NuxtLink class="flex items-center !no-underline" to="/#">
          <!-- <img class="w-20 pr-4" src="/LOGO.png" alt="Caspian Logo"> -->
          <span class="text-2xl text-primary-900 font-semibold">Caspian</span>
        </NuxtLink>
      </div>
      <div v-if="!isOpen" @click="toggleMenu" class="menu">
        <Icon name="material-symbols:segment-rounded" size="2.25em" />
      </div>
      <div v-else @click="toggleMenu" class="menu">
        <Icon name="material-symbols:close" size="2.25em" />
      </div>
    </div>
    <div v-if="isOpen" class="w-full text-base flex flex-col items-start justify-between text-left py-4 no-underline">
      <NuxtLink class="py-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900 " to="/#">Home</NuxtLink>
      <NuxtLink class="py-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/about">About</NuxtLink>
      <NuxtLink class="py-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/services">Services</NuxtLink>
      <NuxtLink class="py-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/projects">Projects</NuxtLink>
      <NuxtLink class="py-4 hover:underline hover:decoration-4 decoration-primary-900 underline-offset-[16px] hover:text-primary-900" to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const route = useRoute();
let isOpen = ref(false);

const [mNav] = useAutoAnimate()

watch(() => route.name, () => {
  isOpen.value = false
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
  @apply text-primary-900 underline decoration-4;
}
</style>