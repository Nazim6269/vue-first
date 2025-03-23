import { ref, watchEffect } from 'vue'

export function useFetchData() {
  const posts = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
      posts.value = await res.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return { loading, error, posts }
}
