<template>
  <div class="py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16">
    <div class="flex gap-8" v-for="service in services" :key="service.id">
      <img width="440.15px" height="440.15px" :src="service.imgLink" loading="eager" :alt="'Service '+service.id">
      <div class="w-full">
        <div class="px-4 py-2" v-for="item in service.items">
          <div class="flex justify-between py-4 border-b border-solid border-primary-700" @click="changeShowing(item.id)">
            <span class="text-lg">{{ item.title }}</span>
            <Icon v-if="item.id != showing" name="material-symbols:add" size="1.4em" />
            <Icon v-else name="material-symbols:check-indeterminate-small" size="1.4em" />
          </div>
          <p v-show="item.id === showing" class=" py-4 text-base leading-8 text-slate-500">{{ item.description }}</p>
          {{ showing }} - {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 0,
    imgLink: "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai-1300x1097.jpg",
    items: [
      {
        id: 'q12we',
        title: 'Transportation Management',
        description: 'This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries.'
      },
      {
        id: 'q12wer',
        title: 'Warehousing and Distribution',
        description: 'Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times.'
      },
      {
        id: 'q12wee',
        title: 'Freight Forwarding',
        description: 'Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments.'
      },
    ]
  }
];

const showing = ref(null);


function changeShowing(id) {
  if(showing.value === id) {showing.value = null; return;}
  showing.value = id
}

</script>

<style lang="scss" scoped>

</style>