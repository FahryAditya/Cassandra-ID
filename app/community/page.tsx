"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Anime & Media Analysis",
    count: "48 Obrolan Active",
    icon: "movie_filter",
    desc: "Diskusi mendalam alur cerita, analisis sinematografi, dan struktur visual.",
  },
  {
    name: "Sains & Teknologi",
    count: "35 Proyek & Ide",
    icon: "code_blocks",
    desc: "Eksperimen pemrograman, AI, sains komputer, dan eksplorasi teknis.",
  },
  {
    name: "Sosiologi & Budaya",
    count: "29 Topik Riset",
    icon: "public",
    desc: "Kajian fenomena subkultur, dinamika komunitas digital, dan identitas.",
  },
  {
    name: "Filsafat & Kreatif",
    count: "30 Esai Diskusi",
    icon: "edit_note",
    desc: "Eksplorasi ide filosofis, penulisan narasi, dan desain visual.",
  },
];

const upcomingEvents = [
  {
    title: "Weekend Research Sharing: Generative AI for Keyframes",
    date: "Sabtu, 20:00 WIB",
    speaker: "Komunitas Innovators",
    tag: "Online Meeting",
  },
  {
    title: "Bedah Karya: Narrative Structure in Classic Cyberpunk",
    date: "Minggu, 19:30 WIB",
    speaker: "Research Circle",
    tag: "WhatsApp Live Discussion",
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Hero */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold mb-4"
        >
          <span className="material-symbols-outlined text-[16px]">groups</span>
          <span>Community Hub</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-4">
          Ruang Diskusi & Kolaborasi Interaktif
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Tempat bertukarnya ide-ide segar setiap hari secara real-time. Dari obrolan santai hingga lahirnya riset dan proyek perangkat lunak baru.
        </p>
      </div>

      {/* Primary WhatsApp Card Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Grup WhatsApp Utama</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif">
            Bergabunglah dalam Obrolan Real-time
          </h2>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            WhatsApp adalah tempat jantung komunitas kami berdetak. Berdiskusi secara bebas, membagikan referensi, dan berkolaborasi secara langsung.
          </p>
        </div>
        <a
          href="https://chat.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-emerald-700 font-bold text-sm shadow-md hover:bg-slate-50 transition-transform active:scale-95 shrink-0"
        >
          <span className="material-symbols-outlined text-[20px]">group_add</span>
          <span>Masuk WhatsApp Group</span>
        </a>
      </div>

      {/* Discussion Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-on-surface font-serif mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">forum</span>
          Kategori Diskusi Komunitas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 bg-white rounded-2xl border border-border-subtle/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-serif mb-1">{cat.name}</h3>
                <p className="text-xs text-text-muted mb-4">{cat.desc}</p>
              </div>
              <span className="text-[11px] font-bold text-primary px-3 py-1 rounded-full bg-surface-subtle border border-border-subtle/50 w-fit">
                {cat.count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Community Events */}
      <div className="bg-surface-subtle p-8 rounded-3xl border border-border-subtle/70">
        <h2 className="text-xl font-bold text-on-surface font-serif mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-coral text-[22px]">event</span>
          Agenda & Diskusi Mendatang
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((evt, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-border-subtle flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-accent-gold/20 text-amber-900 mb-3 inline-block">
                  {evt.tag}
                </span>
                <h3 className="text-base font-bold text-on-surface mb-2 font-serif">{evt.title}</h3>
                <p className="text-xs text-text-muted">Pemantik: {evt.speaker}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border-subtle/40 flex items-center justify-between text-xs font-semibold text-primary">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  {evt.date}
                </span>
                <span>Pengingat Ditambahkan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
