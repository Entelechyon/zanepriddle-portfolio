# Zane Priddle Portfolio

Professional portfolio website for zanepriddle.com featuring AI-powered chatbot integration using Anthropic's Claude API.

## Features

- **Modern, Responsive Design**: Built with Next.js 15 and Tailwind CSS 4
- **AI Chatbot Widget**: Intelligent chatbot powered by Claude AI (claude-3-haiku-20240307) that:
  - Introduces services with OJOY-aligned messaging
  - Answers visitor questions about packages, pricing, and timeline
  - Captures lead information naturally
  - Provides 24/7 engagement
  - Clear, readable input text
- **Professional Sections**:
  - Hero with clear value proposition and professional photo
  - About section with OJOY copy and interactive tech stack badges
  - Services showcase with OJOY-aligned service descriptions
  - Portfolio/projects display
  - Contact form (logs to console)
  - Professional footer with GitHub and LinkedIn links
- **Full TypeScript**: Type-safe codebase
- **Optimized Performance**: Built with Next.js App Router and Turbopack

## Tech Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **AI Integration**: Anthropic API (@anthropic-ai/sdk)
- **Hosting**: Vercel
- **React**: 19.1.0

## Getting Started

### Prerequisites

- Node.js 20+ installed
- Anthropic API key ([get one here](https://console.anthropic.com/))
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd zanepriddle-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Anthropic API key to `.env.local`:
```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The project structure:
```
├── app/
│   ├── api/chat/route.ts    # Chatbot API endpoint
│   ├── page.tsx              # Main homepage
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── ChatbotWidget.tsx     # AI chatbot component
└── public/                   # Static assets
```

### Making Changes

- **Update copy**: Edit `app/page.tsx` for content changes
- **Modify chatbot behavior**: Update `app/api/chat/route.ts` system prompt
- **Style changes**: Tailwind CSS classes in components
- **Chatbot UI**: Edit `components/ChatbotWidget.tsx`

## Building for Production

Build the production version:
```bash
npm run build
```

Start production server locally:
```bash
npm run start
```

**Note:** The project includes an `.eslintrc.json` file that allows apostrophes in text content for a more natural reading experience.

## Deploying to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
6. Click "Deploy"

### Step 3: Connect Custom Domain (zanepriddle.com)

1. In Vercel project settings, go to "Domains"
2. Add domain: `zanepriddle.com`
3. Add domain: `www.zanepriddle.com`
4. Vercel will provide DNS instructions

### Step 4: Configure Namecheap DNS

1. Log into Namecheap account
2. Go to Domain List → Manage for `zanepriddle.com`
3. Navigate to "Advanced DNS"
4. Add these records:

**For root domain (zanepriddle.com):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (Vercel's IP)
- TTL: Automatic

**For www subdomain:**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com.`
- TTL: Automatic

5. Remove any conflicting A or CNAME records
6. Save all changes

### Step 5: Verify Deployment

- DNS propagation can take 1-24 hours
- Check status at [whatsmydns.net](https://www.whatsmydns.net/)
- Once propagated, visit zanepriddle.com
- Verify HTTPS is working (Vercel provides automatic SSL)
- Test the chatbot functionality
- Check mobile responsiveness

## Features to Test

- ✓ All sections render correctly
- ✓ Smooth scrolling between sections
- ✓ Contact form captures data (console.log)
- ✓ Chatbot opens/closes smoothly
- ✓ Chatbot responds using Claude AI
- ✓ Mobile responsive design
- ✓ All CTAs work properly

## Updating Content

### Professional Photo

✓ **Already configured** - Your photo is at `public/profile.jpg` and displays in the hero section.

To update it later, replace `public/profile.jpg` with a new image (recommended: 800x800px).

### To Add Real Project Screenshots

1. Add images to `public/projects/` folder
2. Update the Portfolio section in `app/page.tsx`
3. Replace the gradient placeholder divs with `<img>` tags

## Environment Variables

Required environment variables:

- `ANTHROPIC_API_KEY`: Your Anthropic API key for Claude AI

## Support

For issues or questions:
- Email: zane@zanepriddle.com
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Anthropic API docs: [docs.anthropic.com](https://docs.anthropic.com)

## License

Private project for zanepriddle.com

---

Built with Next.js and Claude AI | © 2025 Zane Priddle
