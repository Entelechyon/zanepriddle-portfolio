'use client';

import { useState, useRef, useEffect } from 'react';

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

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const submitLeadToWebhook = async (lead: LeadInfo) => {
    const webhookUrl = 'https://script.google.com/macros/s/AKfycbzp-rmGWIw3hF3kJ2-aTS16u9_063EvojzTFA3SxHnyU6eWAUGE7o6orxToskd1ZcOGEQ/exec';

    const payload = {
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      company: lead.company || '',
      projectType: lead.projectType || '',
      budget: lead.budget || '',
      message: lead.message || '',
      priority: lead.priority || 'Medium',
      timestamp: new Date().toISOString(),
    };

    console.log('🌐 WEBHOOK CALL STARTED');
    console.log('📍 URL:', webhookUrl);
    console.log('📦 Payload:', payload);

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('✅ Lead submitted to Google Sheets successfully');
      console.log('💾 Data sent:', payload);
      return true;
    } catch (error) {
      console.error('Failed to submit lead to webhook:', error);

      // Store in localStorage as backup
      try {
        const backupLeads = JSON.parse(localStorage.getItem('pendingLeads') || '[]');
        backupLeads.push({
          ...lead,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('pendingLeads', JSON.stringify(backupLeads));
        console.log('Lead saved to localStorage backup');
      } catch (storageError) {
        console.error('Failed to save to localStorage:', storageError);
      }

      return false;
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        role: 'assistant',
        content: "👋 Hi! I'm Zane's AI assistant. I can help you learn about:\n\n• Website packages and pricing\n• How AI chatbots work for your business\n• Timeline and next steps\n• Booking a free consultation\n\nWhat would you like to know about getting a website that works while you sleep?",
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          leadInfo,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Check if the assistant captured lead info
      console.log('🔍 API Response:', { hasLeadInfo: !!data.leadInfo, leadInfo: data.leadInfo });

      if (data.leadInfo) {
        const updatedLeadInfo = { ...leadInfo, ...data.leadInfo };
        setLeadInfo(updatedLeadInfo);
        console.log('📝 Lead info updated:', updatedLeadInfo);
        console.log('✅ Has name:', !!updatedLeadInfo.name);
        console.log('✅ Has email:', !!updatedLeadInfo.email);
        console.log('✅ Has projectType:', !!updatedLeadInfo.projectType);
        console.log('✅ Already submitted:', !!updatedLeadInfo.submitted);

        // Check if we have minimum required info and haven't submitted yet
        if (
          updatedLeadInfo.name &&
          updatedLeadInfo.email &&
          updatedLeadInfo.projectType &&
          !updatedLeadInfo.submitted
        ) {
          console.log('🚀 MINIMUM LEAD INFO COLLECTED - SUBMITTING TO WEBHOOK...');
          console.log('📤 Payload:', {
            name: updatedLeadInfo.name,
            email: updatedLeadInfo.email,
            phone: updatedLeadInfo.phone,
            company: updatedLeadInfo.company,
            projectType: updatedLeadInfo.projectType,
            budget: updatedLeadInfo.budget,
            message: updatedLeadInfo.message,
            priority: updatedLeadInfo.priority,
          });

          const success = await submitLeadToWebhook(updatedLeadInfo);

          if (success) {
            console.log('✅ WEBHOOK SUBMISSION SUCCESSFUL - Marking as submitted');
            // Mark as submitted to avoid duplicate submissions
            setLeadInfo((prev) => ({ ...prev, submitted: true }));
          } else {
            console.log('❌ WEBHOOK SUBMISSION FAILED');
          }
        } else {
          console.log('⏳ Waiting for more info:', {
            needName: !updatedLeadInfo.name,
            needEmail: !updatedLeadInfo.email,
            needProjectType: !updatedLeadInfo.projectType,
            alreadySubmitted: updatedLeadInfo.submitted,
          });
        }
      } else {
        console.log('ℹ️ No lead info in this response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or email Zane directly at zane@zanepriddle.com",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${
          isOpen
            ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600'
            : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'
        } transform hover:scale-110`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Widget Window */}
      <div
        className={`fixed bottom-20 left-4 right-4 sm:bottom-24 sm:left-auto sm:right-6 sm:w-96 max-h-[70vh] sm:max-h-[600px] max-w-md bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 z-50 border border-slate-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: 'min(70vh, 500px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Zane&apos;s AI Assistant</h3>
              <p className="text-sm text-blue-100">Powered by Claude AI</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-900 border border-slate-200 shadow-sm rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-900"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Powered by Anthropic&apos;s Claude AI
          </p>
        </div>
      </div>
    </>
  );
}
