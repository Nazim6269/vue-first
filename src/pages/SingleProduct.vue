<script setup>
import { useFetchSingleItem } from '@/components/composables/useFetchSingleItem'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const productList = [
  { id: '1', name: 'Test One', desc: 'This is desc for one', price: 29.99, image: '/food.webp' },
  { id: '2', name: 'Test Two', desc: 'This is desc for two', price: 39.99, image: '/food.webp' },
  {
    id: '3',
    name: 'Test Three',
    desc: 'This is desc for three',
    price: 49.99,
    image: '/food.webp',
  },
]

const router = useRouter()
const route = useRoute()
const loading = ref(true)
const product = ref(null)

watch(
  () => route.params.id,
  (newId) => {
    const result = useFetchSingleItem(newId, productList)
    product.value = result.data.value
    loading.value = result.loading.value
  },
  { immediate: true },
)
</script>

<template>
  <div class="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
    <!-- Loading State -->
    <div v-if="loading" class="text-center">
      <p class="text-gray-600">Loading product details...</p>
    </div>

    <!-- Product Details -->
    <div v-else-if="true">
      <img :src="product.image" alt="Product Image" class="w-full h-60 object-cover rounded-lg" />
      <h1 class="text-3xl font-bold mt-4 text-primary-600">{{ product.name }}</h1>
      <p class="text-gray-700 mt-2">{{ product.desc }}</p>
      <p class="text-xl font-semibold text-green-600 mt-3">${{ product.price }}</p>

      <button @click="router.push('/')" class="mt-6 bg-primary-600 text-white px-5 py-2 rounded-lg">
        ← Back to Shop
      </button>
    </div>

    <!-- Not Found State -->
    <div v-else class="text-center text-red-500">
      <p>Product not found.</p>
    </div>
  </div>
</template>
