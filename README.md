# Atelier Lune — Premium Fashion E-commerce Starter

A responsive React + Tailwind CSS storefront inspired by the supplied editorial wireframe. It uses a warm ivory, espresso, antique-gold palette, a responsive mobile layout, page-level SEO metadata, and original AI-generated editorial image assets.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Page sequence
1. Home
2. Shop All
3. Collections
4. Collection detail pages
5. Jewellery
6. Apparel
7. Product detail
8. About Us
9. Wishlist
10. Shopping Cart
11. Checkout
12. My Account
13. Contact Us
14. FAQs & Policies

Shop All and Collections are separate routes and have separate layouts/purposes. Collection cards open their own detail routes. Jewellery filters: Earrings, Rings, Bracelet, Necklace. Apparel filters: Tops, Bottoms, Dresses, Corsets. Product cards use **Add to Bag** and **Buy Now**.

## Before production
This is a polished frontend starter, not a production commerce backend:
- `src/data/products.js`: replace sample products, prices and remote Unsplash product photos with your own catalog. The editorial hero assets are AI-generated and included locally.
- `src/components/SEO.jsx`, `public/sitemap.xml`, `public/robots.txt`: replace `https://www.example.com` with your real domain before deployment.
- `src/pages/Contact.jsx`: connect a backend/email service to receive enquiries.
- `src/pages/Checkout.jsx`: connect a secure backend, order inventory, shipping rates and a payment gateway (for example Razorpay for India) before accepting real payments.
- `src/pages/Account.jsx`: authentication is demo-only. Add secure server-side auth, customer records and order tracking before production.
- Product images use Unsplash URLs for sample catalog photography; they require an internet connection. AI-generated editorial images are local under `public/images/`.
- Configure a proper privacy policy, terms, returns policy, shipping policy, taxes and consent handling for your business.


## Header & motion enhancements
- Sticky header with a compact frosted-glass state after scrolling.
- Animated active navigation underline and refined icon hover states.
- Mobile off-canvas navigation with a dimmed backdrop, staggered link reveals, featured collection tile, Escape-to-close, and auto-close on route changes.
- Reduced-motion preference support.
