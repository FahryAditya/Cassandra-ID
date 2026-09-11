"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Sociology", "AI & Computational", "Narrative & Media"];

const papers = [
  {
    id: 1,
    title: "Deconstructing Otaku Identity: From Solitary Consumption to Networked Research",
    author: "Cassandra Research Group",
    category: "Sociology",
    date: "September 2026",
    abstract: "Analisis sosiologis mengenai pergeseran paradigma komunitas otaku dari sekadar konsumsi media menjadi entitas kolaboratif berorientasi riset dan inovasi perangkat lunak.",
    reads: "1,240",
    tags: ["Sociology", "Subculture", "Digital Media"],
  },
  {
    id: 2,
    title: "Neural Style Transfer & Structural Keyframe Synthesis in Anime Production",
    author: "Innovation Lab - AI Division",
    category: "AI & Computational",
    date: "Agustus 2026",
    abstract: "Eksplorasi penggunaan arsitektur deep learning untuk mempercepat proses in-betweening dan penyelarasan warna pada animasi 2D modern.",
    reads: "2,890",
    tags: ["AI", "Computer Vision", "Animation"],
  },
  {
    id: 3,
    title: "Narrative Tropes in 90s Cyberpunk: Aesthetic & Philosophical Lineage",
    author: "Media Heritage Team",
    category: "Narrative & Media",
    date: "Juli 2026",
    abstract: "Studi komparatif struktur naratif anime sci-fi klasik era 90-an dan pengaruh filsafat eksistensialisme terhadap desain dunia futuristik.",
    reads: "980",
    tags: ["Cyberpunk", "Media History", "Philosophy"],
  },
  {
    id: 4,
    title: "Computational Analysis of Dialogue Complexity in Modern Anime",
    author: "Linguistic Working Group",
    category: "AI & Computational",
    date: "Juni 2026",
    abstract: "Penggunaan pemrosesan bahasa alami (NLP) untuk mengukur tingkat kompleksitas kosakata dan struktur naratif pada subtitle seri anime terpopuler.",
    reads: "1,450",
    tags: ["NLP", "Linguistics", "Data Science"],
  },
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePaper, setActivePaper] = useState<(typeof papers)[0] | null>(null);

  const filteredPapers = papers.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
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
          <span className="material-symbols-outlined text-[16px]">biotech</span>
          <span>Cassandra Research Hub</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-4">
          Publikasi Makalah & Catatan Penelitian
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Wadah publikasi ilmiah, esai analitis, dan studi komputasional terstruktur yang lahir dari diskusi mendalam anggota komunitas Cassandra.ID.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-150 ${
              selectedCategory === cat
                ? "bg-primary text-white shadow-sm"
                : "bg-surface-subtle text-on-surface-variant hover:bg-surface-container border border-border-subtle"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredPapers.map((paper) => (
            <motion.div
              key={paper.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-white rounded-2xl border border-border-subtle/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-surface-container text-primary border border-border-subtle/50">
                    {paper.category}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    {paper.reads} views
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface font-serif mb-2 leading-snug hover:text-primary transition-colors cursor-pointer" onClick={() => setActivePaper(paper)}>
                  {paper.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                  {paper.abstract}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {paper.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-subtle text-text-muted border border-border-subtle">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border-subtle/40 flex items-center justify-between text-xs">
                  <span className="text-text-muted font-medium">{paper.author}</span>
                  <button
                    type="button"
                    onClick={() => setActivePaper(paper)}
                    className="font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Baca Abstrak</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Paper Reader Modal */}
      {activePaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-subtle relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActivePaper(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-subtle text-text-muted hover:text-on-surface"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
              {activePaper.category} · {activePaper.date}
            </span>
            <h2 className="text-2xl font-bold text-on-surface font-serif mb-3 leading-snug">
              {activePaper.title}
            </h2>
            <p className="text-xs text-text-muted mb-6">Penulis: {activePaper.author}</p>
            <div className="bg-surface-subtle p-4 rounded-xl border border-border-subtle mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-2">Abstrak Lengkap</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {activePaper.abstract}
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActivePaper(null)}
                className="px-5 py-2.5 rounded-full bg-surface-subtle text-xs font-semibold text-text-muted"
              >
                Tutup
              </button>
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary-container transition-colors"
              >
                Diskusi Makalah di WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
