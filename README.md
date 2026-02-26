# Hotel Surya Beach Inn - Website

A modern, responsive hotel landing page for Hotel Surya Beach Inn, Puri, Odisha.

## Tech Stack

- **Next.js 15** (App Router, Static Generation)
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations)
- **Swiper.js** (carousels)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel: `npx vercel` or connect your GitHub repo at [vercel.com](https://vercel.com).

## Features

- Full-screen hero with beach imagery and CTAs
- Room cards with Morning/Sunset/Night ambiance preview
- Truva-inspired environment indicators (Ocean Breeze, Sunrise, Noise)
- Photo gallery with category filters and lightbox
- Video tour section
- Interactive location map with nearby landmarks
- Testimonials carousel
- Contact form (EmailJS-ready)
- Sticky bottom booking bar (Book Now + WhatsApp + Call)
- SEO optimized with meta tags and OG data

## Customization

- **Images**: Replace Unsplash URLs in `lib/constants.ts` with real hotel photos
- **Video**: Replace YouTube embed URL in `components/VideoTour.tsx`
- **EmailJS**: Add your service/template IDs in `components/Contact.tsx`
- **Content**: Edit all hotel data in `lib/constants.ts`
