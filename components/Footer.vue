<template>
  <footer class="bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4">
  <!-- Column 1: Logo + Social -->
  <div class="mb-4 text-center text-md-start">
    <NuxtLink to="/">
      <img src="/logo-white.png" alt="Logo" style="height: 7em" class="mb-1" />
    </NuxtLink>
    <div class="d-flex gap-3 mt-3 justify-content-center justify-content-md-start social-icons">
      <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook fs-4 text-white"></i></a>
      <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram fs-4 text-white"></i></a>
      <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube fs-4 text-white"></i></a>
      <a href="mailto:info@sample.com"><i class="bi bi-envelope fs-4 text-white"></i></a>
    </div>
  </div>

  <!-- Column 2: Site Links -->
  <div class="mb-4 social-icons">
    <ul class="list-unstyled">
      <li class="mb-2"><NuxtLink to="/" class="text-white text-decoration-none">Home</NuxtLink></li>
      <li class="mb-2"><NuxtLink to="/about" class="text-white text-decoration-none">About Us</NuxtLink></li>
      <li class="mb-2"><NuxtLink to="/media-center" class="text-white text-decoration-none">Media Center</NuxtLink></li>
      <li class="mb-2"><NuxtLink to="/contact" class="text-white text-decoration-none">Contact Us</NuxtLink></li>
    </ul>
  </div>

  <!-- Column 3: Categories -->
  <div class="mb-4 social-icons">
    <ul class="list-unstyled">
      <li class="mb-2" v-for="category in categories" :key="category">
        <NuxtLink :to="`/category/${categoryToSlug(category)}`" class="text-white text-decoration-none">
          {{ formatCategory(category) }}
        </NuxtLink>
      </li>
    </ul>
  </div>

  <!-- Column 4: Contact Info -->
  <div class="mb-4 social-icons">
    <ul class="list-unstyled">
      <li class="mb-2">Contact Us</li>
      <li class="mb-2">+971 00 000 0000</li>
      <li class="mb-2">+971 0 000 0000</li>
      <li>info@sample.com</li>
    </ul>
  </div>
</div>
</div>

  </footer>
</template>

<script setup>
import { useCategories } from '~/composables/useCategories'
const { categories, categoryToSlug, formatCategory } = await useCategories()
</script>

<style>
.social-icons a i {
  transition: color 0.4s ease;
}
.social-icons a:hover i {
  color: #ffc107 !important;
}
</style>