import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollReveal from "../components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const description =
  "Full-stack developer and automation engineer in Karachi. I build production web platforms, SaaS products, and the bots and pipelines that automate the busywork behind them.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamza Amir — Full-Stack Developer & Automation Engineer",
    template: "%s | Hamza Amir",
  },
  description,
  keywords: [
    "Hamza Amir",
    "full-stack developer",
    "automation engineer",
    "Next.js",
    "Django",
    "freelance developer Karachi",
  ],
  authors: [{ name: "Hamza Amir", url: "https://github.com/Hamzah-Amir" }],
  creator: "Hamza Amir",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hamza Amir",
    title: "Hamza Amir — I build software that works while you don't.",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Amir — I build software that works while you don't.",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
