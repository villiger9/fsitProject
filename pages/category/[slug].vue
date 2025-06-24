<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-4 text-center text-uppercase">{{ formattedCategory }}</h2>

      <!-- Show loading indicator -->
      <div v-if="pending" class="text-center py-5">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!-- Show error message -->
      <div v-else-if="error" class="alert alert-danger text-center">
        Failed to load products. Please try again later.
      </div>

      <!-- Show products when loaded -->
      <div
        v-else
        ref="scrollContainer"
        class="d-flex overflow-hidden position-relative"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="flex-shrink-0 me-3"
          style="width: 250px;"
        >
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
            <div
              class="card-body text-center d-flex flex-column justify-content-between"
              style="height: 180px;"
            >
              <div>
                <h5 class="card-title text-truncate">{{ product.title }}</h5>
                <p class="card-text text-muted">${{ product.price }}</p>
              </div>
              <button @click="addProduct(product)" class="btn btn-warning w-100 mt-2">
                Add to Cart</button>
            </div>
          </div>
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
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categorySlug = route.params.slug

const { data: products, pending, error } = await useFetch(
  `https://fakestoreapi.com/products/category/${encodeURIComponent(categorySlug)}`
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

const formattedCategory = computed(() =>
  categorySlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
)
</script>
