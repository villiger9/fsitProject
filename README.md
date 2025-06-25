A Nuxt 3 e-commerce site with dynamic category and product pages, cart functionality, and responsive design.

# Features

Dynamic Categories & Products:
Fetches product and category data dynamically from Fakestore API and renders pages based on URL parameters.

Pinia State Management:
Uses Pinia store for managing cart state including adding/removing products and tracking total items.

Responsive Navbar with Hamburger Menus:
Two hamburger menus for categories and site links appear on small screens, improving navigation on mobile devices.

Interactive UI Elements:
Buttons with hover animations (color change, scaling), fade-in effects on product cards, smooth horizontal scrolling for special offers and new arrivals.

Mobile-optimized Banners:
Responsive banner images with conditional display of text/buttons on desktop vs mobile.

Routing with NuxtLink:
Utilizes <NuxtLink> for internal navigation to category and product pages dynamically generated.

Composition API & Script Setup:
Uses Vue 3 Composition API and <script setup> syntax for cleaner and more concise component logic.

# Technologies Used

Nuxt 3 — Framework for Vue 3 with server-side rendering and static site generation.

Vue 3 — Reactive UI components using Composition API.

Pinia — State management library replacing Vuex, used for managing cart state.

Bootstrap 5 — CSS framework for styling and responsive grid layouts.

Fakestore API — External public API to fetch fake product data.

Bootstrap Icons — For UI icons such as cart, user, search, social media icons.

Intersection Observer API — For fade-in animation on product cards when they scroll into view.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
