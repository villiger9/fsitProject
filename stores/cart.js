import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // each item: { id, title, price, quantity, image }
  }),

  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item && quantity > 0) {
        item.quantity = quantity
      } else if (item && quantity <= 0) {
        this.removeFromCart(productId)
      }
    },

    clearCart() {
      this.items = []
    },
  }
})
