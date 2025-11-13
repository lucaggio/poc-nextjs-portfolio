# POC Next.js Portfolio with Admin Panel

This project is a portfolio website built with Next.js, featuring an admin panel for managing content.  
It was created from scratch following the assignment requirements: showcase projects, manage them through an admin interface, and use Next.js features such as SSG, SSR, caching, and performance optimizations.

The project is fully typed with TypeScript, styled with Styled Components, and covered by basic tests using Jest and Testing Library.

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 18**
- **TypeScript**
- **Styled Components**
- **Jest** + **@testing-library/react**
- **MockAPI** ([mockapi.io](https://mockapi.io/)) for backend project management

---

## Features Overview

### 1. Portfolio Showcase

- **Home page** that displays all projects with:
  - Name
  - Description
  - Image
- **Project Detail page** with a static layout and image loading effect.
- **About Me page** including:
  - Personal introduction
  - Skills list

---

### 2. Admin Panel

The admin panel allows full CRUD operations on projects:

- Add a new project
- Edit an existing project
- Delete a project
- Live form validation using `react-hook-form`
- Local admin state updates, with public pages refreshed via polling

---

### 3. Next.js Features Used

**Home Page – SSG + Polling**

- The page is statically generated for fast initial load.
- Client-side polling refreshes the project list every 15 seconds

MockAPI does not send cache invalidation headers.
Because of this, Next.js cannot detect when the data changes, making ISR ineffective for real-time updates.
For this reason, the Home page uses client side polling to keep the project list fresh.

**Project Detail – SSR (Dynamic)**

- Server rendered detail pages
- Delivers fresh data, avoids unnecessary rebuilds

**About Page – Static**

- Static with no runtime hooks

**API Fetch Layer**
Custom wrapper (`apiFetch`) to handle:

- Cache modes (default, force-cache, no-store)
- ISR support (via `next: { revalidate }`)
- AbortController
- Error logging
- Permissions (future extension: auth token support)

---

### 4. Testing

Testing is handled with **Jest** and **Testing Library**.

Included test files:

- `apiFetch` (Fetch calls, error handling, AbortError)
- `buildFetchOptions` (Cache rules and revalidate logic)
- `ProjectCard` (UI element rendering, links)
- `ProjectList` (Rendering multiple items)

These tests ensure essential reliability of the UI and API helpers.

---

## Run the Project Locally

1. **Install dependencies:**  
   `npm install`
2. **Start development server:**  
   `npm run dev`  
   Open [http://localhost:3000](http://localhost:3000)
3. **Run tests:**  
   `npm test`
4. **Production build:**  
   `npm run build`  
   `npm start`

---

## Live Demo

This project is automatically deployed on **Vercel** through **GitHub** integration.
The latest production version is available at:

[https://poc-nextjs-portfolio.vercel.app/](https://poc-nextjs-portfolio.vercel.app/)

---

### Possible future improvements

- Extract the polling logic into a reusable custom hook (`usePolling`).
- Add more comprehensive test coverage (UI interactions, admin panel flows, loading states).
- Improve accessibility (a11y) across the portfolio pages.
- Replace mock API with a real backend or local storage sync.
- Add authentication flow for the Admin Panel (login page + protected routes)
- Implement JWT based validation. The API client (apiFetch) is already prepared to send a Bearer token.
- Expand the theme and create a small UI system so styling can be reused consistently across the entire app

---

## Final Notes

Some parts of the project such as the folder structure and the overall component organisation are more structured than strictly required for a small assignment.
This was intentional: the goal was to show how I normally organise a scalable codebase.

The styling layer, however, is intentionally lightweight: the theme is minimal and I did not implement a full UI system (buttons, inputs, shared layout primitives).
If the project were to grow, a natural next step would be to expand the design tokens, create reusable UI components, and unify styling patterns across the app.

Even though this portfolio app is relatively small, I followed patterns that make long-term maintenance easier and more predictable.
