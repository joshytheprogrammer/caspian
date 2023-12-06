<template>
  <div class="block py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16">
    <div class="w-full flex justify-end">
      <NuxtLink class="inline-flex space-x-4 items-center text-lg font-semibold cursor-pointer underline-offset-[16px] underline text-primary-950" to="/about">
        <span>About us</span>
        <Icon name="tabler:arrow-up-right" size="1.5em" />
      </NuxtLink>
    </div>
    <div class="py-12">
      <h2 class="text-4xl md:text-6xl lg:text-8xl font-extrabold text-primary-950">
        Why Choose Us
      </h2>
      <hr class="mt-8">
    </div>
    <h3 class="text-xl md:text-2xl lg:text-3xl font-normal tracking-wider text-primary-900">We Bridge Distances, We Deliver Dreams</h3>
    <div class="block md:flex justify-between py-12">
      <div class="block lg:flex lg:space-x-8">
        <div class="flex flex-col underline space-y-2 text-lg font-semibold cursor-pointer text-primary-800 ">
          <span @click="changeShowing(1)" :class="showing != 1 ? 'opacity-40 hover:opacity-100': ''">History</span>
          <span @click="changeShowing(2)" :class="showing != 2 ? 'opacity-40 hover:opacity-100': ''">Mission</span>
          <span @click="changeShowing(3)" :class="showing != 3 ? 'opacity-40 hover:opacity-100': ''">Vision</span>
        </div>
        <p class="lg:w-[600px] py-4 text-base leading-8 text-slate-500">
          {{ currentAbout.content }}
        </p>
      </div>
      <div>
        <img width="440.15px" height="440.15px" :src="currentAbout.imgLink" alt="about">
      </div>
    </div>
  </div>
</template>

<script setup>
const about = ref([
  {
    id: 1,
    name: "History",
    imgLink: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701863236/caspian/aerial-view-cargo-ship-with-cargo-container-sea-650x650_nklwxv.jpg",
    content: "Caspian Integrated Logistics Limited traces its roots back over two decades, marking a journey that has positioned us as a global force in Freight Forwarding and Logistics. Specializing in Oil & Gas Logistics, our company has evolved to become a preferred partner for businesses seeking seamless supply chain solutions. Founded on a vision to redefine logistics in 2003, our commitment to innovation and excellence has fueled our growth. From a small team with a big idea, we've expanded into a global logistics leader, connecting businesses and markets across continents."
  },
  {
    id: 2,
    name: "Mission",
    imgLink: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701863242/caspian/transport-logistic-manager-engineer-checking-generative-ai-illustration-copy-1080x1080_k8skxi.jpg",
    content: "Our mission at Caspian Integrated Logistics Limited is to be the driving force behind global commerce. With over 20 years of experience, we are dedicated to providing innovative, reliable, and tailored logistics solutions that empower businesses to thrive in a dynamic world. Eradicating complexities, we aim to deliver freight forwarding services that enable our clients to achieve their goals. Upholding high compliance standards, our personnel undergo regular training to maintain industry best practices, ensuring that we work closely with our clients to meet their global supply chain needs at a reduced cost."
  },
  {
    id: 3,
    name: "Vision",
    imgLink: "https://res.cloudinary.com/dsgvwxygr/image/upload/v1701863243/caspian/transportation-logistics-container-cargo-ship-cargo-plane-1300x1300_y03qov.jpg",
    content: "At Caspian Integrated Logistics Limited, our vision is to revolutionize the logistics landscape by setting new standards of excellence and innovation. Envisioning a future where businesses seamlessly connect, borders dissolve, and possibilities are limitless, we leverage cutting-edge technology, sustainable practices, and a relentless pursuit of improvement. With a global network of partners and experienced employees, we have the capacity to move freight across towns, countries, and continents, ensuring end-to-end quality delivery. By continuously exceeding expectations and creating value for our clients, we aspire to be the trusted global leader shaping the future of logistics."
  }
]);

const showing = ref(1);

const currentAbout = computed(() => {
  return about.value.find(item => item.id === showing.value) || {};
});

function changeShowing(id) {
  showing.value = id
}


</script>

<style lang="css" scoped>

</style>