<template>
  <footer class="bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">
        <!-- Left: Logo and Social -->
        <div class="col-md-4 mb-4 text-center text-md-start">
          <img src="/logo-white.png" alt="Logo" style="height: 7em" />
          <div class="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
            <i class="bi bi-facebook fs-4"></i>
            <i class="bi bi-instagram fs-4"></i>
            <i class="bi bi-youtube fs-4"></i>
            <i class="bi bi-envelope fs-4"></i>
          </div>
        </div>

        <!-- Middle: Info Links -->
        <div class="col-md-4 mb-4">
          <h6>Home</h6>
          <ul class="list-unstyled">
            <li><NuxtLink to="/" class="text-white text-decoration-none">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-white text-decoration-none">About Us</NuxtLink></li>
            <li><NuxtLink to="/media-center" class="text-white text-decoration-none">Media Center</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-white text-decoration-none">Contact Us</NuxtLink></li>
          </ul>
        </div>

        <!-- Right: Categories and Contact -->
        <div class="col-md-4 mb-4">
          <h6>Categories</h6>
          <ul class="list-unstyled">
            <li v-for="category in categories" :key="category">
              <NuxtLink
                :to="`/category/${categoryToSlug(category)}`"
                class="text-white text-decoration-none"
              >
                {{ formatCategory(category) }}
              </NuxtLink>
            </li>
          </ul>

          <h6 class="mt-3">Contact us</h6>
          <p class="mb-0">+971 00 000 0000</p>
          <p class="mb-0">+971 0 000 0000</p>
          <p>info@sample.com</p>
        </div>
      </div>

      <hr class="border-light" />
      <p class="text-center mb-0">&copy; Developer Test 2024. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { useCategories } from '~/composables/useCategories'

const { categories, categoryToSlug, formatCategory } = await useCategories()
</script>

