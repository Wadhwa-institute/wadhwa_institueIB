import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { navLinks } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wadhwa Institute IB",
  description:
    "A premium educational website and learning platform for IB students, parents, and educators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020617] text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-5 sm:px-6 lg:px-8">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-slate-950/75 px-5 py-4 backdrop-blur">
            <div>
              <p className="text-lg font-semibold text-white">Wadhwa Institute IB</p>
              <p className="text-sm text-slate-300">Premium IB learning, app access, and student outcomes</p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-100">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 transition hover:bg-white/10">
                  {link.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1 pt-8">{children}</main>

          <footer className="mt-8 rounded-[24px] border border-white/10 bg-slate-950/80 px-5 py-5 text-sm text-slate-200">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Wadhwa Institute IB. Built for ambitious learners and families.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy & Legal
                </Link>
                <span className="text-slate-500">•</span>
                <span>support@wadhwainstitueib.in</span>
                <span className="text-slate-500">•</span>
                <span>privacy-first, mobile-first, accessibility-led</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
