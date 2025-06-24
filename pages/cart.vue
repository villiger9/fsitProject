<template>
  <div class="container py-5">
    <h1>Your Cart</h1>
    <div v-if="cart.items.length === 0">
      <p>Your cart is empty.</p>
      <NuxtLink to="/" class="btn btn-primary">Go Shopping</NuxtLink>
    </div>

    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th class="text-center">Quantity</th>
            <th class="text-end">Price</th>
            <th class="text-end">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id">
            <td>
              <img :src="item.image" alt="" style="height: 50px; object-fit: contain;" />
              {{ item.title }}
            </td>
            <td class="text-center">
              <input
                type="number"
                min="1"
                v-model.number="item.quantity"
                @change="updateQuantity(item.id, item.quantity)"
                style="width: 60px;"
              />
            </td>
            <td class="text-end">${{ item.price.toFixed(2) }}</td>
            <td class="text-end">${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td class="text-end">
              <button @click="remove(item.id)" class="btn btn-sm btn-danger">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3" class="text-end">Total:</th>
            <th class="text-end">${{ cart.totalPrice.toFixed(2) }}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <button @click="clearCart" class="btn btn-outline-danger">Clear Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

function remove(id) {
  cart.removeFromCart(id)
}

function updateQuantity(id, qty) {
  cart.updateQuantity(id, qty)
}

function clearCart() {
  cart.clearCart()
}
</script>
