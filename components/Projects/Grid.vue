<template>
  <div class="block mx-auto lg:grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full h-fit shadow-md mb-6 inline-block border border-solid border-primary-900 rounded-md" v-for="item in grid" :key="item.id" ref="projects">
      <img class="w-full rounded-t-md" :src="item.imgLink" :alt="'We delivered ' + item.title">
      <div class="flex justify-between items-center px-2">
        <h3 class="py-4 text-xl font-medium ">{{ item.title }}</h3>
        <div>
          <Icon v-show="showingID != item.id" name="material-symbols:fitbit-arrow-downward" size="1.4em"  @click.prevent="changeID(item.id)"/>
          <Icon v-show="showingID === item.id" name="material-symbols:fitbit-arrow-upward" size="1.4em" @click.prevent="changeID(item.id)"/>
        </div> 
      </div>
      <transition-group name="fade" mode="out-in">
        <p v-if="(item.id === showingID)" class="text-sm px-2 py-4 text-gray-400 leading-7">{{ item.description }}</p>
      </transition-group>
    </figure>
  </div>
</template>

<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const grid = ref([
  {
    id: 1,
    title: 'Heavy weight drill pipes',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/2020/10/Heavy-weight-drill-pipes-from-Houston-to-Port-Harcourt.-Customs-cleared-and-transferred-offshore..jpg',
    description: 'Caspian Integrated Logistics delivered beyond our expectations! Their expertise in Oil & Gas Logistics made the transportation of heavy-weight drill pipes from Houston to Port Harcourt a breeze. With precision in customs clearance and seamless offshore transfer, they\'ve proven to be our reliable logistics partner. Efficient, dedicated, and highly recommended!'
  },
  {
    id: 2,
    title: 'Clearing rig ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/2020/10/Inward-clearance-of-Jack-up-Drilling-Rig-%E2%80%93-GROA-offshore-at-Oyot-Field..jpg',
    description: 'Caspian Integrated Logistics excelled in the inward clearance of our Jack-up Drilling Rig at Oyot Field. Their proficiency in logistics and customs clearance was evident throughout the process. With seamless operations and attention to detail, Caspian Integrated Logistics proved to be a trusted partner in ensuring the smooth arrival and clearance of our valuable drilling rig. Highly recommended for their expertise and dedication to excellence.'
  },
  {
    id: 3,
    title: 'X & I of Gas Turbine ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Re-export-and-re-importation-of-Gas-turbine-on-repair-and-return_/3829117128.jpg',
    description: 'Caspian Integrated Logistics orchestrated a seamless X & I (Export and Import) operation for our Gas Turbine on repair and return. Their expertise in logistics and meticulous handling of the re-export and re-importation process demonstrated their commitment to excellence. The timely and efficient services provided by Caspian Integrated Logistics make them the go-to choice for anyone in need of reliable logistics solutions. Trust in their proficiency for a hassle-free experience in managing your critical assets.'
  },
  {
    id: 4,
    title: 'Delivery of OD Conductors ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Caspian-Integrated-carried-out-customs-clearance-and-delivery-of-36-OD-conductors-at-Onne-seaport_/3242729070.jpg',
    description: 'Caspian Integrated Logistics made the delivery of OD Conductors a breeze. Their expert team handled customs clearance and the seamless delivery of 36 OD conductors at Onne Seaport. The efficiency and precision displayed in this operation underscored Caspian Integrated\'s dedication to providing top-tier logistics solutions. Choose Caspian Integrated for your logistical needs, where reliability meets excellence.'
  },
  {
    id: 5,
    title: 'Drill pipes from Brawal yard ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Caspian-Integrated-loading-out-drill-pipes-from-Brawal-yard-Onne-to-Offshore_/2356212633.jpg',
    description: 'Caspian Integrated Logistics, your trusted partner in logistics, excelled in the loading out of drill pipes from Brawal yard at Onne to offshore destinations. The seamless and efficient operation showcased their commitment to precision and excellence. With Caspian Integrated, you can rely on their expertise to ensure the smooth transportation of vital assets, making them the go-to choice for all your logistical needs.'
  },
  {
    id: 6,
    title: 'Ship agency services ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Ship-agency-services-for-offshore-supply-ships_/1232390271.jpg',
    description: 'Experience unparalleled Ship Agency Services with Caspian Integrated Logistics. Their commitment to excellence shines through in every aspect of offshore supply ship services. The expert team at Caspian Integrated ensures smooth and reliable ship agency operations, making them the preferred choice for those seeking top-tier logistical solutions. Trust in Caspian Integrated for seamless and efficient ship agency services that set the standard for excellence in the industry.'
  },
  {
    id: 7,
    title: 'Delivery of gas pressure ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Clearance-and-delivery-of-Gas-pressure-reducing-and-metering-skid-PRMS/848934399.jpg',
    description: 'Caspian Integrated Logistics achieved excellence in the delivery of gas pressure reducing and metering skid (PRMS). Their meticulous clearance and delivery process showcased their proficiency in managing critical equipment. Caspian Integrated stands as a reliable partner for those seeking precision and efficiency in the transportation of essential assets. Trust in their expertise for seamless logistics solutions that prioritize the safe and timely delivery of your valuable cargo.'
  },
  {
    id: 8,
    title: 'Re-exportation of Jack up rigs ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/cache/2020/10/Outward-clearance-and-re-exportation-of-Jack-up-Rigs-%E2%80%93-GROA-GERD_/4118498086.jpg',
    description: 'Caspian Integrated Logistics excels in the re-exportation of Jack-up Rigs, demonstrating their expertise in outward clearance and efficient logistics operations. The seamless handling and attention to detail exhibited during this process underscore Caspian Integrated\'s commitment to excellence. For those in need of reliable and expert logistics solutions, trust in Caspian Integrated to navigate the complexities of re-exporting Jack-up Rigs with precision and reliability.'
  },
]);

const showingID = ref();

const [projects] = useAutoAnimate()

function changeID(id) {
  showingID.value = (showingID.value == id) ? null : id;
}


</script>

<style lang="scss" scoped>

</style>