
# Schulman Neuropsicologia

Landing page and autism screening flow built with the Next.js App Router.

## Running locally

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run a local type check:

```bash
pnpm typecheck
```

## SEO and Search Console

The app now serves SEO metadata through the App Router, including:

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- route-level metadata for `/` and `/teste-autismo`

To enable Google Search Console HTML-tag verification, set one of these environment variables before deploying:

```bash
GOOGLE_SITE_VERIFICATION=your-token
```

or

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-token
```
  