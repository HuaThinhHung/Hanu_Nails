# HANU Nails Website - Development Handoff

## Current Status

The website is now implemented as a complete demo-ready Next.js app with the core public routes, static content, booking form UI, gallery filtering, SEO files, policy pages, loading state, and 404 page.

The visual direction has been redesigned against `public/Hanu.png`: luxury minimal, editorial serif typography, white/gray/beige/brown palette, thin divider lines, collage-style image layouts, and moodboard crops used across the site until final brand assets are available.

## Routes

- `/` - Homepage
- `/collections` - Collection listing
- `/collections/[slug]` - Collection detail pages
- `/gallery` - Gallery with filter and search
- `/pricing` - Service pricing and FAQ
- `/academy` - Academy course listing, application CTA, FAQ
- `/academy/[slug]` - Course detail pages
- `/booking` - Booking form
- `/about` - Studio, artists, journal sections
- `/contact` - Contact and booking form
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/sitemap.xml` - Sitemap
- `/robots.txt` - Robots file

## Commands

```powershell
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Verified

- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` passed earlier after removing Google Fonts dependency and setting Turbopack root.
- Latest redesign build passes and generates 24 app routes.

## Notes

- Main image areas now use `components/ui/MoodboardImage.tsx`, cropping directly from `public/Hanu.png` for a consistent moodboard look.
- Some older helper components still exist for fallback/legacy use, but the main homepage and key pages now lean on moodboard visuals.
- Booking and newsletter forms are demo UI only. They show local confirmation but do not submit to email, Google Sheets, Zalo, or CRM yet.
- The hero uses a stylized SVG hand illustration. A real `.glb` hand model can be added later if the brand needs a true 3D hero.
- If the laptop runs out of memory during `npm run build`, increase Windows virtual memory/pagefile or run build after closing other heavy apps.
