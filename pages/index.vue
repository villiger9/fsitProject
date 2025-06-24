<template>
  <!-- Hero Section -->
  <section
    class="py-5 text-center text-white"
    style="background-image: url('/jewelry-banner.jpg'); background-size: cover; background-position: center;"
  >
    <div class="bg-dark bg-opacity-50 p-5">
      <h2 class="display-5 fw-bold">Discover Elegant Jewelry</h2>
      <p class="lead">Handpicked pieces to elevate your style.</p>
      <button class="btn btn-outline-light btn-lg mt-3">Explore Jewelry</button>
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
    style="background-image: url('/urban-style.jpg'); background-size: cover; background-position: center;"
  >
    <div class="bg-dark bg-opacity-50 p-5">
      <h2 class="display-5 fw-bold">Urban Style</h2>
      <p class="lead">Streetwear meets elegance. Discover the latest trends.</p>
      <button class="btn btn-outline-light btn-lg mt-3">Shop the Look</button>
    </div>
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
                <button @click="addProduct(product)" class="btn btn-warning w-100 mt-2">
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

  <!-- Subscription Section -->
  <section class="py-5 text-center text-dark" style="background-color: #ffc107;">
    <div class="container">
      <h2 class="display-6 fw-bold mb-3">Join Our Membership</h2>
      <p class="lead mb-4">Get exclusive deals, new arrivals, and style tips directly to your inbox.</p>
      <form class="row justify-content-center g-2">
        <div class="col-12 col-md-6">
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Enter your email"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-dark btn-lg">Subscribe</button>
        </div>
      </form>
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
