# Aura fresh+ Website

This project is a Next.js storefront for Aura fresh+ and is ready to import into Vercel.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## Vercel import

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, click `Add New...` -> `Project`.
3. Import the repository that contains this app.
4. Set the project root to this folder if the repo contains multiple folders:
   `Golden bridge international llc`
5. Vercel should detect `Next.js` automatically.
6. Deploy.

## Notes

- Remote Shopify-hosted images are allowed through `next.config.ts`.
- No environment variables are currently required for the live marketing site.
- Shopify checkout/preorder wiring has not been connected yet.
