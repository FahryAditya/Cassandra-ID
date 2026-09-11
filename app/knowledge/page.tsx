import { Metadata } from "next";
import KnowledgeClient from "@/components/knowledge/KnowledgeClient";

export const metadata: Metadata = {
  title: "Knowledge Base & Dokumentasi — Cassandra.ID",
  description: "Arsip pengetahuan permanen, panduan teknis, dan distilasi rangkuman obrolan grup WhatsApp dari Cassandra.ID.",
  openGraph: {
    title: "Knowledge Base & Dokumentasi — Cassandra.ID",
    description: "Pusat Pengetahuan & Dokumentasi Permanen Komunitas.",
    url: "/knowledge",
  },
  alternates: {
    canonical: "/knowledge",
  },
};

export default function KnowledgePage() {
  return <KnowledgeClient />;
}
