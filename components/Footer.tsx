"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-pure border-t border-border-subtle/60 pt-16 pb-12 mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-subtle/50">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Cassandra.ID Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover shadow-[0_2px_8px_rgba(94,193,232,0.25)] ring-2 ring-primary-container/30"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-on-surface leading-none">
                  CASSANDRA<span className="text-primary-container">.ID</span>
                </span>
                <span className="text-xs text-text-muted mt-0.5">Community & Research</span>
              </div>
            </Link>
            <p className="text-xs text-text-muted leading-relaxed">
              Official portal and living archive documenting ideas, research papers, technology experiments, and community discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Ecosystem</h4>
            <Link href="/research" className="text-xs text-text-muted hover:text-primary transition-colors">
              Research Hub & Papers
            </Link>
            <Link href="/innovation" className="text-xs text-text-muted hover:text-primary transition-colors">
              Innovation Lab Projects
            </Link>
            <Link href="/knowledge" className="text-xs text-text-muted hover:text-primary transition-colors">
              Knowledge Base Archive
            </Link>
            <Link href="/community" className="text-xs text-text-muted hover:text-primary transition-colors">
              Community Forums
            </Link>
          </div>

          {/* Heritage & Archive */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Heritage</h4>
            <Link href="/archive" className="text-xs text-text-muted hover:text-accent-coral transition-colors flex items-center gap-1">
              <span>🍀 CloverOtaku.ID Museum</span>
            </Link>
            <Link href="/about" className="text-xs text-text-muted hover:text-primary transition-colors">
              Community Vision & Manifesto
            </Link>
            <a href="https://chat.whatsapp.com/HDxHiAw8MHw97WHNw1L8KZ" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-primary transition-colors">
              WhatsApp Community Group
            </a>
            <a href="https://whatsapp.com/channel/0029Vb7vIyCH5JM2HKbvjH0v" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-emerald-600 transition-colors flex items-center gap-1">
              <span>Saluran WhatsApp Resmi</span>
            </a>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-full bg-surface-subtle flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
              <a href="https://whatsapp.com/channel/0029Vb7vIyCH5JM2HKbvjH0v" target="_blank" rel="noopener noreferrer" aria-label="Saluran WhatsApp" className="w-8 h-8 rounded-full bg-surface-subtle flex items-center justify-center text-on-surface-variant hover:text-emerald-600 hover:bg-surface-container-low transition-colors" title="Saluran WhatsApp">
                <span className="material-symbols-outlined text-[18px]">campaign</span>
              </a>
              <a href="https://chat.whatsapp.com/HDxHiAw8MHw97WHNw1L8KZ" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Group" className="w-8 h-8 rounded-full bg-surface-subtle flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors" title="Grup WhatsApp">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
            <p className="text-[11px] text-text-muted mt-2">
              Community → Knowledge → Innovation
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>© {new Date().getFullYear()} Cassandra.ID. Built for Otaku Scholars & Innovators.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-on-surface transition-colors">Terms</Link>
            <Link href="/archive" className="hover:text-accent-gold transition-colors">Legacy Archive</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
