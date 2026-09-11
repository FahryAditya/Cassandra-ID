import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Cassandra.ID — Portal Komunitas, Riset & Inovasi",
  description: "Portal resmi dan pusat pengetahuan dokumentasi ide, riset akademik, eksperimen teknologi, dan diskusi komunitas otaku Cassandra.ID.",
  openGraph: {
    title: "Cassandra.ID — Portal Komunitas, Riset & Inovasi",
    description: "Where Anime Passion Meets Rigorous Research & Creative Innovation.",
    url: "/",
    siteName: "Cassandra.ID",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
