"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Category {
  name: string;
  count: string;
  icon: string;
  desc: string;
  color: string;
  highlights: string[];
  detailText: string;
}

const categories: Category[] = [
  {
    name: "Anime & Media Analysis",
    count: "48 Obrolan Active",
    icon: "movie_filter",
    desc: "Diskusi mendalam alur cerita, analisis sinematografi, dan struktur visual.",
    color: "from-sky-500/10 to-blue-500/5",
    highlights: ["Komposisi Keyframe", "Struktur Naratif", "Subteks & Simbolisme"],
    detailText: "Forum pembedahan episode anime mingguan, penyutradaraan sinematik, serta analisis motif visual karya animasi modern & klasik.",
  },
  {
    name: "Sains & Teknologi",
    count: "35 Proyek & Ide",
    icon: "code_blocks",
    desc: "Eksperimen pemrograman, AI, sains komputer, dan eksplorasi teknis.",
    color: "from-orange-500/10 to-amber-500/5",
    highlights: ["Generative AI", "Bot Automation", "Dataset Pipeline"],
    detailText: "Ruang kolaborasi teknis tempat para developer & peminat sains membangun alat bantu open-source dan model eksperimen AI.",
  },
  {
    name: "Sosiologi & Budaya",
    count: "29 Topik Riset",
    icon: "public",
    desc: "Kajian fenomena subkultur, dinamika komunitas digital, dan identitas.",
    color: "from-emerald-500/10 to-teal-500/5",
    highlights: ["Dinamika Fandom", "Kultivasi Komunitas", "Identitas Otaku"],
    detailText: "Kajian kritis evolusi budaya pop, dinamika grup obrolan digital, serta analisis sosiolinguistik identitas komunitas otaku.",
  },
  {
    name: "Filsafat & Kreatif",
    count: "30 Esai Diskusi",
    icon: "edit_note",
    desc: "Eksplorasi ide filosofis, penulisan narasi, dan desain visual.",
    color: "from-purple-500/10 to-rose-500/5",
    highlights: ["Eksistensialisme Anime", "Worldbuilding", "Psikologi Karakter"],
    detailText: "Diskusi bertema esai mengenai tema eksistensial dalam karya seperti Cyberpunk & Evangelion, penulisan cerita, dan konsep visual.",
  },
];

function CategoryFlipCard({ cat }: { cat: Category }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-[310px] w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full p-6 bg-white rounded-2xl border border-border-subtle/80 shadow-xs group-hover:shadow-xl transition-shadow flex flex-col justify-between [backface-visibility:hidden]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-primary flex items-center justify-center border border-border-subtle group-hover:scale-110 transition-transform duration-200`}>
                <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-primary px-3 py-1 rounded-full bg-surface-subtle border border-border-subtle/50">
                {cat.count}
              </span>
            </div>
            <h3 className="text-lg font-bold text-on-surface font-serif mb-1 group-hover:text-primary transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed mb-4">{cat.desc}</p>
          </div>

          <div className="pt-3 border-t border-border-subtle/40 flex items-center justify-between text-xs font-bold text-primary">
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
        <div className={`absolute inset-0 w-full h-full p-6 rounded-2xl border border-border-subtle bg-white flex flex-col justify-between shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">forum</span>
                Hasil & Topik Diskusi
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

            <h4 className="text-base font-bold text-on-surface font-serif mb-1">{cat.name}</h4>
            <p className="text-[11px] text-text-muted leading-relaxed mb-3">{cat.detailText}</p>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">Topik Diskusi Terpopuler:</span>
              <div className="flex flex-wrap gap-1">
                {cat.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-surface-subtle text-on-surface border border-border-subtle/60"
                  >
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-border-subtle/40 flex items-center justify-between gap-2">
            <span className="text-[10px] font-medium text-text-muted flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">flip</span>
              <span>Klik kartu untuk balik</span>
            </span>

            <a
              href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-xs hover:bg-emerald-700 transition-all"
            >
              <span>Join WA</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

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

function WhatsAppBanner() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });
  const [isClicking, setIsClicking] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const handleClick = () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 900);
  };

  return (
    <div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 border border-white/20 cursor-pointer select-none"
    >
      {/* 1. Ambient Corner Glow Spot (Top-Left) */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-emerald-300/30" />

      {/* 2. Ambient Corner Glow Spot (Bottom-Right) */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan-300/30" />

      {/* 3. Smooth Dynamic Cursor Spotlight */}
      {mousePos.active && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.16), transparent 70%)`,
          }}
        />
      )}

      {/* 4. Elegant Diagonal Light Sweep (Top-Left -> Bottom-Right) */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.08)_35%,transparent_70%)]"
        initial={{ opacity: 0, x: "-100%", y: "-100%" }}
        whileHover={{
          opacity: [0, 0.7, 0],
          x: ["-100%", "100%"],
          y: ["-100%", "100%"],
          transition: { duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" },
        }}
      />

      {/* 5. Refined Click Burst Light Ray */}
      {isClicking && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: "-30%", y: "-30%" }}
          animate={{
            opacity: [0, 0.75, 0],
            scale: [0.5, 2],
            x: ["-10%", "80%"],
            y: ["-10%", "80%"],
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(52,211,153,0.3)_40%,transparent_75%)] pointer-events-none blur-sm"
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 backdrop-blur-xs border border-white/30 shadow-xs">
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Grup WhatsApp Utama</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif drop-shadow-xs">
            Bergabunglah dalam Obrolan Real-time
          </h2>
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-medium drop-shadow-2xs">
            WhatsApp adalah tempat jantung komunitas kami berdetak. Berdiskusi secara bebas, membagikan referensi, dan berkolaborasi secara langsung.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <a
            href="https://chat.whatsapp.com/FI6uQdkxtJ7HhLoyoZnrTc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-emerald-800 font-bold text-sm shadow-lg hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all duration-200 border border-white"
          >
            <span className="material-symbols-outlined text-[20px]">group_add</span>
            <span>Masuk WhatsApp Group</span>
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb7vIyCH5JM2HKbvjH0v"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/20 text-white font-bold text-sm border border-white/40 hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-xs"
          >
            <span className="material-symbols-outlined text-[20px]">campaign</span>
            <span>Ikuti Saluran Resmi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CommunityClient() {
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
      <WhatsAppBanner />

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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <CategoryFlipCard cat={cat} />
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
