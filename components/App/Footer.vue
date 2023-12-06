<template>
  <div class="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-16 flex flex-col md:flex-row items-start justify-between">
    <div class="max-w-md">
      <NuxtLink class="flex items-center pb-4" to="/">
        <img class="w-30 pr-4" src="/LOGO.png" alt="UACEF Logo">
      </NuxtLink>
      <p class="py-8 text-sm leading-7 lg:pb-12 md:w-full">
        Caspian Integrated Logistics Limited is a global Freight Forwarding and Logistics Company with wide range of experience in the Oil & Gas Logistics. We provide freight forwarding, customs clearance, materials handling and ship Agency services.  

        With over 20 years of experience, our goal is to eradicate complexities and provide you with a freight forwarding service that enables your business thrive. 
      </p>
      <!-- <p class="py-1 text-sm leading-7">
        This website was designed and built by <a class="hover:underline hover:text-primary-700 font-medium" href="https://joshytheprogrammer.com">joshytheprogrammer</a>
      </p> -->
      <ul class="flex w-full pb-8">
        <li class="pr-4">
          <Icon name="cib:facebook" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:instagram" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:twitter" size="1.25em" />
        </li>
        <li class="pr-4">
          <Icon name="cib:pinterest" size="1.25em" />
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-between sm:px-4">
      <h3 class="text-3xl font-semibold pb-4 text-primary-700">Useful Links</h3>
      <ul class="py-8">
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-primary-700 font-medium" to="/">Home</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-primary-700 font-medium" to="/about">About us</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-primary-700 font-medium" to="/services">Services</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-primary-700 font-medium" to="/projects">Projects</NuxtLink>
        </li>
        <li class="pb-8">
          <NuxtLink class="hover:underline hover:text-primary-700 font-medium" to="/contact">Contact</NuxtLink>
        </li>
        <!-- <li class="pb-8">
          <a href="https://admin.uacef.org/" class="hover:underline hover:text-primary-700 font-medium" >Admin</a>
        </li> -->
      </ul>
    </div>
    <div class="flex flex-col justify-between">
      <h3 class="text-3xl font-semibold pb-4 text-primary-700">Contact us</h3>
      <ul class="py-8">
        <li class="pb-8 ">
          <Icon class="pr-1 text-primary-700" name="material-symbols:phone-in-talk" size="1.25em" />
          <span class="pr-4 w-80 ">+234 816 362 6641</span>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-primary-700"  name="material-symbols:mail-rounded" size="1.25em" />
          <a href="mailto:info@caspianintegrated.com " class="pr-4">info@caspianintegrated.com </a>
        </li>
        <li class="pb-8">
          <Icon class="pr-1 text-primary-700"  name="material-symbols:location-on" size="1.25em" />
          <span class="pr-4 w-80 block">17A Seinde Calisto Crescent, Off Charity Bus Stop, Oshodi / Apapa Expressway, Lagos.   </span>
        </li>
      </ul>
    </div>
  </div>
</template>
