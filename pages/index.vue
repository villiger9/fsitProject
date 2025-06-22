<template>



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

<section class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Special Offers</h2>
    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="item in specialOffers"
        :key="item.id"
      >
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top" :alt="item.name">
          <div class="card-body text-center">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-muted">{{ item.price }}</p>
            <button class="btn btn-warning w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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

<section class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center">New Arrivals</h2>
    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="item in newArrivals"
        :key="item.id"
      >
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top" :alt="item.name">
          <div class="card-body text-center">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-muted">{{ item.price }}</p>
            <button class="btn btn-warning w-100">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
const specialOffers = [
  { id: 1, name: 'Bag', price: '$49.99', image: '/special-offer-1.jpg' },
  { id: 2, name: 'Headphones', price: '$29.99', image: '/special-offer-2.jpg' },
  { id: 3, name: 'Necklace', price: '$39.99', image: '/special-offer-3.jpg' },
  { id: 4, name: 'Kitchenset', price: '$219.99', image: '/special-offer-4.jpg' }
]
const newArrivals = [
  { id: 1, name: 'Shoes', price: '$59.99', image: '/new-arrival-1.png' },
  { id: 2, name: 'Sneakers', price: '$79.99', image: '/new-arrival-2.png' },
  { id: 3, name: 'T shirt', price: '$39.99', image: '/new-arrival-3.png' },
  { id: 4, name: 'Football Shoes', price: '$14.99', image: '/new-arrival-4.png' }
]
</script>
