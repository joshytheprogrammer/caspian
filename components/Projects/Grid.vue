<template>
  <div class="block mx-auto lg:grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 lg:px-28 py-24 transition-all">
    <figure class="w-full h-fit shadow-md mr-6 mb-6 inline-block border-2 border-solid border-primary-900 " v-for="item in grid" :key="item.id" ref="projects">
      <img class="w-full" :src="item.imgLink" :alt="'We delivered ' + item.title">
      <div class="flex justify-between items-center px-2">
        <h3 class="py-4 text-xl font-medium ">{{ item.title }}</h3>
        <NuxtLink class="cursor-pointer hover:underline" @click.prevent="changeID(item.id)">Read</NuxtLink>  
      </div>
      <transition-group name="fade" mode="out-in">
        <p v-if="(item.id === showingID)" class="px-2 py-4">{{ item.description }}</p>
      </transition-group>
      
    </figure>
  </div>
</template>

<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const grid = ref([
  {
    id: 1,
    title: 'From Houston',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/2020/10/Heavy-weight-drill-pipes-from-Houston-to-Port-Harcourt.-Customs-cleared-and-transferred-offshore..jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ratione asperiores dicta perferendis aliquam voluptate blanditiis facilis eos, eius tempore placeat, commodi laboriosam debitis nesciunt rem assumenda totam, deserunt sunt. Ad consequuntur id architecto quia.'
  },
  {
    id: 2,
    title: 'Clearing rig ',
    imgLink: 'https://caspianintegrated.com/wp-content/uploads/2020/10/Inward-clearance-of-Jack-up-Drilling-Rig-%E2%80%93-GROA-offshore-at-Oyot-Field..jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ratione asperiores dicta perferendis aliquam voluptate blanditiis facilis eos, eius tempore placeat, commodi laboriosam debitis nesciunt rem assumenda totam, deserunt sunt. Ad consequuntur id architecto quia.'
  },
]);

const showingID = ref();

const [projects] = useAutoAnimate()

function changeID(id) {
  showingID.value = id;
}

</script>

<style lang="scss" scoped>

</style>