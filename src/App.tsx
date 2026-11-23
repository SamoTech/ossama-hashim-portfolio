/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Smartphone, 
  Code2, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Youtube, 
  Globe, 
  Menu, 
  X, 
  ArrowRight,
  BookMarked,
  Layers,
  Terminal,
  FileText,
  Download
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono text-sm shadow-xs">OH</span>
            <span>Ossama Hashim</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#apps" className="hover:text-indigo-600 transition-colors">Apps</a>
            <a href="#books" className="hover:text-indigo-600 transition-colors">Books</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-indigo-600 font-medium border-b border-slate-100"
            >
              About
            </a>
            <a 
              href="#apps" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-indigo-600 font-medium border-b border-slate-100"
            >
              Apps
            </a>
            <a 
              href="#books" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-indigo-600 font-medium border-b border-slate-100"
            >
              Books
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-indigo-600 font-medium border-b border-slate-100"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-indigo-600 font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        {/* 1. HERO SECTION */}
        <section className="pt-12 pb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
              <span>Cairo, Egypt</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ossama Hashim
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed">
              Author, Android developer & open-source builder.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a 
                href="#books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-all"
              >
                <BookOpen size={18} />
                <span>Explore Books</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="#apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-medium border border-slate-300 shadow-xs transition-all"
              >
                <Smartphone size={18} />
                <span>Android Apps</span>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-auto flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 shadow-xl">
              <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl font-bold shadow-inner">
                  OH
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">SamoTech Studio</h3>
                  <p className="text-xs text-slate-500 mt-1">Publisher & Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="scroll-mt-24 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              <Layers size={16} />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Crafting stories and calm Android software
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              Ossama Hashim is an author and Android developer from Cairo, Egypt. He writes psychological thrillers and children's coloring books, builds calm Android apps under the SamoTech studio, and publishes open-source tools on GitHub.
            </p>
          </div>
        </section>

        {/* 3. ANDROID APPS SECTION */}
        <section id="apps" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                <Smartphone size={16} />
                <span>Android Apps</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
                SamoTech Android Portfolio
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              High-performance, mindful, and offline-first mobile utilities and creative apps built for Android.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* App 1: Luca Download Manager */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Luca Download Manager</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v25.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Download size={20} />
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Multi-protocol Android download accelerator featuring 32-segment dynamic work-stealing HTTP, BitTorrent & magnet engine, YouTube/HLS muxing, and a crash-proof native smart browser.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Google Play</span>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.samotech.Lucadownloadmanager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>View on Play Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* App 2: Mandala Art */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Mandala Art</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v427.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <BookMarked size={20} />
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Color your calm. Mindful offline-first Android coloring studio featuring non-repeating geometric & floral mandalas with weekly drops, Daily Streak rewards, Symmetry Fill, Eyedropper, Shimmer Finish, 3 export formats, 4 procedural soundscapes, 8 languages.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Google Play</span>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.samotech.mandalaart" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>View on Play Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* App 3: SamoTech Multi Model Chat */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">SamoTech Multi Model Chat</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v2.5</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Terminal size={20} />
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All-in-one free multi-provider AI agent studio for Android featuring Zero-Config Magic Key detection, inline @model switching with Shared Memory, 3-Agent Auto-Pipeline Council, 2-Model Arena Compare, Vibe Coding live sandbox, voice/photo input, and JSON backup.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Google Play</span>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.samotech.samotechmultimodelchat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>View on Play Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* App 4: Egypt Travel Guide */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Egypt Travel Guide</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v3.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Globe size={20} />
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Offline-first native Android travel companion covering 10 Egyptian regions, 45 verified attractions across all 7 UNESCO World Heritage Sites, Custom Explorer Map, Day-by-Day Trip Planner, Explorer Passport, and 3-Mode AI Guide across 12 languages.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Google Play</span>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.samotech.museum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <span>View on Play Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* App 5: Dinosaur Coloring Book (app) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dinosaur Coloring Book (app)</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v1.0.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A calm, screen-friendly coloring experience for curious kids and grown-ups.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 italic">Coming Soon</span>
                <span className="text-xs font-medium text-slate-400">No Play link yet</span>
              </div>
            </div>

            {/* App 6: Pixel Art Studio */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Pixel Art Studio</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">v1.0.0</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Code2 size={20} />
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 italic">In Development</span>
                <span className="text-xs font-medium text-slate-400">No link available</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BOOKS SECTION */}
        <section id="books" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                <BookOpen size={16} />
                <span>Books & Publishing</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Published Books
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Psychological thrillers and imaginative coloring books for readers and children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">The Names Beneath the Static</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">Psychological thriller</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Kindle — $3.99</span>
                    <a 
                      href="https://www.amazon.com/dp/B0HQWJB8SQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Paperback — $11.99</span>
                    <a 
                      href="https://www.amazon.com/dp/B0HQWH7TTK" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">My First Ancient Egypt ABC & Numbers Adventure</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">Children's book, ages 3-6</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Paperback — $10.99</span>
                    <a 
                      href="https://www.amazon.com/dp/B0HQD85FLN" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Little Dino Playtime: Big and Easy Dinosaur Coloring Book for Kids Ages 4-8</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">Children's coloring book, ages 4-8</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Paperback — $9.99</span>
                    <a 
                      href="https://www.amazon.com/dp/B0HP83RCTV" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dinosaur Coloring Book for Kids Ages 4-8</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">Children's coloring book, ages 4-8</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Paperback — $7.99</span>
                    <a 
                      href="https://www.amazon.com/dp/B0HP7NBD9V" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
            <p className="text-indigo-900 font-medium">
              More on Amazon:{' '}
              <a 
                href="https://www.amazon.com/author/ossama.hashim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-semibold hover:text-indigo-700 inline-flex items-center gap-1 ml-1"
              >
                <span>https://www.amazon.com/author/ossama.hashim</span>
                <ExternalLink size={14} />
              </a>
            </p>
          </div>
        </section>

        {/* 5. OPEN SOURCE PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                <Code2 size={16} />
                <span>Open Source</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Open Source Projects
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Tools, protocols, AI registries, and media players published under SamoTech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">Radio Atlas</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Smart directory of online radio stations and SDR receivers, updated automatically.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a 
                  href="https://samotech.github.io/Radio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>Live Site</span>
                  <ExternalLink size={12} />
                </a>
                <span className="text-slate-300">•</span>
                <a 
                  href="https://github.com/SamoTech/Radio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">samotech-iptv-player</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A modern IPTV player — M3U playlists, EPG, and streaming protocols.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/samotech-iptv-player" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">skills-tree</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Universal, platform-agnostic skills and capability registry for AI agents.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/skills-tree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">DRIXL</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Compressed inter-agent communication protocol for multi-agent AI systems.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/DRIXL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">memoryos</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Local-first AI memory layer — persistent, searchable memory for any AI assistant.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/memoryos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">Farik</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Free open-source HR for growing teams.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/Farik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 7 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">E2ScreenRecorder</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Full-featured Enigma2 Screen Recorder plugin — screenshots & video from the framebuffer.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/E2ScreenRecorder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 8 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">devlens</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  GitHub Action that scores repository health across 9 transparent dimensions.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/devlens" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Project 9 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 font-mono text-sm">notevo</h3>
                  <Github size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Private encrypted notes with Markdown support.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a 
                  href="https://github.com/SamoTech/notevo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center">
            <p className="text-slate-700 font-medium">
              More on GitHub:{' '}
              <a 
                href="https://github.com/SamoTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 ml-1"
              >
                <span>https://github.com/SamoTech</span>
                <ExternalLink size={14} />
              </a>
            </p>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              <Mail size={16} />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Contact & Social Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Author Email</p>
                <p className="text-lg font-mono font-medium text-slate-900 select-all">
                  samo.hossam@gmail.com
                </p>
                <p className="text-xs text-slate-500">Visible as plain text for inquiries.</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Studio Support</p>
                <p className="text-lg font-mono font-medium text-slate-900 select-all">
                  ossam.hashim@gmail.com
                </p>
                <p className="text-xs text-slate-500">For SamoTech app support and inquiries.</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">All Links Hub</p>
                <a 
                  href="https://linktr.ee/ossamahashimbooks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-indigo-600 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>https://linktr.ee/ossamahashimbooks</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
              <h3 className="font-bold text-slate-900 mb-2">Connect Online</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/ossamahashim/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors text-slate-700 hover:text-indigo-600 font-medium text-sm"
                  >
                    <Linkedin size={18} className="text-indigo-600" />
                    <span>LinkedIn</span>
                    <ExternalLink size={12} className="ml-auto text-slate-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/OssamaHashim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors text-slate-700 hover:text-indigo-600 font-medium text-sm"
                  >
                    <Globe size={18} className="text-indigo-600" />
                    <span>X (Twitter)</span>
                    <ExternalLink size={12} className="ml-auto text-slate-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@OssamaHashimAudio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors text-slate-700 hover:text-indigo-600 font-medium text-sm"
                  >
                    <Youtube size={18} className="text-rose-600" />
                    <span>YouTube</span>
                    <ExternalLink size={12} className="ml-auto text-slate-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.goodreads.com/author/show/73207591.Ossama_Hashim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors text-slate-700 hover:text-indigo-600 font-medium text-sm"
                  >
                    <BookOpen size={18} className="text-amber-600" />
                    <span>Goodreads Author Page</span>
                    <ExternalLink size={12} className="ml-auto text-slate-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-24 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ossama Hashim. All rights reserved.</p>
          <p className="font-mono text-xs">Author, Android Developer & Open-Source Builder</p>
        </div>
      </footer>
    </div>
  );
}
