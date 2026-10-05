# Ghar Rasoi Enterprises — Web

Production-oriented Next.js starter for the Ghar Rasoi Enterprises brand website.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — routes, metadata and global styling
- `components/` — reusable UI components
- `lib/site.ts` — editable business/product data
- `public/images/` — extracted reference assets from the supplied prototype
- `public/media/ghar-rasoi-process.mp4` — add the final cinematic process video here

## Important before client launch

1. Replace the reference images with the final approved Ghar Rasoi logo/product photography.
2. Add the final cinematic process video at `public/media/ghar-rasoi-process.mp4`.
3. Replace placeholder contact details with verified business details.
4. Confirm every product name, variant, price and product claim with the client.
5. Add the backend/admin/API in the next phase; this frontend is intentionally separated from content data so that integration is straightforward.
