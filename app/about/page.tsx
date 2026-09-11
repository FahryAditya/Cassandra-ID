import { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "Tentang Kami — Visi & Filosofi Komunitas",
  description: "Pelajari bagaimana Cassandra.ID bertransformasi dari komunitas anime fandom menjadi ruang kolaborasi riset, sains, dan inovasi terbuka.",
  openGraph: {
    title: "Tentang Cassandra.ID — Visi & Filosofi Komunitas",
    description: "Dari Fandom Anime Menuju Ruang Inovasi & Riset Terbuka.",
    url: "https://cassandra.id/about",
  },
  alternates: {
    canonical: "https://cassandra.id/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
