"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2021",
    title: "Awal Berdirinya CloverOtaku.ID",
    desc: "Komunitas didirikan sebagai tempat berkumpul para penggemar anime dan budaya populer Jepang, tumbuh hingga mencapai 349+ anggota aktif.",
    badge: "Founding Era",
  },
  {
    year: "2023",
    title: "Golden Era & Diskusi Maraton",
    desc: "Puncak aktivitas komunitari dengan lahirnya ribuan pesan obrolan harian, naskah kajian, dan ikatan silaturahmi yang erat antar-anggota.",
    badge: "Golden Era 🍀",
  },
  {
    year: "2025",
    title: "Transisi ke Ruang Inovasi & Riset",
    desc: "Komunitas menyepakati pentingnya mengarsipkan ide-ide hebat yang lahir dalam grup agar tidak hilang begitu saja.",
    badge: "Transformation",
  },
  {
    year: "2026",
    title: "Peluncuran Resmi Cassandra.ID",
    desc: "Transformasi sukses dari forum obrolan biasa menjadi portal resmi komunitas, Research Hub, dan Innovation Lab.",
    badge: "New Chapter ✦",
  },
];

const nostalgicMessages = [
  {
    author: "Clover Member — Memories of Anime & Game",
    tag: "Diskusi & Hobi",
    quote: "Karena membahas anime dan game, dan di saat itu sangat seru dimana membahas anime yg akan datang hingga anime yg dulu. Nggak tahu kenapa 🗿",
    color: "from-sky-500/10 to-blue-500/5",
    accent: "text-primary",
  },
  {
    author: "Clover Member — Kehangatan Masa Lalu",
    tag: "Kesan & Jiwa Komunitas",
    quote: "Awal-awal grup itu masih jaya, ramai, bisa berbagi cerita satu sama lain, dan banyak teman-teman yang saling support, membuat masa-masa itu paling berkesan di hati saya karena saat itu hidup terasa lebih sederhana, nyata, dan bebas dari tekanan digital yang konstan.",
    color: "from-amber-500/10 to-orange-500/5",
    accent: "text-accent-coral",
  },
  {
    author: "Clover Member — Kenangan & Harapan Era Emas",
    tag: "Kisah Personal 🍀",
    quote: "Krna ya wktu itu ak ktemu sma seseorang yg bkin ak nyaman.. tpi krna ego.. kita jdi asing.. walaupun udh di maafin tpi di era dia pling ak suka.. skrng dia berubah bngt smnjak lama ga contact ma ak.. jdi ak pngen blik ke era itu lgi trs ngulangin dari awal.. ahai (人 •͈ᴗ•͈)",
    color: "from-rose-500/10 to-pink-500/5",
    accent: "text-rose-600",
  },
  {
    author: "Clover Member — Era Keaktifan Grup",
    tag: "Harmoni Komunitas",
    quote: "Karena group msh rame, msh pada aktif dan rapi.",
    color: "from-emerald-500/10 to-teal-500/5",
    accent: "text-emerald-600",
  },
];

const memberWall = [
  { name: "Clover Member #001", role: "Founder & Archivist", note: "Membuat tempat ini selalu hangat." },
  { name: "Clover Member #042", role: "Anime Analyst Lead", note: "Selalu membedah episode terbaru." },
  { name: "Clover Member #108", role: "Software Architect", note: "Mengembangkan bot pertama grup." },
  { name: "Clover Member #349", role: "Community Heritage", note: "Menjaga memori era Clover." },
];

export default function ArchiveClient() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Golden Banner Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-red-500/10 rounded-3xl p-8 sm:p-14 border border-accent-gold/50 shadow-md text-center max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/20 text-amber-900 text-xs font-bold mb-4 border border-accent-gold/40"
        >
          <span>🍀 CLOVEROTAKU.ID MUSEUM & ARCHIVE</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-4">
          Menjaga Warisan & Kenangan Komunitas
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
          Cassandra.ID tidak lupa dari mana kami berasal. Museum ini dipersembahkan untuk merawat sejarah, 349+ anggota pendahulu, dan jejak langkah CloverOtaku.ID.
        </p>
      </div>

      {/* Nostalgic Member Messages Section */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5 mb-2">
            <span className="material-symbols-outlined text-[18px]">favorite</span>
            Suara & Pesan Nostalgia Anggota
          </span>
          <h2 className="text-3xl font-bold text-on-surface font-serif">
            Kesan & Memori Era Emas CloverOtaku
          </h2>
          <p className="text-xs text-text-muted mt-2">
            Catatan abadi dari anggota mengenai indahnya kebersamaan, obrolan anime/game, dan kenangan tak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nostalgicMessages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${msg.color} border border-border-subtle/80 shadow-xs flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-white/80 ${msg.accent} border border-border-subtle/50`}>
                    {msg.tag}
                  </span>
                  <span className="text-accent-gold text-2xl font-serif">“</span>
                </div>
                <p className="text-sm text-on-surface leading-relaxed font-serif italic mb-6">
                  {msg.quote}
                </p>
              </div>
              <div className="pt-4 border-t border-border-subtle/40 flex items-center justify-between text-xs text-text-muted relative z-10">
                <span className="font-semibold text-on-surface-variant">{msg.author}</span>
                <span className="text-[10px] font-mono">🍀 Golden Era Memory</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Heritage Timeline Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-on-surface font-serif mb-8 text-center flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-accent-coral text-[24px]">history</span>
          Garis Waktu Perjalanan Komunitas
        </h2>

        <div className="relative border-l-2 border-accent-gold/40 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-accent-gold border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
              
              <div className="bg-white p-6 rounded-2xl border border-border-subtle shadow-xs hover:border-accent-gold transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xl font-bold font-mono text-accent-coral">{item.year}</span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accent-gold/20 text-amber-900 border border-accent-gold/30">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface font-serif mb-1">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 349 Members Wall Showcase */}
      <div className="bg-surface-subtle p-8 sm:p-12 rounded-3xl border border-border-subtle">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-on-surface font-serif mb-2">
            🍀 Wall of 349 Heritage Members
          </h2>
          <p className="text-xs text-text-muted">
            Setiap nama dan kontribusi anggota era CloverOtaku.ID tersimpan abadi sebagai pondasi berdirinya Cassandra.ID.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {memberWall.map((mem, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-white rounded-2xl border border-border-subtle shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-accent-peach/30 text-amber-900 font-bold text-xs flex items-center justify-center mb-3">
                  🍀
                </div>
                <h3 className="text-sm font-bold text-on-surface font-mono">{mem.name}</h3>
                <span className="text-[10px] font-semibold text-accent-coral block mb-2">{mem.role}</span>
                <p className="text-xs text-text-muted italic">“{mem.note}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
