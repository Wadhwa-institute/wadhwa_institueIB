import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[var(--white-faint)] bg-[var(--black-2)] px-6 py-20 text-center sm:px-10">
      <div className="grid-lines" />
      <div className="glow-orb" style={{ width: 320, height: 320, top: -90, left: "50%", marginLeft: -160 }} />
      <div className="relative space-y-6">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="font-display text-6xl uppercase text-[var(--white)] sm:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto max-w-md text-[13px] leading-8 text-[var(--white-dim)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn-primary rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="btn-outline rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
