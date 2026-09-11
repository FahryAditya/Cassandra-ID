import { Metadata } from "next";
import CommunityClient from "@/components/community/CommunityClient";

export const metadata: Metadata = {
  title: "Komunitas & Forum Diskusi — Cassandra.ID",
  description: "Bergabunglah dalam grup WhatsApp resmi dan forum diskusi interaktif komunitas Cassandra.ID seputar anime, sains, teknologi, dan sosiologi.",
  openGraph: {
    title: "Komunitas & Forum Diskusi — Cassandra.ID",
    description: "Ruang Diskusi & Kolaborasi Interaktif Real-Time Komunitas Cassandra.ID.",
    url: "/community",
  },
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return <CommunityClient />;
}
