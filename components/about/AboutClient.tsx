"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reflectiveQuestions = [
  "Kenapa alur cerita seri anime tertentu memiliki dampak emosional yang amat mendalam pada penonton?",
  "Bagaimana cara membangun sistem AI yang mampu mengenali gaya visual animasi secara akurat?",
  "Mengapa komunitas otaku memiliki dinamika sosiologis yang sangat solid di era digital?",
  "Bagaimana cara mentransformasikan minat hobi menjadi proyek teknologi dan karya akademis nyata?",
];

const coreValues = [
  {
    title: "Community First",
    desc: "Diskusi dan interaksi antar-anggota adalah bahan bakar utama dari seluruh ide dan proyek kami.",
    icon: "groups",
  },
  {
    title: "Rigorous Inquiry",
    desc: "Setiap topik dibedah tidak hanya secara opini permukaan, melainkan dengan analisis kritis dan metode yang terstruktur.",
    icon: "psychology",
  },
  {
    title: "Open Innovation",
    desc: "Hasil riset, eksperimen koding, dan catatan pengetahuan terbuka bebas untuk diakses dan dikembangkan bersama.",
    icon: "code",
  },
  {
    title: "Heritage & Memory",
    desc: "Menghargai akar sejarah CloverOtaku.ID sebagai pondasi berdirinya Cassandra.ID.",
    icon: "local_florist",
  },
];

export default function AboutClient() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold mb-4"
        >
          <span className="material-symbols-outlined text-[16px]">info</span>
          <span>Tentang Cassandra.ID</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold text-on-surface font-serif mb-6"
        >
          Dari Fandom Anime Menuju Ruang Inovasi & Riset
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-text-muted leading-relaxed"
        >
          Cassandra.ID didirikan sebagai portal resmi dan pusat pengetahuan untuk mendokumentasikan, mengembangkan, dan mempublikasikan hasil diskusi dari komunitas kami.
        </motion.p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="bg-surface-subtle p-8 sm:p-10 rounded-3xl border border-border-subtle/70">
          <h2 className="text-2xl font-bold text-on-surface font-serif mb-4">
            Bukan Website Anime Biasa
          </h2>
          <div className="space-y-4 text-sm text-text-muted leading-relaxed">
            <p>
              WhatsApp adalah tempat komunitas kami berinteraksi dan berdiskusi secara real-time setiap hari. Namun, percakapan berharga sering kali hilang atau terkubur dalam riwayat obrolan.
            </p>
            <p>
              <strong>Cassandra.ID</strong> hadir sebagai muara utama. Tempat di mana ide-ide mentah disaring menjadi artikel pengetahuan, penelitian akademik disempurnakan, dan eksperimen perangkat lunak dikembangkan.
            </p>
            <p>
              Kami meyakini bahwa minat terhadap anime dan budaya pop bukanlah sekadar hiburan pasif, melainkan gerbang awal menuju eksplorasi sains, teknologi, seni, dan filsafat.
            </p>
          </div>
        </div>

        {/* Reflective Quote List */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">contact_support</span>
            Pertanyaan Reflektif Komunitas
          </h3>
          {reflectiveQuestions.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="p-4 rounded-2xl bg-white border border-border-subtle/80 shadow-xs flex items-start gap-3"
            >
              <span className="text-accent-gold text-lg font-bold">“</span>
              <p className="text-sm font-medium text-on-surface leading-snug">{q}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-on-surface font-serif mb-3">
            Pilar & Nilai Utama
          </h2>
          <p className="text-xs text-text-muted">
            Prinsip yang membimbing setiap diskusi, publikasi riset, dan proyek di Cassandra.ID.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-border-subtle/70 shadow-xs hover:border-primary-container transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[20px]">{v.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface font-serif mb-2">{v.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col items-center justify-center gap-6 shadow-md">
        <h2 className="text-2xl sm:text-4xl font-bold font-serif max-w-xl">
          Tertarik Berkontribusi atau Bergabung dalam Diskusi?
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-lg">
          Bergabunglah di grup WhatsApp resmi kami atau eksplorasi publikasi riset terbaru dari anggota komunitas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://chat.whatsapp.com/HDxHiAw8MHw97WHNw1L8KZ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-primary font-bold text-xs shadow-sm hover:bg-surface-subtle transition-colors"
          >
            Gabung WhatsApp Community
          </a>
          <Link
            href="/research"
            className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold text-xs border border-white/30 hover:bg-white/30 transition-colors"
          >
            Lihat Research Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
