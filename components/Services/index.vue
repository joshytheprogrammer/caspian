<template>
  <div class="py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16">
    <div class="block lg:flex gap-8 py-16" :class="service.id % 2 != 0 ? 'flex-row-reverse' : 'flex-row'" v-for="service in services" :key="service.id">
      <img class="py-4 h-[480px] lg:w-[640.15px] lg:h-[640.15px] " :src="service.imgLink" loading="eager" :alt="'Service '+service.id">
      <div class="w-full py-8" v-auto-animate>
        <div ref="serviceContainer" class="px-4 py-2" v-for="item in service.items" :key="item.id">
          <div class="flex justify-between py-8 border-b border-solid border-primary-700 cursor-pointer" @click="changeShowing(item.id)">
            <span class="text-lg">{{ item.title }}</span>
            <Icon v-if="item.id != showing" name="material-symbols:add" size="1.4em" />
            <Icon v-else name="material-symbols:check-indeterminate-small" size="1.4em" />
          </div>
          <p v-show="item.id === showing" class=" py-4 text-base leading-8 text-slate-500">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

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
  },
  {
    id: 1,
    imgLink: "https://themes.pixelwars.org/logistica/demo-01/wp-content/uploads/sites/2/2023/08/aerial-top-view-container-cargo-ship-with-contrail-ocean-ship-carrying-container.jpg",
    items: [
      {
        id: 'weqwe',
        title: 'Customs Brokerage',
        description: 'Customs brokers facilitate the clearance of goods through customs checkpoints, ensuring compliance with import and export regulations. They handle documentation, taxes, duties, and liaise with government agencies on behalf of clients.'
      },
      {
        id: 'ret43',
        title: 'Last-Mile Delivery',
        description: 'Last-mile delivery focuses on the final leg of the supply chain, delivering products from distribution centers to the end customers\' doorsteps. It\'s a critical service in e-commerce and requires efficient routing and timely delivery to ensure customer satisfaction.'
      },
      {
        id: 'vfr4d3',
        title: 'Reverse Logistics',
        description: 'Reverse logistics involves managing the return of products from customers to the manufacturer or retailer. This includes handling returns, repairs, refurbishing, recycling, or proper disposal of goods.'
      },
    ]
  },
];

const showing = ref(null);

function changeShowing(id) {
  if(showing.value === id) {showing.value = null; return;}
  showing.value = id
}

const [serviceContainer] = useAutoAnimate();

</script>

<style lang="scss" scoped>

</style>