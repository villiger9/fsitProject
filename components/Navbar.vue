<template>
  <header class="border-bottom">
    <div class="bg-black py-1"></div>

    <div class="container py-3">
      <div class="d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="me-3">
          <img src="/logo.png" alt="Logo" style="height: 5em;" />
        </NuxtLink>

        <!-- Toggler Buttons for Mobile -->
        <div class="d-md-none d-flex gap-2">
          <button
            class="btn btn-outline-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#siteLinks"
            @click="closeOthers('siteLinks')"
          >
            <i class="bi bi-list"></i> Links
          </button>
          <button
            class="btn btn-outline-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categories"
            @click="closeOthers('categories')"
          >
            <i class="bi bi-grid"></i> Categories
          </button>
        </div>

        <!-- Desktop Search + Icons -->
        <div class="d-none d-md-flex align-items-center gap-3 social-icons">
          <div class="bg-light px-2 py-1 d-flex align-items-center">
            <input type="text" placeholder="Search" class="border-0 bg-transparent" />
            <i class="bi bi-search"></i>
          </div>
          <i class="bi bi-person fs-5"></i>
          <i class="bi bi-heart fs-5"></i>
          <NuxtLink to="/cart" class="text-dark text-decoration-none position-relative">
            <i class="bi bi-bag fs-5"></i>
            <span
              v-if="cart.totalItems"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style="font-size: 0.6rem;"
            >
              {{ cart.totalItems }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Desktop Categories + Links Row -->
      <div class="d-none d-md-flex justify-content-between align-items-center mt-3 social-icons">
        <nav class="d-flex gap-4 fw-bold">
          <NuxtLink
            v-for="category in categories"
            :key="category"
            :to="`/category/${categoryToSlug(category)}`"
            class="text-dark text-uppercase text-decoration-none"
          >
            {{ formatCategory(category) }}
          </NuxtLink>
        </nav>

        <div class="d-flex gap-3 small">
          <NuxtLink to="/" class="text-dark text-decoration-none">Home</NuxtLink>
          <NuxtLink to="/about" class="text-dark text-decoration-none">About Us</NuxtLink>
          <NuxtLink to="/media-center" class="text-dark text-decoration-none">Media Center</NuxtLink>
          <NuxtLink to="/contact" class="text-dark text-decoration-none">Contact Us</NuxtLink>
        </div>
      </div>

      <!-- Mobile Collapse: Site Links -->
<div class="collapse d-md-none mt-3" id="siteLinks">
  <div class="d-flex flex-column gap-2 text-uppercase fs-6">
    <NuxtLink to="/" class="text-dark text-decoration-none">Home</NuxtLink>
    <NuxtLink to="/about" class="text-dark text-decoration-none">About Us</NuxtLink>
    <NuxtLink to="/media-center" class="text-dark text-decoration-none">Media Center</NuxtLink>
    <NuxtLink to="/contact" class="text-dark text-decoration-none">Contact Us</NuxtLink>
  </div>
</div>

<!-- Mobile Collapse: Categories -->
<div class="collapse d-md-none mt-3" id="categories">
  <div class="d-flex flex-column gap-2 text-uppercase fs-6">
    <NuxtLink
      v-for="category in categories"
      :key="category"
      :to="`/category/${categoryToSlug(category)}`"
      class="text-dark text-decoration-none"
    >
      {{ formatCategory(category) }}
    </NuxtLink>
  </div>
</div>

    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const { categories, categoryToSlug, formatCategory } = await useCategories()

// Collapse toggle logic to ensure only one is open at a time
function closeOthers(activeId) {
  const ids = ['siteLinks', 'categories']
  ids.forEach(id => {
    if (id !== activeId) {
      const el = document.getElementById(id)
      if (el?.classList.contains('show')) {
        const collapse = bootstrap.Collapse.getInstance(el)
        collapse?.hide()
      }
    }
  })
}
</script>
