import { Metadata } from "next";
import CommunityClient from "@/components/community/CommunityClient";

export const metadata: Metadata = {
  title: "Komunitas & Forum Diskusi — Cassandra.ID",
  description: "Bergabunglah dalam grup WhatsApp resmi dan forum diskusi interaktif komunitas Cassandra.ID seputar anime, sains, teknologi, dan sosiologi.",
  openGraph: {
    title: "Komunitas & Forum Diskusi — Cassandra.ID",
    description: "Ruang Diskusi & Kolaborasi Interaktif Real-Time Komunitas Cassandra.ID.",
    url: "https://cassandra.id/community",
  },
  alternates: {
    canonical: "https://cassandra.id/community",
  },
};

export default function CommunityPage() {
  return <CommunityClient />;
}
