<script setup></script>

<template>
  <section class="bg-gray-900 text-white py-20 px-6 text-center lg:text-left">
    <div class="container mx-auto flex flex-col lg:flex-row items-center">
      <!-- Text Content -->
      <div class="lg:w-1/2">
        <h1 class="text-4xl lg:text-5xl font-bold mb-4">Elevate Your Shopping Experience</h1>
        <p class="text-lg text-gray-300 mb-6">
          Discover the latest trends and unbeatable deals. Shop now and enjoy exclusive discounts.
        </p>
        <div class="space-x-4">
          <button class="bg-primary-600 text-white px-6 py-3 rounded-lg text-lg">Shop Now</button>
          <button
            class="border border-gray-400 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 text-lg"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img class="w-full max-w-md lg:max-w-lg" src="/food.webp" alt="Hero Image" />
      </div>
    </div>
  </section>
</template>
