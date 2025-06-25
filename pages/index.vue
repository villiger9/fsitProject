<template>
  <!-- Electronics Banner -->
  <section class="banner-section electronics-banner position-relative text-dark">
    <div class="banner-content p-4">
      <!-- Desktop text only -->
      <div class="desktop-text d-none d-md-block">
        <h2 class="fw-bold mb-2">Explore Cutting-Edge Electronics</h2>
        <p class="small mb-3">
          Stay ahead with the latest gadgets, smart devices, and tech essentials designed to make life easier and more fun.
        </p>
      </div>
      <!-- Button visible always -->
      <NuxtLink
        to="/category/electronics"
        class="btn btn-outline-dark btn-lg d-inline-flex align-items-center gap-2"
      >
        See More <i class="bi bi-arrow-right"></i>
      </NuxtLink>
    </div>
  </section>

  <!-- Jewelry Banner -->
  <section class="banner-section jewelry-banner position-relative text-white">
    <div class="banner-content p-4">
      <!-- Desktop text only -->
      <div class="desktop-text d-none d-md-block">
        <!-- <h2 class="fw-bold mb-2">Elegant Jewelry</h2> -->
        <p class="small mb-3">Handpicked pieces to elevate your everyday look.</p>
      </div>
      <!-- Button visible always -->
      <NuxtLink
        to="/category/jewelery"
        class="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2"
      >
        See More <i class="bi bi-arrow-right"></i>
      </NuxtLink>
    </div>
  </section>

  <!-- Special Offers -->
  <section class="py-5 position-relative">
    <div class="container position-relative">
      <h2 class="mb-4 text-center">Special Offers</h2>
      <button class="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" @click="scrollLeft">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button class="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" @click="scrollRight">
        <i class="bi bi-chevron-right"></i>
      </button>
      <div
        ref="scrollContainer"
        class="d-flex overflow-auto px-5"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="product in specialOffers"
          :key="product.id"
          class="flex-shrink-0 me-3 fade-in"
          style="width: 250px;"
        >
          <NuxtLink :to="`/product/${product.id}`" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm" style="height: 380px;">
              <div class="d-flex justify-content-center align-items-center" style="height: 180px; overflow: hidden;">
                <img :src="product.image" :alt="product.title" style="max-height: 100%; max-width: 100%; object-fit: contain;" />
              </div>
              <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 180px;">
                <div>
                  <h5 class="card-title text-truncate">{{ product.title }}</h5>
                  <p class="card-text text-muted">${{ product.price }}</p>
                </div>
                <button @click.prevent="addProduct(product)" class="btn btn-warning w-100 mt-2">Add to Cart</button>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Urban Style Banner -->
  <section class="urban-banner text-center text-white">
    <!-- Optionally add heading/text inside if needed -->
  </section>

  <!-- New Arrivals -->
  <section class="py-5 position-relative">
    <div class="container position-relative">
      <h2 class="mb-4 text-center">New Arrivals</h2>
      <button class="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" @click="scrollLeftNew">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button class="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" @click="scrollRightNew">
        <i class="bi bi-chevron-right"></i>
      </button>
      <div
        ref="scrollContainerNew"
        class="d-flex overflow-auto px-5"
        style="scroll-behavior: smooth;"
      >
        <div
          v-for="item in newArrivals"
          :key="item.id"
          class="flex-shrink-0 me-3 fade-in"
          style="width: 250px;"
        >
          <NuxtLink :to="`/product/${item.id}`" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm" style="height: 380px;">
              <div class="d-flex justify-content-center align-items-center" style="height: 180px; overflow: hidden;">
                <img :src="item.image" :alt="item.title" style="max-height: 100%; max-width: 100%; object-fit: contain;" />
              </div>
              <div class="card-body text-center d-flex flex-column justify-content-between" style="height: 180px;">
                <div>
                  <h5 class="card-title text-truncate">{{ item.title }}</h5>
                  <p class="card-text text-muted">${{ item.price }}</p>
                </div>
                <button @click.prevent="addProduct(item)" class="btn btn-warning w-100 mt-2">Add to Cart</button>
              </div>
            </div>
          </NuxtLink>
        </div>
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
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const { data: allProducts } = await useFetch('https://fakestoreapi.com/products')

const specialOffers = computed(() =>
  allProducts.value?.filter(product => product.price < 50) || []
)
const newArrivals = computed(() =>
  allProducts.value?.filter(product => product.rating?.rate >= 4) || []
)

const scrollContainer = ref(null)
const scrollRight = () => {
  const container = scrollContainer.value
  const cardWidth = container?.querySelector('div')?.offsetWidth || 250
  container.scrollLeft += cardWidth
}
const scrollLeft = () => {
  const container = scrollContainer.value
  const cardWidth = container?.querySelector('div')?.offsetWidth || 250
  container.scrollLeft -= cardWidth
}

const scrollContainerNew = ref(null)
const scrollRightNew = () => {
  const container = scrollContainerNew.value
  const cardWidth = container?.querySelector('div')?.offsetWidth || 250
  container.scrollLeft += cardWidth
}
const scrollLeftNew = () => {
  const container = scrollContainerNew.value
  const cardWidth = container?.querySelector('div')?.offsetWidth || 250
  container.scrollLeft -= cardWidth
}

const cart = useCartStore()
function addProduct(product) {
  cart.addToCart(product)
}

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }, { threshold: 0.1 })
  elements.forEach(el => observer.observe(el))
})
</script>

<style>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.show {
  opacity: 1;
  transform: none;
}
.scroll-wrapper {
  overflow-y
  : hidden;
}

/* Banner base styles */
.banner-section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
  display: flex;
  align-items: flex-end;
}

.electronics-banner {
  background-image: url('/electronics-banner.jpg');
  color: #000;
}

.jewelry-banner {
  background-image: url('/jewelry-banner.jpg');
  color: #fff;
}

.urban-banner {
  background-image: url('/urban-style.jpg');
  height: 450px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Banner content */
.banner-content {
  max-width: 300px;
  margin: 1rem;
}

/* Hide text on mobile but keep button */
@media (max-width: 768px) {
  .desktop-text {
    display: none !important;
  }

  /* Make banners responsive and keep images */
  .banner-section {
    height: auto;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    padding: 3rem 1rem 2rem;
    justify-content: center !important;
    text-align: center !important;
  }

  /* For urban banner, add some vertical padding */
  .urban-banner {
    padding: 4rem 1rem;
    height: auto;
  }

  .banner-content {
    max-width: 100%;
  }
}
</style>
