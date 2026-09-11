import { Metadata } from "next";
import ResearchClient from "@/components/research/ResearchClient";

export const metadata: Metadata = {
  title: "Research Hub & Makalah Ilmiah — Cassandra.ID",
  description: "Publikasi penelitian sosiologi otaku, model komputasional animasi, dan kajian media analitis dari Cassandra.ID Research Hub.",
  openGraph: {
    title: "Research Hub & Makalah Ilmiah — Cassandra.ID",
    description: "Publikasi Makalah & Catatan Penelitian Akademik Komunitas.",
    url: "https://cassandra.id/research",
  },
  alternates: {
    canonical: "https://cassandra.id/research",
  },
};

export default function ResearchPage() {
  return <ResearchClient />;
}
