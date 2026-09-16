"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-surface-pure border-t border-border-subtle/50 pt-20 pb-12 mt-24 overflow-hidden">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary-container/50 to-transparent" />

      {/* Ambient Background Glow Spots */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-accent-coral/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-border-subtle/60">
          {/* Brand Info (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-5 pr-0 md:pr-8">
            <Link href="/" className="flex items-center gap-3.5 group w-fit">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Cassandra.ID Logo"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-2xl object-cover shadow-md ring-2 ring-primary-container/30 group-hover:ring-primary-container group-hover:scale-105 transition-all duration-300"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-on-surface font-serif">
                  CASSANDRA<span className="text-primary-container">.ID</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Community & Research Portal
                </span>
              </div>
            </Link>

            <p className="text-xs text-text-muted leading-relaxed max-w-md">
              Official portal and living archive documenting ideas, research papers, technology experiments, and community discussions born from our core otaku scholars.
            </p>

            {/* Ecosystem Tag Chain */}
            <div className="flex items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-surface-subtle border border-border-subtle text-[11px] font-bold text-primary shadow-2xs">
                Community
              </span>
              <span className="text-accent-gold text-xs font-bold">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-surface-subtle border border-border-subtle text-[11px] font-bold text-accent-coral shadow-2xs">
                Knowledge
              </span>
              <span className="text-accent-gold text-xs font-bold">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-surface-subtle border border-border-subtle text-[11px] font-bold text-emerald-600 shadow-2xs">
                Innovation
              </span>
            </div>
          </div>

          {/* Ecosystem Column (Spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-on-surface font-serif flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/research" className="group flex items-center justify-between text-text-muted hover:text-primary transition-colors py-0.5">
                  <span>Research Hub & Papers</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="group flex items-center justify-between text-text-muted hover:text-primary transition-colors py-0.5">
                  <span>Innovation Lab Projects</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="group flex items-center justify-between text-text-muted hover:text-primary transition-colors py-0.5">
                  <span>Knowledge Base Archive</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                </Link>
              </li>
              <li>
                <Link href="/community" className="group flex items-center justify-between text-text-muted hover:text-primary transition-colors py-0.5">
                  <span>Community Forums</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Heritage Column (Spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-on-surface font-serif flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              Heritage
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/archive" className="group flex items-center gap-1.5 text-text-muted hover:text-amber-800 transition-colors py-0.5">
                  <span>🍀 CloverOtaku.ID Museum</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center justify-between text-text-muted hover:text-primary transition-colors py-0.5">
                  <span>Vision & Manifesto</span>
                </Link>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-emerald-600 transition-colors py-0.5 block">
                  WhatsApp Group
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029Vb7vIyCH5JM2HKbvjH0v" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-emerald-600 transition-colors py-0.5 block">
                  Saluran WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column (Spans 2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-on-surface font-serif flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                aria-label="GitHub Repository"
                title="GitHub & Source Code"
                className="w-9 h-9 rounded-xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-on-surface hover:text-primary hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb7vIyCH5JM2HKbvjH0v"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saluran WhatsApp"
                title="Saluran WhatsApp Resmi"
                className="w-9 h-9 rounded-xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-on-surface hover:text-emerald-600 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">campaign</span>
              </a>
              <a
                href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grup WhatsApp"
                title="Grup WhatsApp Komunitas"
                className="w-9 h-9 rounded-xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-on-surface hover:text-emerald-600 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
            </div>
            <p className="text-[11px] text-text-muted leading-tight mt-1">
              Join our vibrant digital hub for daily research & tech discussions.
            </p>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p>© {new Date().getFullYear()} Cassandra.ID. Built for Otaku Scholars & Innovators.</p>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/archive" className="hover:text-accent-gold transition-colors flex items-center gap-1">
              <span>Legacy Archive</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-900 border border-amber-500/30 font-bold">5Y+</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
