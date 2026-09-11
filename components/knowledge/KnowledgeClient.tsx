"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Panduan Membaca & Menganalisis Struktur Sinematografi Anime 2D",
    category: "Panduan & Tutorial",
    author: "Knowledge Team",
    date: "10 September 2026",
    readTime: "6 min read",
    snippet: "Panduan ringkas bagi anggota komunitas yang ingin membedah layout, pergerakan kamera, dan komposisi warna pada adegan aksi anime modern.",
  },
  {
    title: "Rangkuman Diskusi: Pengaruh AI pada Masa Depan Industri Animasi",
    category: "Rangkuman Obrolan WA",
    author: "Archivist Circle",
    date: "5 September 2026",
    readTime: "8 min read",
    snippet: "Distilasi dari obrolan maraton grup WhatsApp tanggal 3-4 September mengenai pro-kontra penggunaan generative AI dalam pembuatan storyboard.",
  },
  {
    title: "Sejarah & Evolusi Istilah 'Otaku': Dari Pejoratif Menjadi Identitas Riset",
    category: "Arsip Komunitas",
    author: "Heritage Working Group",
    date: "28 Agustus 2026",
    readTime: "10 min read",
    snippet: "Tinjauan historis perkembangan makna kata otaku di Jepang dan Indonesia dari dekade 1980-an hingga era komunitas berbasis digital saat ini.",
  },
  {
    title: "Metodologi Pengumpulan Data Subkultur untuk Riset Akademik",
    category: "Metodologi",
    author: "Research Lead",
    date: "15 Agustus 2026",
    readTime: "5 min read",
    snippet: "Langkah-langkah etis dan terstruktur dalam mengumpulkan survei dan kuesioner dari anggota komunitas digital.",
  },
];

export default function KnowledgeClient() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold mb-4"
        >
          <span className="material-symbols-outlined text-[16px]">menu_book</span>
          <span>Knowledge Base</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-4">
          Pusat Pengetahuan & Dokumentasi Permanen
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
          Hasil distilasi dari obrolan grup WhatsApp, panduan analisis teknis, dan arsip referensi yang siap dibaca kapan saja.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari artikel, panduan, atau rangkuman obrolan..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-border-subtle shadow-xs text-sm outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredArticles.map((art, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3 }}
            className="p-6 bg-white rounded-2xl border border-border-subtle/80 shadow-xs hover:border-primary-container transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-surface-subtle text-primary border border-border-subtle/60">
                  {art.category}
                </span>
                <span className="text-xs text-text-muted">{art.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface font-serif mb-2 leading-snug hover:text-primary transition-colors cursor-pointer">
                {art.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {art.snippet}
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle/40 flex items-center justify-between text-xs text-text-muted">
              <span>{art.author} · {art.date}</span>
              <button type="button" className="font-bold text-primary hover:underline flex items-center gap-1">
                <span>Baca Artikel</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
