<template>
  <section class="py-5">
    <div class="container" v-if="product">
      <div class="row">
        <!-- Product image -->
        <div class="col-md-6">
          <img :src="product.image" :alt="product.title" class="img-fluid" />
        </div>

        <!-- Product details -->
        <div class="col-md-6">
          <h1>{{ product.title }}</h1>
          <p class="text-muted">{{ product.category }}</p>
          <h3 class="text-warning">${{ product.price }}</h3>
          <p>{{ product.description }}</p>

          <button @click="addProduct(product)" class="btn btn-warning w-100 mt-2">
            Add to Cart</button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id

const { data: product, error, pending } = await useFetch(`https://fakestoreapi.com/products/${productId}`)
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

function addProduct(product) {
  cart.addToCart(product)
}
</script>
