"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Anime-Keyframe-Diffusion",
    status: "Active",
    statusColor: "bg-emerald-500 text-emerald-950",
    desc: "Perangkat lunak open-source berbasis PyTorch untuk sintesis kerangka kunci animasi 2D dengan akselerasi GPU.",
    tech: ["Python", "PyTorch", "CUDA", "FastAPI"],
    stars: "142",
    forks: "28",
  },
  {
    title: "Cassandra Portal Next.js Engine",
    status: "Active",
    statusColor: "bg-emerald-500 text-emerald-950",
    desc: "Arsitektur frontend modern menggunakan Next.js 16, Tailwind CSS v4, dan Framer Motion untuk portal Cassandra.ID.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    stars: "89",
    forks: "14",
  },
  {
    title: "WhatsApp Chat Transcriber & Knowledge Distiller",
    status: "In Progress",
    statusColor: "bg-amber-500 text-amber-950",
    desc: "Bot dan pipeline pemrosesan teks otomatis untuk mengekstrak poin obrolan penting menjadi artikel panduan terstruktur.",
    tech: ["Python", "NLP", "SQLite", "LLM API"],
    stars: "56",
    forks: "9",
  },
  {
    title: "Otaku Community Graph & Sociogram Visualizer",
    status: "Concept",
    statusColor: "bg-cyan-500 text-cyan-950",
    desc: "Visualisasi peta hubungan topik dan interaksi anggota komunitas menggunakan D3.js dan pemeta grafik.",
    tech: ["React", "D3.js", "Graphology"],
    stars: "34",
    forks: "5",
  },
];

export default function InnovationClient() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold mb-4"
        >
          <span className="material-symbols-outlined text-[16px]">terminal</span>
          <span>Innovation Lab</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-4">
          Showcase Proyek & Eksperimen Kode
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Ruang pameran alat open-source, pustaka perangkat lunak, dan eksperimen kecerdasan buatan yang dikembangkan secara mandiri oleh anggota Cassandra.ID.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 bg-white rounded-2xl border border-border-subtle/80 shadow-xs hover:border-primary-container transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${p.statusColor}`}>
                  ● {p.status}
                </span>
                <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
                  <span className="flex items-center gap-1">★ {p.stars}</span>
                  <span className="flex items-center gap-1">⌥ {p.forks}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-on-surface font-mono mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-surface-subtle text-on-surface-variant border border-border-subtle">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border-subtle/40 flex items-center justify-between text-xs">
                <span className="text-text-muted">Repository Open-Source</span>
                <a
                  href="#"
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Lihat di GitHub</span>
                  <span className="material-symbols-outlined text-[16px]">code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Submit Experiment Card */}
      <div className="bg-gradient-to-br from-surface-container via-surface-subtle to-white rounded-3xl p-8 sm:p-12 border border-border-subtle text-center flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-[24px]">add_code</span>
        </div>
        <h2 className="text-2xl font-bold text-on-surface font-serif">
          Punya Proyek Perangkat Lunak atau Ide Eksperimen?
        </h2>
        <p className="text-xs sm:text-sm text-text-muted max-w-lg leading-relaxed">
          Kami mendukung penuh setiap inisiatif anggota. Publikasikan proyek Anda di Innovation Lab Cassandra.ID untuk mendapatkan kolaborator dan masukan teknis.
        </p>
        <a
          href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-bold shadow-md hover:bg-primary-container transition-colors"
        >
          Ajukan Proyek di WhatsApp Group
        </a>
      </div>
    </div>
  );
}
