<template>
  <div class="grid grid-cols-2 gap-8 justify-between py-8 px-4 sm:px-8 md:px-12 lg:px-28 lg:py-24">
    <div class="col-span-1">
      <div class="py-8">
        <h2 class="text-4xl md:text-6xl lg:text-8xl font-extrabold text-primary-950">
          Let's Talk
        </h2>
        <hr class="mt-4">
      </div>
      <h3 class="text-lg md:text-xl font-normal tracking-wider text-primary-900">Got a project on your mind? Let's discuss about the details.</h3>
      <div class="py-12 space-y-4 text-primary-900 font-bold">
        <h4 class="text-xl">Call us</h4>
        <span class="block text-2xl">+234 816 362 6641</span>
      </div>
    </div>
    <div class="w-full col-span-1">
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@caspian.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>