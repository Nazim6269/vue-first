import { ref } from 'vue'

export function useFetchSingleItem(productId, products) {
  const loading = ref(true)
  const error = ref(null)
  const data = ref(null)

  try {
    data.value = products.find((p) => p.id === productId) || null
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }

  // console.log(product)
  return { error, loading, data }
}
