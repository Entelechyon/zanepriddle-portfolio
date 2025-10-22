'use client';

import Image from 'next/image';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Your Website Should
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Work While You Sleep
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
                I build professional websites with AI chatbots that capture leads, answer questions 24/7, and turn visitors into customers – even when you&apos;re not there.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Your AI-Powered Website
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-slate-200 hover:border-blue-600 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Column - Professional Photo */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/profile.jpg"
                  alt="Zane Priddle - Web Developer"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-6">
            About Zane
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              <span className="text-xl">I&apos;m Zane Priddle, a web developer based in Melbourne who specializes in creating websites that actually work for your business.</span> While other developers build digital brochures, I build revenue machines.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              My approach is simple: combine clean, modern web design with intelligent AI chatbots that handle your customer interactions around the clock. No more missed opportunities because you couldn&apos;t respond fast enough. No more losing leads to competitors with better online systems.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              I work with small business owners, consultants, and entrepreneurs who are tired of websites that just sit there looking pretty. If you want a website that actively grows your business while you focus on what you do best, let&apos;s talk.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Based in Melbourne, Australia, I work with clients across the US and Australia. My timezone means I&apos;m often working while you sleep, so you wake up to progress every morning.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center text-slate-900 mb-8">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              {[
                { name: 'Next.js', color: 'from-black to-slate-800' },
                { name: 'React', color: 'from-cyan-500 to-blue-500' },
                { name: 'Anthropic API', color: 'from-orange-500 to-red-500' },
                { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-600' },
                { name: 'Vercel', color: 'from-black to-slate-700' },
                { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`px-6 py-3 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-6">
            What I Build
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Specialized services to help your business succeed online
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Landing Pages + AI Chatbots */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                AI-Powered Landing Pages
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Convert more visitors with landing pages that don&apos;t just look professional – they act professional. My integrated AI chatbots qualify leads, answer questions, and guide visitors toward booking or buying, turning your landing page into your best salesperson.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom AI personality for your brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Lead capture & qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Optimized for conversions</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Small Business Websites */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Small Business Websites
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Get a complete 5-10 page website that positions you as the expert you are. Every site includes an intelligent chatbot trained on your business, services, and FAQs. Your website becomes available 24/7, capturing opportunities even when you&apos;re not.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>SEO optimized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Easy content management</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Design-to-Code */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Figma to Website Development
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Already have a design? I&apos;ll transform your Figma mockups into fast, functional websites with seamless AI integration. Your designer&apos;s vision meets intelligent automation that actually drives business results.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Pixel-perfect implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Responsive across all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Clean, documented code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Recent work showcasing AI integration and modern web development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Zane on Fire Digital */}
            <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/zaneonfire-screenshot.png"
                  alt="Zane on Fire Digital - Agency Website Screenshot"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Zane on Fire Digital
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Modern agency website with intelligent lead qualification chatbot. Demonstrates bold creative design and AI-powered customer engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Anthropic API</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-medium rounded-full">Tailwind CSS</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://zaneonfire.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-200"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/Entelechyon/zaneonfire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Restaurant Website */}
            <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden border border-slate-200 opacity-75">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <svg className="w-20 h-20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="font-semibold">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Restaurant Website
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Modern restaurant website with online menu, reservations, and AI assistant to answer customer questions about menu items and allergens.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full">Claude AI</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-medium rounded-full">Tailwind</span>
                </div>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-slate-300 text-slate-500 font-semibold rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Project 3: Consultant Website */}
            <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden border border-slate-200 opacity-75">
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-yellow-500 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <svg className="w-20 h-20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="font-semibold">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Consultant Website
                </h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Professional consulting website with AI-powered chatbot for lead qualification, appointment booking, and FAQ handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Anthropic</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-medium rounded-full">TypeScript</span>
                </div>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-slate-300 text-slate-500 font-semibold rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-slate-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Ready to build something amazing? Get in touch and let&apos;s discuss your project.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href="mailto:zane@zanepriddle.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Email</p>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600">zane@zanepriddle.com</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Upwork Profile</p>
                    <p className="font-semibold text-slate-900 group-hover:text-green-600">View Profile (Add Later)</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Based in Melbourne, Australia</span> - Working while you sleep means you wake up to progress every morning.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    projectType: formData.get('projectType'),
                    message: formData.get('message'),
                  };
                  console.log('Form submitted:', data);
                  alert('Form data logged to console. Backend integration coming soon!');
                  e.currentTarget.reset();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-slate-900"
                  >
                    <option value="">Select a project type</option>
                    <option value="landing-page">Landing Page + AI Chatbot</option>
                    <option value="business-website">Small Business Website</option>
                    <option value="design-to-code">Design to Code</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-slate-900"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Zane Priddle
              </h3>
              <p className="text-slate-400">
                Building modern websites with AI-powered chatbots
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://github.com/Entelechyon" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/zaneonfire/" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:zane@zanepriddle.com" className="block text-slate-400 hover:text-cyan-400 transition-colors">
                  Email
                </a>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <h4 className="font-semibold mb-4">Powered By</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-slate-400">Anthropic API</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-slate-400">Hosted on Vercel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Zane Priddle. Built with Next.js and Claude AI</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
