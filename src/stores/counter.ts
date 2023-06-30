import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

export default useCounterStore
