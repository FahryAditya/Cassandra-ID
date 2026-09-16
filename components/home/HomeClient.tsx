"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  path: string;
  icon: string;
  desc: string;
  color: string;
  badge: string;
  highlights: string[];
  detailText: string;
}

const metrics = [
  { value: "01", label: "Active Community Hub", color: "text-primary-container" },
  { value: "142+", label: "In-Depth Discussions", color: "text-accent-coral" },
  { value: "28", label: "Published Notes", color: "text-primary-container" },
  { value: "16", label: "Innovation Projects", color: "text-accent-coral" },
  { value: "349+", label: "Heritage Members", color: "text-accent-gold" },
];

const pillars: Pillar[] = [
  {
    title: "Research Hub",
    path: "/research",
    icon: "biotech",
    desc: "Analytical frameworks, sociolinguistic studies of otaku subculture, and computational narrative models.",
    color: "from-sky-500/10 to-blue-500/5",
    badge: "28 Papers",
    highlights: ["Sosiolinguistik Otaku", "Komputasi Naratif", "Metodologi Riset"],
    detailText: "Divisi riset independen yang menerbitkan paper analisis kualitatif dan kuantitatif mengenai fenomena otaku global & lokal.",
  },
  {
    title: "Innovation Lab",
    path: "/innovation",
    icon: "terminal",
    desc: "Active open-source tools, machine learning experiments, and web applications built by community members.",
    color: "from-orange-500/10 to-amber-500/5",
    badge: "16 Projects",
    highlights: ["Bot Open-Source", "Pipeline Dataset", "AI Generatif App"],
    detailText: "Laboratorium eksperimentasi teknologi tempat anggota komunitas berkolaborasi merancang bot, web app, dan tools.",
  },
  {
    title: "Knowledge Base",
    path: "/knowledge",
    icon: "menu_book",
    desc: "Distilled discussion archives, analytical guides, and permanent references extracted from real-time group chats.",
    color: "from-emerald-500/10 to-teal-500/5",
    badge: "142+ Guides",
    highlights: ["Rangkuman WA", "Panduan Sinematografi", "Glosarium Subkultur"],
    detailText: "Pusat dokumentasi terstruktur yang mengubah diskusi harian grup WhatsApp menjadi artikel panduan permanen.",
  },
  {
    title: "Clover Archive 🍀",
    path: "/archive",
    icon: "history_edu",
    desc: "Preserving the 5-year heritage, golden era milestones, and memory wall of the predecessor CloverOtaku.ID.",
    color: "from-red-500/10 to-rose-500/5",
    badge: "349 Members",
    highlights: ["Timeline 2021-2026", "Galeri Memori", "Warisan Komunitas"],
    detailText: "Museum digital yang memelihara sejarah 5 tahun perjalanan CloverOtaku.ID, merayakan kontribusi 349+ anggota pendahulu.",
  },
];

function PillarFlipCard({ p }: { p: Pillar }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-[320px] w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full p-6 bg-white rounded-2xl border border-border-subtle/70 flex flex-col justify-between shadow-xs group-hover:shadow-xl transition-shadow [backface-visibility:hidden]">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} border border-border-subtle flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-200`}>
                <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-surface-subtle text-text-muted border border-border-subtle">
                {p.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-2 font-serif">
              {p.title}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {p.desc}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-border-subtle/40 flex items-center justify-between text-xs font-bold text-primary">
            <span className="inline-flex items-center gap-1.5 text-text-muted group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px]">sync</span>
              <span>Klik untuk Detil</span>
            </span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={`absolute inset-0 w-full h-full p-6 rounded-2xl border border-border-subtle/80 bg-gradient-to-br ${p.color} bg-white flex flex-col justify-between shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Ringkasan Divisi
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="p-1 rounded-full hover:bg-black/5 text-text-muted hover:text-on-surface transition-colors"
                title="Tutup Card"
              >
                <span className="material-symbols-outlined text-[18px]">undo</span>
              </button>
            </div>

            <h4 className="text-lg font-bold text-on-surface font-serif mb-1.5">{p.title}</h4>
            <p className="text-[11px] text-text-muted leading-relaxed mb-4">{p.detailText}</p>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">Fokus Utama:</span>
              <div className="flex flex-wrap gap-1.5">
                {p.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/80 text-on-surface border border-border-subtle/60"
                  >
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border-subtle/40 flex items-center justify-between gap-2">
            <span className="text-[11px] font-medium text-text-muted flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">flip</span>
              <span>Klik kartu untuk balik</span>
            </span>

            <Link
              href={p.path}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-container text-white text-xs font-bold shadow-xs hover:bg-[#4AB3DC] transition-all"
            >
              <span>Buka Halaman</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HomeClient() {
  return (
    <div className="relative w-full overflow-hidden bg-surface-pure pb-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-primary-container/25 via-surface-container/30 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-36 -left-32 w-80 h-80 bg-accent-peach/20 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-44 -right-32 w-80 h-80 bg-primary-container/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* Hero Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-subtle border border-border-subtle shadow-xs mb-6"
          >
            <span className="text-accent-gold text-sm font-bold">✦</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Anime Community <span className="text-accent-gold">·</span> Research <span className="text-accent-gold">·</span> Innovation
            </span>
            <span className="text-accent-gold text-sm font-bold">✦</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-4 font-serif"
          >
            CASSANDRA<span className="text-primary-container">.ID</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-primary font-normal mb-6 max-w-2xl font-serif"
          >
            Where Anime Passion Meets Rigorous Research & Creative Innovation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mb-10"
          >
            Not an ordinary anime fandom. Cassandra.ID is the official portal and living archive documenting ideas, research papers, technology experiments, and community discussions born from our core community.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full mb-14"
          >
            <a
              href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-primary-container text-white font-semibold text-sm shadow-md hover:bg-[#4AB3DC] hover:-translate-y-0.5 transition-all duration-150"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Join Community (WhatsApp)</span>
            </a>
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-surface-container-low text-primary font-semibold text-sm hover:bg-surface-container transition-all duration-150 shadow-xs border border-border-subtle/50"
            >
              <span className="material-symbols-outlined text-[20px]">biotech</span>
              <span>Explore Research & Lab</span>
            </Link>
          </motion.div>

          {/* Metric Counter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full bg-surface-subtle/90 backdrop-blur-md rounded-2xl p-6 border border-border-subtle/60 shadow-sm"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle/40">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-2 pt-2 sm:pt-0">
                  <span className={`text-4xl font-extrabold tracking-tight ${m.color}`}>
                    {m.value}
                  </span>
                  <span className="text-xs text-text-muted uppercase tracking-wider font-semibold mt-1 text-center">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 my-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-border-subtle/60" />
        <div className="flex items-center gap-1.5 text-accent-gold text-xs font-semibold uppercase tracking-widest text-text-muted px-2">
          <span className="material-symbols-outlined text-[14px]">star</span>
          <span>Ecosystem Architecture</span>
          <span className="material-symbols-outlined text-[14px]">star</span>
        </div>
        <div className="h-px flex-1 bg-border-subtle/60" />
      </div>

      {/* Four Core Hub Cards Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary mb-1">
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
              <span className="text-xs uppercase tracking-widest font-bold">Knowledge Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface font-serif">
              Pillars of Scientific Fandom
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            Klik kartu di bawah untuk membalikkan kartu dan melihat ringkasan divisi & fokus utama.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <PillarFlipCard p={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Research Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
        <div className="bg-gradient-to-r from-surface-container-low via-surface-subtle to-white rounded-3xl p-8 sm:p-12 border border-border-subtle shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Featured Publication
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface font-serif">
              Deconstructing Modern Otaku Culture: A Sociological Perspective
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Explore our landmark research paper analyzing how digital communities transform passive media consumption into collaborative research and innovative projects.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-on-surface text-white font-semibold text-xs hover:bg-primary transition-colors shadow-sm shrink-0"
          >
            <span>Read Research Paper</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Clover Archive Heritage Teaser */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 rounded-3xl p-8 sm:p-12 border border-accent-gold/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 text-amber-900 text-xs font-bold w-fit border border-accent-gold/40">
              <span>🍀 CloverOtaku.ID Legacy Archive</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface font-serif">
              Honoring 5+ Years of Community Heritage
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Before Cassandra.ID was born, 349+ members established the golden era of CloverOtaku.ID. Step into the museum archive to revisit community memories, messages, and timeline history.
            </p>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-gold text-on-surface font-bold text-xs hover:bg-amber-400 transition-colors shadow-sm shrink-0 z-10"
          >
            <span>Enter Museum Archive</span>
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
