<template>
  <div>
    <AppNavStrip />
    <AppNavBar v-show="$device.isDesktopOrTablet" />
    <AppNavMBar v-show="$device.isMobile" />
    <NuxtLayout>
      <NuxtPage class="mt-24 md:mt-0" />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>

</script>
