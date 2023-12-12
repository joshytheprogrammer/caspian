<template>
  <div>
    <AppNavStrip />
    <AppNavBar v-show="$device.isDesktopOrTablet" />
    <AppNavMBar v-show="$device.isMobile" />
    <NuxtLayout>
      <NuxtPage :class="$device.isMobile ? 'mt-24' : 'mt-0'" />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>

</script>
