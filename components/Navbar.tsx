"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchModal from "./SearchModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Research", href: "/research" },
  { label: "Innovation", href: "/innovation" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Archive 🍀", href: "/archive" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-border-subtle/50 shadow-[0_1px_8px_rgba(27,42,56,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-primary-container p-0.5 shadow-[0_2px_8px_rgba(94,193,232,0.25)] transition-transform duration-200 group-hover:scale-105 flex items-center justify-center text-white font-bold text-lg">
                🍁
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-on-surface leading-none font-body">
                  CASSANDRA<span className="text-primary-container">.ID</span>
                </span>
                <span className="text-xs tracking-wider text-text-muted mt-0.5">
                  Anime · Research · Innovation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 p-1 bg-surface-subtle/80 rounded-full border border-border-subtle/40">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-surface-container text-primary font-bold shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search portal"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 h-10 rounded-full bg-surface-subtle text-text-muted hover:text-on-surface hover:bg-surface-container-low transition-colors duration-150 border border-border-subtle/30"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              <span className="text-xs hidden md:inline">Search knowledge...</span>
              <kbd className="hidden lg:inline-block text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-text-muted shadow-xs border border-border-subtle">
                ⌘K
              </kbd>
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://chat.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary-container text-white text-xs font-semibold shadow-[0_4px_14px_-2px_rgba(94,193,232,0.45)] hover:bg-[#4AB3DC] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Join WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-surface-subtle text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-surface-pure border-t border-border-subtle px-6 py-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-surface-container text-primary font-bold"
                      : "text-on-surface-variant hover:bg-surface-subtle"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
