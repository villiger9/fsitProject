<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center text-capitalize">{{ categoryName }}</h2>

    <!-- Scrollable container -->
    <div
      ref="scrollContainer"
      class="d-flex overflow-hidden position-relative"
      style="scroll-behavior: smooth;"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="flex-shrink-0 me-3"
        style="width: 250px;"
      >
        <NuxtLink :to="`/product/${product.id}`" class="text-decoration-none text-dark">
          <div class="card h-100 shadow-sm" style="height: 380px;">
            <div
              class="d-flex justify-content-center align-items-center"
              style="height: 180px; overflow: hidden;"
            >
              <img
                :src="product.image"
                :alt="product.title"
                style="max-height: 100%; max-width: 100%; object-fit: contain;"
              />
            </div>
            <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 180px;">
              <div>
                <h5 class="card-title text-truncate">{{ product.title }}</h5>
                <p class="text-muted">${{ product.price }}</p>
              </div>
              <!-- Optional: You can keep or remove the button if the whole card is clickable -->
              <button class="btn btn-warning w-100 mt-2" @click.stop.prevent>View Details</button>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Scroll Buttons -->
      <button
        class="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
        @click="scrollLeft"
        style="z-index: 10;"
      >
        <i class="bi bi-chevron-left"></i>
      </button>
      <button
        class="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
        @click="scrollRight"
        style="z-index: 10;"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryName = route.params.name

const { data: products } = await useFetch('https://fakestoreapi.com/products')

const filteredProducts = computed(() =>
  products.value?.filter(product => product.category === categoryName) || []
)

const scrollContainer = ref(null)

const scrollRight = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.querySelector('div')?.offsetWidth || 250
    scrollContainer.value.scrollLeft += cardWidth
  }
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.querySelector('div')?.offsetWidth || 250
    scrollContainer.value.scrollLeft -= cardWidth
  }
}
</script>
