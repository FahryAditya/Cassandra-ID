"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockSearchData = [
  {
    title: "Sociology of Otaku Identity & Digital Gatherings",
    type: "Research Paper",
    href: "/research",
    category: "Sociology",
  },
  {
    title: "Neural Style Transfer for Anime Keyframe Animation",
    type: "Innovation Project",
    href: "/innovation",
    category: "AI & Tech",
  },
  {
    title: "CloverOtaku.ID Heritage Archive & Timeline",
    type: "Archive",
    href: "/archive",
    category: "History",
  },
  {
    title: "Distilling WhatsApp Discussions into Structured Knowledge",
    type: "Knowledge Guide",
    href: "/knowledge",
    category: "Community",
  },
  {
    title: "Media History: Evolution of Indonesian Anime Communities",
    type: "Research Note",
    href: "/research",
    category: "Media History",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults = mockSearchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-border-subtle"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3 border-b border-border-subtle">
          <span className="material-symbols-outlined text-text-muted mr-3">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search research papers, innovation projects, knowledge..."
            className="w-full text-sm outline-none bg-transparent text-on-surface placeholder:text-text-muted"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-text-muted hover:text-on-surface hover:bg-surface-subtle"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-3 flex flex-col gap-1">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors group"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-text-muted">{item.category}</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-surface-subtle text-primary font-medium border border-border-subtle/50">
                  {item.type}
                </span>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-text-muted">
              No matching knowledge entries found.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 bg-surface-subtle border-t border-border-subtle/40 flex items-center justify-between text-[11px] text-text-muted">
          <span>Navigate with <strong>↑</strong> <strong>↓</strong></span>
          <span>Press <kbd className="px-1 py-0.5 bg-white border border-border-subtle rounded">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
