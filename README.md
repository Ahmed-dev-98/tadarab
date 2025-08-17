# Tadarab Task - Learning Platform

This is a Next.js learning platform that showcases courses, instructors, and educational content. It's built with modern web technologies and has some pretty cool features worth talking about.


## Tech Stack

- **Next.js 15** with React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **TanStack Query** for data fetching
- **Embla Carousel** for smooth scrolling
- **Swiper** for coverflow carousel features

## Project Structure

```
src/
├── app/                    # Next.js app router stuff
├── components/            # Reusable UI components
├── sections/             # Main page sections (hero, courses, etc.)
├── lib/                  # Utilities and custom hooks
├── api/                  # API client and endpoints
└── types/                # TypeScript type definitions
```


## Key Features Worth Mentioning

### 1. Lazy Loading with Intersection Observer

The app uses a custom `useLazyQuery` hook that only fetches data when you actually scroll to that section:

- Faster initial page load
- Less unnecessary API calls
- Better performance overall

The hook watches for when sections come into view and triggers the data fetch only then.


### 2. Carousel with Smart Pagination

The course carousels are built with Embla Carousel and have some neat features:

- **Prefetch on scroll**: When you're about 70% through scrolling, it automatically loads the next page of courses
- **Category filtering**: You can filter courses by category, and the carousel updates accordingly
- **Smooth scrolling**: The carousel has a nice drag-to-scroll feel with proper snap points

The pagination logic detects when you're getting close to the end and preloads more content so the transition feels seamless.

### 3. Swiper Integration

Some sections use Swiper for more advanced carousel features like cover flow view:

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Start the dev server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Development Notes

- The app uses React Query for server state management
- Most components are client-side rendered
- The design is mobile-first with responsive breakpoints
- There's a custom intersection observer hook for performance optimization


## The App Already Live :
[https://tadarab-flame.vercel.app/](https://tadarab-flame.vercel.app/)
