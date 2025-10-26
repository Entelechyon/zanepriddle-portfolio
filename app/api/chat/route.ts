import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// System prompt with information about Zane's services
const SYSTEM_PROMPT = `You are an AI assistant for Zane Priddle, a web developer who builds websites that work while clients sleep.

ZANE'S VALUE PROPOSITION:
Zane doesn't build digital brochures – he builds revenue machines. While other developers create websites that just sit there looking pretty, Zane creates websites that actively grow businesses through intelligent AI chatbots that handle customer interactions 24/7.

SERVICES OFFERED:

1. AI-Powered Landing Pages
Convert more visitors with landing pages that don't just look professional – they act professional. Integrated AI chatbots qualify leads, answer questions, and guide visitors toward booking or buying, turning the landing page into their best salesperson.

2. Small Business Websites
Complete 5-10 page websites that position clients as experts. Every site includes an intelligent chatbot trained on their business, services, and FAQs. Website becomes available 24/7, capturing opportunities even when they're not.

3. Figma to Website Development
Transforms Figma mockups into fast, functional websites with seamless AI integration. Designer's vision meets intelligent automation that actually drives business results.

4. Monthly Maintenance Packages
Ongoing support and updates for existing websites.

TECH STACK:
Next.js, React, TypeScript, Tailwind CSS, Anthropic API (Claude AI), Vercel hosting

LOCATION & AVAILABILITY:
- Based in Melbourne, Australia
- Works with clients across US and Australia
- Timezone advantage: works while US clients sleep, so they wake up to progress
- Available for freelance projects

TARGET CLIENTS:
Small business owners, consultants, and entrepreneurs who are tired of websites that just sit there. People who want websites that actively grow their business while they focus on what they do best.

CONTACT:
- Email: zane@zanepriddle.com
- Website: zanepriddle.com

YOUR ROLE:
- Help visitors understand how Zane's websites work differently (they're revenue machines, not digital brochures)
- Emphasize the "work while you sleep" advantage of AI chatbots
- Focus on business results and lead capture, not just pretty designs
- Answer questions about packages, pricing, timeline, tech stack
- Be conversational, helpful, and results-focused
- If user is just browsing/asking questions: DON'T push for contact info, just be helpful
- If user shows buying intent: Naturally guide toward collecting their details

LEAD CAPTURE (Natural Conversation Flow):
When a visitor shows genuine interest (asking about pricing, timeline, wanting to start a project), naturally collect:

REQUIRED (minimum to follow up):
1. Name - "What's your name?" or "Who am I speaking with?"
2. Email - "What's the best email to reach you at?"
3. Project Type - Determine from context or ask: "Are you looking for a landing page, a full website, or something custom?"

OPTIONAL (collect if conversation flows naturally):
4. Phone - "And a phone number in case I need to reach you quickly?"
5. Company - Usually mentioned naturally in conversation
6. Budget - "Do you have a budget in mind? Just ballpark - Under $1k, $1-2k, $2-5k, or $5k+?"
7. Message/Details - Summarize what they've told you about their needs

CONVERSATION TIPS:
- DON'T make it feel like a form - weave questions into natural dialogue
- Example flow:
  User: "I need a website for my restaurant"
  You: "Awesome! A restaurant website with an AI chatbot for reservations could be perfect. What's your name?"
  User: "Sarah"
  You: "Nice to meet you, Sarah! What's the best email to reach you at?"

- After collecting name + email + project type, acknowledge subtly:
  "Perfect! I've noted your details. Zane will follow up within 24 hours with ideas for your [project type]."

- Then continue the helpful conversation naturally

PRIORITY DETECTION:
- High Priority: Budget $2k+, mentions "urgent" or "ASAP", ready to start immediately
- Medium Priority: Clear project scope, mentioned budget, timeline in mind
- Low Priority: Just exploring, asking general questions, no budget mentioned

Keep responses concise (2-3 sentences max), friendly, and focused on being helpful first, capturing leads second. Never be pushy or salesy.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  priority?: string;
  submitted?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, leadInfo } = await req.json();
    console.log('📥 Incoming lead info:', leadInfo);

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      );
    }

    // Format messages for Anthropic API
    const formattedMessages = messages.map((msg: Message) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: formattedMessages,
    });

    // Extract the assistant's message
    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    // Extract lead information from conversation
    const newLeadInfo: LeadInfo = { ...leadInfo };

    // Get the last user message for extraction
    const lastUserMessage = messages[messages.length - 1]?.content || '';
    const conversationContext = messages.map((m: Message) => m.content).join(' ');

    console.log('🔎 Extracting from last message:', lastUserMessage);
    console.log('🔎 Current lead state:', leadInfo);

    // Extract name (if not already captured)
    if (!newLeadInfo.name) {
      console.log('🔍 Attempting to extract name from:', lastUserMessage);

      // Try multiple patterns in order of specificity
      const namePatterns = [
        // "My name is John Smith" or "I'm John Smith"
        /(?:my name is|i'm|i am|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/i,

        // "John Smith, email@example.com" - name at start followed by comma
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)(?:\s*,)/,

        // "John Smith here" or "John Smith and I need..."
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)(?:\s+(?:here|and|with))/i,

        // Just "John Smith" at the start of message
        /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)(?:\s*$|[.,!?])/,

        // Single first name as fallback
        /^([A-Z][a-z]{2,})$/,
      ];

      for (const pattern of namePatterns) {
        const match = lastUserMessage.match(pattern);
        if (match && match[1]) {
          const extractedName = match[1].trim();
          // Validate: reasonable length and doesn't contain numbers
          if (extractedName.length >= 2 && extractedName.length < 40 && !/\d/.test(extractedName)) {
            newLeadInfo.name = extractedName;
            console.log('✅ Name extracted:', extractedName);
            break;
          }
        }
      }

      if (!newLeadInfo.name) {
        console.log('❌ No name found in message');
      }
    } else {
      console.log('ℹ️ Name already captured:', newLeadInfo.name);
    }

    // Extract email
    if (!newLeadInfo.email) {
      const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
      const emailMatch = lastUserMessage.match(emailPattern);
      if (emailMatch) {
        newLeadInfo.email = emailMatch[1];
        console.log('✅ Email extracted:', emailMatch[1]);
      } else {
        console.log('❌ No email found in message');
      }
    } else {
      console.log('ℹ️ Email already captured:', newLeadInfo.email);
    }

    // Extract phone
    if (!newLeadInfo.phone) {
      const phonePatterns = [
        /(\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4})/,
        /(\+?[0-9]{1,3}[-.\s]?[0-9]{8,14})/,
      ];

      for (const pattern of phonePatterns) {
        const match = lastUserMessage.match(pattern);
        if (match) {
          newLeadInfo.phone = match[1].trim();
          break;
        }
      }
    }

    // Extract company name
    if (!newLeadInfo.company) {
      const companyPatterns = [
        /(?:for|at|with|from)\s+([A-Z][a-zA-Z0-9\s&'-]+(?:Inc|LLC|Ltd|Co|Company|Corp)?)/,
        /(?:my company|my business|we're|we are)\s+([A-Z][a-zA-Z0-9\s&'-]+)/i,
      ];

      for (const pattern of companyPatterns) {
        const match = conversationContext.match(pattern);
        if (match && match[1] && match[1].length < 50) {
          newLeadInfo.company = match[1].trim();
          break;
        }
      }
    }

    // Extract project type
    if (!newLeadInfo.projectType) {
      const projectTypeKeywords = {
        'Landing Page': ['landing page', 'landing', 'single page', 'one page'],
        'Landing + Chatbot': ['landing page with chatbot', 'landing with ai', 'landing page and chatbot'],
        'Professional Website': ['website', 'full website', 'professional site', 'business website', 'multi-page'],
        'Design-to-Code': ['figma', 'design to code', 'mockup', 'design file'],
        'Custom': ['custom', 'unique', 'special requirements', 'specific needs'],
      };

      const lowerContext = conversationContext.toLowerCase();
      for (const [type, keywords] of Object.entries(projectTypeKeywords)) {
        if (keywords.some(keyword => lowerContext.includes(keyword))) {
          newLeadInfo.projectType = type;
          break;
        }
      }
    }

    // Extract budget
    if (!newLeadInfo.budget) {
      const budgetPatterns = [
        { pattern: /under\s+\$?1[,.]?000|less than \$?1000|\$500|\$800/i, value: 'Under $1,000' },
        { pattern: /\$?1[,.]?000[-\s](?:to[-\s])?\$?2[,.]?000|1k[-\s]2k|\$?1[,.]?100/i, value: '$1,000-$2,000' },
        { pattern: /\$?2[,.]?000[-\s](?:to[-\s])?\$?5[,.]?000|2k[-\s]5k/i, value: '$2,000-$5,000' },
        { pattern: /over\s+\$?5[,.]?000|more than \$?5000|\$?5[,.]?000\+|5k\+/i, value: '$5,000+' },
        { pattern: /not sure|don't know|unsure|no idea|haven't thought/i, value: 'Not sure' },
      ];

      for (const { pattern, value } of budgetPatterns) {
        if (conversationContext.match(pattern)) {
          newLeadInfo.budget = value;
          console.log('✅ Budget extracted:', value);
          break;
        }
      }

      if (!newLeadInfo.budget) {
        console.log('❌ No budget found in conversation');
      }
    } else {
      console.log('ℹ️ Budget already captured:', newLeadInfo.budget);
    }

    // Build message summary
    if (!newLeadInfo.message) {
      // Collect key points from conversation
      const projectMentions: string[] = [];

      if (conversationContext.toLowerCase().includes('restaurant')) projectMentions.push('restaurant');
      if (conversationContext.toLowerCase().includes('e-commerce') || conversationContext.toLowerCase().includes('ecommerce') || conversationContext.toLowerCase().includes('store')) projectMentions.push('e-commerce');
      if (conversationContext.toLowerCase().includes('portfolio')) projectMentions.push('portfolio');
      if (conversationContext.toLowerCase().includes('consulting')) projectMentions.push('consulting');
      if (conversationContext.toLowerCase().includes('saas')) projectMentions.push('SaaS');

      if (projectMentions.length > 0) {
        newLeadInfo.message = `Interested in ${newLeadInfo.projectType || 'website project'} for ${projectMentions.join(', ')} business`;
      }
    }

    // Determine priority
    if (!newLeadInfo.priority) {
      const urgentKeywords = ['urgent', 'asap', 'quickly', 'soon', 'immediately', 'rush'];
      const isUrgent = urgentKeywords.some(keyword => conversationContext.toLowerCase().includes(keyword));
      const hasBudget = newLeadInfo.budget && !newLeadInfo.budget.includes('Not sure');
      const hasHighBudget = newLeadInfo.budget === '$2,000-$5,000' || newLeadInfo.budget === '$5,000+';

      if (hasHighBudget || isUrgent) {
        newLeadInfo.priority = 'High';
      } else if (hasBudget && newLeadInfo.projectType) {
        newLeadInfo.priority = 'Medium';
      } else {
        newLeadInfo.priority = 'Low';
      }
    }

    console.log('📤 Returning lead info:', newLeadInfo);
    console.log('📊 Lead completeness:', {
      hasName: !!newLeadInfo.name,
      hasEmail: !!newLeadInfo.email,
      hasProjectType: !!newLeadInfo.projectType,
      hasBudget: !!newLeadInfo.budget,
      hasPriority: !!newLeadInfo.priority,
    });

    return NextResponse.json({
      message: assistantMessage,
      leadInfo: newLeadInfo,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
