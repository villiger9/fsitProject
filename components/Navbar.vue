<template>
  <header class="border-bottom">
    <!-- Top black bar (optional) -->
    <div class="bg-black py-1"></div>

    <!-- Main header section -->
    <div class="container py-3 d-flex flex-column flex-md-row align-items-center justify-content-between">
      <!-- Left: Logo -->
      <div class="text-center text-md-start mb-3 mb-md-0">
        <img src="/logo.png" alt="Logo" style="height: 7em" class="mb-1" />
      </div>

      <!-- Center: Category Navigation -->
      <nav class="d-flex gap-4 fw-bold mb-3 mb-md-0 justify-content-center">
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="`/category/${categoryToSlug(category)}`"
          class="text-dark text-uppercase text-decoration-none"
        >
          {{ formatCategory(category) }}
        </NuxtLink>
      </nav>

      <!-- Right: Top Menu + Icons -->
      <div class="text-end d-flex flex-column align-items-end gap-2">
        <!-- Top links -->
        <div class="d-flex gap-3 small">
          <NuxtLink to="/" class="text-dark text-decoration-none">Home</NuxtLink>
<NuxtLink to="/about" class="text-dark text-decoration-none">About Us</NuxtLink>
<NuxtLink to="/media-center" class="text-dark text-decoration-none">Media Center</NuxtLink>
<NuxtLink to="/contact" class="text-dark text-decoration-none">Contact Us</NuxtLink>

        </div>

        <!-- Search + Icons -->
        <div class="d-flex align-items-center gap-3">
          <div class="bg-light px-2 py-1 d-flex align-items-center">
            <input type="text" placeholder="Search" class="border-0 bg-transparent" />
            <i class="bi bi-search"></i>
          </div>
          <i class="bi bi-person fs-5"></i>
          <i class="bi bi-heart fs-5"></i>
          <i class="bi bi-bag fs-5"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { categories, categoryToSlug, formatCategory } = await useCategories()
</script>
