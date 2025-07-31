# Heroes Freight Forwarder Website

A modern, responsive website for Heroes Freight Forwarder Ltd., built with Next.js and configured for static export.

## Features

- **Static Export Ready**: Configured for deployment on cPanel and other static hosting providers
- **Fully Responsive**: Optimized for all device sizes
- **Modern Design**: Professional logistics company website
- **SEO Optimized**: Meta tags and structured content
- **Fast Loading**: Optimized images and performance

## Getting Started

### Development

\`\`\`bash
npm install
npm run dev
\`\`\`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

### Static Export for cPanel

\`\`\`bash
npm run export
\`\`\`

This will create an `out` folder with all static files ready for upload to cPanel.

## Deployment to cPanel

1. Run `npm run export`
2. Upload all files from the `out` folder to your cPanel public_html directory
3. Ensure your domain points to the uploaded files

## Configuration

The site is configured for static export with:
- `output: 'export'` in next.config.mjs
- `trailingSlash: true` for better server compatibility
- `images: { unoptimized: true }` for static hosting
- Client-side form handling for contact page

## Contact Form

The contact form is configured for client-side handling. For production use, integrate with:
- Formspree
- EmailJS
- Netlify Forms
- Or your preferred form handling service

## Pages

- **Home**: Hero section with services overview
- **About Us**: Company information and values
- **Services**: Detailed service offerings
- **Industries**: Industries served
- **Why Choose Us**: Company advantages
- **Contact**: Contact information and form

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Shadcn/ui Components
\`\`\`

```plaintext file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
