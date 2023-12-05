<template>
  <Carousel  :wrap-around="true">
    <Slide v-for="item in array" :key="item">
      <div class="w-full text-white py-8 md:py-16 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-32 bg-repeat bg-fixed h-[580px] lg:h-[640px] flex flex-col items-start justify-center" :style="`background-image: url('${item.imgLink}')`">
        <div class="text-left w-fit space-y-8 max-w-screen-sm bg-[rgba(0,0,0,.6)] px-4 py-8 leading-7"  v-motion-slide-left >
          <p class="text-base font-medium uppercase">{{ item.subtitle }}</p>
          <h2 class="text-xl lg:text-5xl font-bold uppercase">{{ item.heading }}</h2>
          <p>{{ item.description }}</p>
          <NuxtLink to="/about" class="block w-fit bg-gradient-to-r from-primary-700 to-primary-900 rounded-none px-4 sm:px-8 py-4 mr-4">Learn more</NuxtLink>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
const array = [
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268228/caspian/transport-logistic-manager-engineer-checking-generative-ai-illustration_orhsru.jpg',
    subtitle: 'YOUR PREFERRED LOGISTICS PARTNER',
    heading: 'Global Logistics Expertise',
    description: 'Providing innovative supply chain solutions, freight forwarding, customs clearance, materials handling, and ship agency services.'
  },
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268228/caspian/truck-with-white-trailer-that-says-scania-side_lh8gka.jpg',
    subtitle: 'Efficient Road Freight Services',
    heading: 'International and Local Transport',
    description: 'Transporting cargo across West Africa, Cameroun, the United States, and accessible European countries through comprehensive road haulage services.'
  },
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/global-logistic-airplane-parcel-box-concept-air-delivery-shipping-generative-ai_b2ig8x.jpg',
    subtitle: 'Global Transport Network',
    heading: 'Air, Sea, and Land Shipments',
    description: 'Handling shipments worldwide by air, sea, or land, maximizing carrier options to meet specific needs and schedules.'
  },
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/large-containers-with-cargo-delivered-by-cargo-train-railway-station_cctdhj.jpg',
    subtitle: 'Specialized Freight Services',
    heading: 'Customs Clearance Expertise',
    description: 'Ensuring seamless and timely clearance of goods at ports with expertise in customs brokerage, compliance, and regulatory policies.'
  },
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/futuristic-truck-with-neon-lights-night-roadcreated-with-generative-ai-technology_suzo2q.jpg',
    subtitle: 'Tailored Industrial Logistics Solutions',
    heading: 'Bespoke Project Logistics',
    description: 'Offering bespoke logistics solutions in various industries, including telecommunications and construction, with a focus on project management.'
  },
  {
    imgLink: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1701268227/caspian/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation_ro1ngs.jpg',
    subtitle: 'Registered Ship\'s Agency',
    heading: 'Comprehensive Maritime Services',
    description: 'As a registered shipping agent and service boat operator, we provide vessels and service boats with greenlights, permits, and clearances.'
  }
];
</script>

<style >
/* .carousel__prev,
.carousel__next {
  color: white;
  box-sizing: content-box;
  border: 5px solid white;

  &:hover {
    color: white;
  }
} */
</style>