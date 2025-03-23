<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-primary-600 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold">ShopSphere</a>

      <!-- Navigation Links -->
      <div class="font-semibold">
        <RouterLink to="/" class="block py-2 lg:py-0 px-4 lg:inline-block hover:text-gray-200"
          >Home</RouterLink
        >
        <RouterLink
          to="/products"
          class="block py-2 lg:py-0 px-4 lg:inline-block hover:text-gray-200"
          >products</RouterLink
        >
        <RouterLink
          to="/services"
          class="block py-2 lg:py-0 px-4 lg:inline-block hover:text-gray-200"
          >Services</RouterLink
        >
        <RouterLink to="#" class="block py-2 lg:py-0 px-4 lg:inline-block hover:text-gray-200"
          >Contact</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
