# ZANE PRIDDLE WEB DEV - MASTER CONTEXT

**Last Updated:** October 27, 2025

---

## BUSINESS OVERVIEW

**Business Name:** Zane Priddle Web Dev
**Owner:** Zane Priddle
**Location:** Melbourne, Victoria, Australia
**Status:** Active freelance web development business
**Primary Platform:** Upwork (with portfolio site)

**Core Service:** Modern landing pages and websites with integrated AI chatbots for small businesses

---

## WEBSITES & ASSETS

### Live Sites:
1. **zanepriddle.com** - Main portfolio hub
   - Professional portfolio site
   - Working AI chatbot with lead capture
   - Email notifications enabled
   - Links to all demo projects

2. **zaneonfire.com** - Zane on Fire Digital demo
   - Agency/creative demo
   - Bold design showcase

3. **Restaurant Demo** - The Harvest Table / Bella Vista
   - Restaurant booking chatbot
   - Menu showcase
   - Reservation system demo

4. **Consultant Demo** - Sarah Mitchell Consulting
   - Professional services site
   - Lead qualification chatbot

### GitHub:
- Repository: zanepriddle-portfolio (and others)
- All code version controlled

### Domains:
- zanepriddle.com (Namecheap)
- zaneonfire.com (Namecheap)

---

## TECHNICAL STACK

**Development:**
- Primary Tool: Claude Code in VSCode
- Framework: Next.js 14+ with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- AI Integration: Anthropic Claude API
- Deployment: Vercel
- Version Control: GitHub

**APIs & Services:**
- Anthropic API (for chatbots)
- Google Sheets (CRM integration via Apps Script)
- Gmail (automated notifications)

**Copywriting:**
- Tool: chat.ojoy.ai (for all marketing copy)

---

## SERVICE OFFERINGS & PRICING

### Core Packages:

1. **Landing Page Starter** - $500-$800
   - 1-page responsive site
   - Contact form
   - Mobile optimized
   - Basic SEO
   - 3-5 days delivery

2. **Landing Page + AI Chatbot** - $1,200-$1,800 (MAIN OFFERING)
   - Modern landing page
   - AI chatbot (Anthropic)
   - Lead capture system
   - Google Sheets integration
   - Email notifications
   - 5-7 days delivery

3. **Professional Website + Chatbot** - $2,000-$3,500
   - Multi-page website (3-5 pages)
   - Custom AI chatbot
   - Lead qualification
   - Analytics dashboard
   - 7-14 days delivery

4. **Design-to-Code Service** - $800-$2,000
   - Client provides Figma/design
   - Pixel-perfect Next.js build
   - Responsive & optimized
   - 5-10 days delivery

### Monthly Recurring Services (MRR Strategy):
- Essential Hosting & Support: $100-$150/mo
- Chatbot Pro Maintenance: $150-$250/mo
- Growth Package: $250-$400/mo
- Goal: 15 clients × $200/mo = $3,000 MRR

### Upwork Cold Start Pricing:
- First 5 jobs: 15-20% below normal rates
- After 5 reviews: Normal rates
- After 10 reviews: Premium pricing (+20%)

---

## LEAD CAPTURE SYSTEM

**Status:** ✅ FULLY OPERATIONAL

**How It Works:**
1. User chats with AI chatbot on zanepriddle.com
2. Chatbot naturally extracts: name, email, phone, company, project type, budget
3. When minimum data collected (name + email + project type):
   - POST request to Google Apps Script webhook
   - Lead saved to Client_Pipeline_CRM Google Sheet
   - Email notification sent to entelechian88@gmail.com
   - Duplicate prevention (won't submit twice)

**Webhook URL:**
```
https://script.google.com/macros/s/AKfycbzp-rmGWIw3hF3kJ2-aTS16u9_063EvojzTFA3SxHnyU6eWAUGE7o6orxToskd1ZcOGEQ/exec
```

**Files Involved:**
- Frontend: `components/ChatbotWidget.tsx`
- Backend: `app/api/chat/route.ts`
- Google Apps Script: Attached to Client_Pipeline_CRM sheet

---

## GOOGLE DRIVE STRUCTURE

**Main Folder:** 🗂️ Zane Priddle Web Dev

### Subfolders:
- **00_BUSINESS_OPS/** - All business operations documents
  - Services_Pricing_Sheet
  - Client_Pipeline_CRM (with webhook integration)
  - Weekly_Goals_Tracker
  - Business_Plan_2025
  - Target_Market_Research
  - Upwork_Strategy
  - Income_Tracker_2025
  - Expense_Tracker_2025

- **01_CLIENTS/** - Client project folders (template ready)

- **02_PORTFOLIO_DEMOS/** - Demo project documentation
  - Demo_01_Restaurant
  - Demo_02_Professional_Services
  - Demo_03_Agency

- **03_PROPOSALS_TEMPLATES/** - Upwork proposals, contracts, invoices
  - _MASTER_TEMPLATES/
  - Upwork_Proposal_Template_v1

- **04_MARKETING_CONTENT/** - Website copy, LinkedIn, case studies
  - Services_Page_Copy
  - Audience_Psychology_Creative_Format

- **05_TECHNICAL_DOCS/** - Code snippets, documentation

- **06_FINANCES/** - Income/expense tracking

- **07_LEARNING_RESOURCES/** - Tutorials, saved conversations

---

## TARGET MARKET

**Primary Customers:**
1. **Restaurants & Hospitality**
   - Pain: Missing reservations after hours
   - Solution: Booking chatbot 24/7
   - Budget: $1,500-$2,500 + $200-300/mo

2. **Professional Services** (Lawyers, Accountants, Consultants)
   - Pain: Unqualified leads wasting time
   - Solution: Lead qualification chatbot
   - Budget: $1,200-$3,500 + $150-250/mo

3. **Local Service Businesses** (HVAC, Plumbing, Contractors)
   - Pain: Competitors have better websites
   - Solution: Modern landing page + chatbot
   - Budget: $800-$1,500 + $100-200/mo

**Customer Psychology (from OJOY analysis):**
- Core struggle: "Bleeding money at night" (missed after-hours opportunities)
- Emotional driver: Professional vindication (online presence matching expertise)
- Secret belief: The Imposter Paradox (expert at work, amateur online)
- Language: "I'm losing clients to competitors who aren't even as good as me"

---

## UPWORK STRATEGY

**Profile Status:** ✅ Complete and live

**Cold Start Strategy (First 5 Jobs):**
- Price 15-20% below normal rates
- Goal: Get 5 five-star reviews FAST
- Apply to 10-15 jobs per week
- Focus on: fixed-price projects, verified payment, clear scope

**Job Search Terms:**
- "landing page chatbot"
- "small business website"
- "Next.js developer"
- "restaurant website"
- "AI chatbot integration"

**Proposal Structure:**
1. Hook (2 sentences) - Show you read their project
2. Credibility (3-4 sentences) - Mention tech stack, portfolio
3. Solution (5-6 sentences) - Specific approach to their project
4. Process (3-4 sentences) - Timeline, communication, revisions
5. Call to Action - "Let's hop on a quick call"

---

## REVENUE GOALS

**6-Month Roadmap:**

**Month 1:** $1,000
- Complete portfolio site ✅
- Build 3 demo projects ✅
- Launch Upwork ✅
- First 3 clients

**Month 2:** $2,000
- Land 5 clients
- Build review base
- Refine proposals

**Month 3-4:** $3,000-$4,000
- Increase pricing
- Focus on MRR clients
- 8-10 active clients

**Month 5-6:** $5,000
- 12-15 active clients
- Strong MRR base ($2,500+)
- Premium pricing

---

## BUSINESS OPERATIONS

**Email:** entelechian88@gmail.com (notifications)
**Portfolio Email:** zane@zanepriddle.com (client-facing)

**Payment Methods:**
- Bank transfer
- PayPal
- Wise

**Payment Terms:**
- 50% upfront, 50% on completion
- Monthly recurring: Auto-debit via Stripe/PayPal

**Working Hours:**
- 40+ hours/week available
- Melbourne timezone = advantage for US clients
- "Working while you sleep" positioning

---

## KEY DIFFERENTIATORS

1. **AI-First Approach**
   - Not just websites, but revenue machines
   - Chatbots that work 24/7
   - Lead capture built-in

2. **Melbourne Timezone Advantage**
   - Work while US clients sleep
   - Wake up to progress every morning

3. **Fast Delivery**
   - Claude Code enables rapid development
   - Simple projects: 3-5 days
   - Complex projects: 7-14 days

4. **Monthly Recurring Revenue**
   - Hosting + chatbot maintenance
   - Stable income for both parties
   - Ongoing support relationship

---

## COMPLETED MILESTONES

✅ Portfolio site built (zanepriddle.com)
✅ 3-4 demo projects completed
✅ AI chatbot with lead capture working
✅ Email notifications enabled
✅ Upwork profile created and optimized
✅ All business operations documents created
✅ Pricing strategy defined
✅ Target market research completed
✅ Proposal templates ready
✅ CRM system operational

---

## CURRENT PRIORITIES

**Immediate (This Week):**
1. Test production lead capture on live site
2. Apply to 5 Upwork jobs
3. Respond to any Upwork messages within 2 hours
4. Weekly review of goals and CRM

**Short Term (Next 2 Weeks):**
1. Land first 1-3 clients
2. Deliver projects on time
3. Get first 5-star reviews
4. Refine proposal based on what works

**Medium Term (Month 2-3):**
1. Build to 5-10 active clients
2. Increase pricing after reviews
3. Focus on MRR clients
4. Optimize chatbot based on feedback

---

## IMPORTANT NOTES

**When Working with Claude:**
- Always use Claude Code in VSCode for development
- Use chat.ojoy.ai for copywriting (never ask Claude to write copy)
- Focus on fast execution over perfection
- Monthly recurring revenue is the goal
- USD pricing (convert to AUD mentally)

**What's Working:**
- Lead capture system (fully automated)
- Demo projects (professional quality)
- Portfolio positioning (clear value prop)
- Technical stack (fast and modern)

**What Needs Improvement:**
- Chatbot conversation flow (works but could be smoother)
- More demo projects (have 3-4, could add more industries)
- Case studies (once real clients complete)

---

## TECHNICAL CREDENTIALS

**Anthropic API Keys:**
- zanepriddle.com key (for business projects)
- sweatmate key (for other projects)
- Keys stored in Vercel environment variables

**Google Apps Script:**
- Lead Capture Webhook (attached to Client_Pipeline_CRM)
- Email notifications enabled
- Executes as: entelechian88@gmail.com

**Vercel Projects:**
- zanepriddle-portfolio (main site)
- zaneonfire (demo)
- Other demos

---

## CONTACT INFORMATION

**Business:**
- Website: zanepriddle.com
- Email: zane@zanepriddle.com
- Upwork: [View Profile]

**Personal:**
- Email: entelechian88@gmail.com
- Location: Melbourne, Victoria, Australia

---

**END OF CONTEXT DOCUMENT**

*This document should be updated whenever major business changes occur:*
- *New websites launched*
- *Pricing changes*
- *New services added*
- *Major technical updates*
- *Revenue milestones achieved*
