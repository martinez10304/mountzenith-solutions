## ARC 47 Solutions

Marketing/consulting site for ARC 47 Solutions, built with Next.js (App Router) and Tailwind CSS. See [CLAUDE.md](./CLAUDE.md) for full project context and `mountzenith-homepage.jsx` for the original reference design.

### Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` - API key from [resend.com](https://resend.com), used by the contact form's API route (`src/app/api/contact/route.js`).
- `CONTACT_EMAIL` - the address that receives contact form submissions. Until you verify a custom sending domain in Resend, the sandbox `onboarding@resend.dev` sender can only deliver to the email address that owns the Resend account, so use that address here for testing.
- `NEXT_PUBLIC_SITE_URL` - the deployed site URL (for example `https://arc47.solutions`), used to resolve absolute Open Graph image URLs. Safe to leave unset locally and on Vercel previews, it falls back automatically.

Without `RESEND_API_KEY` and `CONTACT_EMAIL` set, the contact form will show an error instead of sending.

### Deployment

Deploy target is Vercel. Connect the GitHub repo in the Vercel dashboard and add the environment variables above under Project Settings, then deploy.
