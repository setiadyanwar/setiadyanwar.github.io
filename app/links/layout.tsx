import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semester 7 Resources",
  description: "Semua link dan resource penting untuk semester 7 - Links, tools, dan resources yang berguna",
  alternates: {
    canonical: "https://setiadyanwar.github.io/links",
  },
  openGraph: {
    title: "Semester 7 Resources | Setiady Ibrahim Anwar",
    description: "Semua link dan resource penting untuk semester 7",
    url: "https://setiadyanwar.github.io/links",
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

