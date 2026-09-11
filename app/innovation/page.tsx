import { Metadata } from "next";
import InnovationClient from "@/components/innovation/InnovationClient";

export const metadata: Metadata = {
  title: "Innovation Lab & Proyek Open-Source — Cassandra.ID",
  description: "Showcase proyek perangkat lunak, alat open-source, dan eksperimen kecerdasan buatan dari Cassandra.ID Innovation Lab.",
  openGraph: {
    title: "Innovation Lab & Proyek Open-Source — Cassandra.ID",
    description: "Pameran Proyek & Eksperimen Kode Komunitas.",
    url: "https://cassandra.id/innovation",
  },
  alternates: {
    canonical: "https://cassandra.id/innovation",
  },
};

export default function InnovationPage() {
  return <InnovationClient />;
}
