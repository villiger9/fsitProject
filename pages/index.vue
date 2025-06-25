<template>

<section
  class="position-relative"
  style="background-image: url('/electronics-banner.jpg'); background-size: cover; background-position: center; height: 450px;"
>
  <div
    class="position-absolute bottom-0 start-0 p-4"
    style="max-width: 300px;"
  >
    <h2 class="fw-bold text-dark mb-2">Explore Cutting-Edge Electronics</h2>
    <p class="text-dark small mb-3">
      Stay ahead with the latest gadgets, smart devices, and tech essentials designed to make life easier and more fun.
    </p>
    <NuxtLink
      to="/category/electronics"
      class="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2"
    >
      See More <i class="bi bi-arrow-right"></i>
    </NuxtLink>
  </div>
</section>

  <section
  class="position-relative"
  style="background-image: url('/jewelry-banner.jpg'); background-size: cover; background-position: center; height: 450px;"
>
  <div class="position-absolute bottom-0 start-0 m-4">
    <NuxtLink
      to="/category/jewelery"
      class="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
    >
      See More <i class="bi bi-arrow-right"></i>
    </NuxtLink>
  </div>
</section>

  <!-- Special Offers -->
  <section class="py-5 position-relative">
    <div class="container">
      <h2 class="mb-4 text-center">Special Offers</h2>
      <div
        ref="scrollContainer"
        class="d-flex overflow-hidden position-relative"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="product in specialOffers"
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
              <div
                class="card-body text-center d-flex flex-column justify-content-between"
                style="height: 180px;"
              >
                <div>
                  <h5 class="card-title text-truncate">{{ product.title }}</h5>
                  <p class="card-text text-muted">${{ product.price }}</p>
                </div>
                <button @click="addProduct(product)" class="btn btn-warning w-100 mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Scroll Arrows -->
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

  <!-- Urban Style Banner -->
  <section
    class="py-5 text-center text-white"
    style="background-image: url('/urban-style.jpg'); background-size: cover; background-position: center; height: 450px;"
  >
    
  </section>

  <!-- New Arrivals -->
  <section class="py-5 position-relative">
    <div class="container">
      <h2 class="mb-4 text-center">New Arrivals</h2>

      <div
        ref="scrollContainerNew"
        class="d-flex overflow-hidden position-relative"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="item in newArrivals"
          :key="item.id"
          class="flex-shrink-0 me-3"
          style="width: 250px;"
        >
          <NuxtLink :to="`/product/${item.id}`" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm" style="height: 380px;">
              <div
                class="d-flex justify-content-center align-items-center"
                style="height: 180px; overflow: hidden;"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  style="max-height: 100%; max-width: 100%; object-fit: contain;"
                />
              </div>
              <div
                class="card-body text-center d-flex flex-column justify-content-between"
                style="height: 180px;"
              >
                <div>
                  <h5 class="card-title text-truncate">{{ item.title }}</h5>
                  <p class="card-text text-muted">${{ item.price }}</p>
                </div>
                <button @click="addProduct(item)" class="btn btn-warning w-100 mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Scroll Buttons -->
        <button
          class="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
          @click="scrollLeftNew"
          style="z-index: 10;"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button
          class="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
          @click="scrollRightNew"
          style="z-index: 10;"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>

<!-- Membership Section -->
<section class="py-5 text-dark" style="background-color: #ffc107;">
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-md-auto mb-3 mb-md-0">
        <h2 class="display-6 fw-bold mb-0">BECOME A MEMBER & GET 15% OFF</h2>
      </div>
      <div class="col-md-auto">
        <NuxtLink
          to="/signup"
          class="btn btn-dark btn-lg d-inline-flex align-items-center gap-2"
        >
          SIGN UP FOR FREE <i class="bi bi-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

</template>

<script setup>
import { ref, computed } from 'vue'

const { data: allProducts } = await useFetch('https://fakestoreapi.com/products')

// Filter products priced below $50
const specialOffers = computed(() =>
  allProducts.value?.filter(product => product.price < 50) || []
)

// Filter products with rating >= 4
const newArrivals = computed(() =>
  allProducts.value?.filter(product => product.rating?.rate >= 4) || []
)

// Scroll logic for Special Offers
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

// Scroll logic for New Arrivals
const scrollContainerNew = ref(null)
const scrollRightNew = () => {
  if (scrollContainerNew.value) {
    const cardWidth = scrollContainerNew.value.querySelector('div')?.offsetWidth || 250
    scrollContainerNew.value.scrollLeft += cardWidth
  }
}
const scrollLeftNew = () => {
  if (scrollContainerNew.value) {
    const cardWidth = scrollContainerNew.value.querySelector('div')?.offsetWidth || 250
    scrollContainerNew.value.scrollLeft -= cardWidth
  }
}

import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

function addProduct(product) {
  cart.addToCart(product)
}
</script>
