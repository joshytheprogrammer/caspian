<template>
  <div>
    <AppNavStrip />
    <AppNavBar v-show="$device.isDesktopOrTablet" />
    <AppNavMBar v-show="$device.isMobile" />
    <NuxtPage />
  </div>
</template>

<script setup>

</script>
