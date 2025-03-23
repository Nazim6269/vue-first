<script setup>
import { useFetchData } from '@/components/composables/useFetchData'
import { RouterLink } from 'vue-router'

const { loading, error, posts } = useFetchData()
</script>

<template>
  <section class="bg-slate-600 text-white py-20 px-6 text-center lg:text-left">
    <div v-if="loading">Loading...</div>
    <div v-if="error">Something went Wrong</div>
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
      <RouterLink
        v-for="item in posts"
        :key="item.id"
        :to="`/products/${item.id}`"
        class="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden"
      >
        <img class="w-full h-48 object-cover" src="/food.webp" alt="Product Image" />
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p class="text-gray-600 mt-2">
            {{ item.desc }}
          </p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl font-bold text-primary-600">$29.99</span>
            <button class="bg-primary-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
