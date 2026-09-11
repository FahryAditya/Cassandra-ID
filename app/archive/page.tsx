import { Metadata } from "next";
import ArchiveClient from "@/components/archive/ArchiveClient";

export const metadata: Metadata = {
  title: "CloverOtaku.ID Museum & Archive — Cassandra.ID",
  description: "Arsip museum bersejarah CloverOtaku.ID, garis waktu 5+ tahun perjalanan komunitas, dan Wall of 349 Heritage Members.",
  openGraph: {
    title: "CloverOtaku.ID Museum & Archive — Cassandra.ID",
    description: "Menjaga Warisan & Kenangan 349+ Anggota Pendahulu Komunitas.",
    url: "/archive",
  },
  alternates: {
    canonical: "/archive",
  },
};

export default function ArchivePage() {
  return <ArchiveClient />;
}
