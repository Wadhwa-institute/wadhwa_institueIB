import Link from "next/link";

const stepList = [
  "Sign up on the website and verify your email address.",
  "Download the app and sign in with the same account.",
  "Verify enrollment and unlock premium content for 30 days.",
  "Study offline with notes, videos, and progress tracking.",
];

const featureList = [
  "Offline mode with encrypted local caching",
  "Push notifications for new video releases",
  "Bookmarking and note-taking tools",
  "Performance analytics and revision reminders",
];

export default function AppPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">App download & unlock</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Download the Wadhwa Institute app and unlock premium learning access.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Designed for students and parents, the app combines downloadable content, progress insights, and secure access to premium resources.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Download for Android
            </Link>
            <Link
              href="#"
              className="rounded-full border border-emerald-200/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400"
            >
              Apple App Store (coming soon)
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">What you unlock</p>
          <div className="mt-5 grid gap-3">
            {featureList.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Verification flow</p>
          <div className="mt-5 space-y-4">
            {stepList.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-100">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-100">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Free vs premium</p>
          <div className="mt-5 space-y-4 text-sm text-slate-100">
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-4">
              <p className="font-semibold text-white">Free tier</p>
              <p className="mt-2">One sample video and PDF preview per subject.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
              <p className="font-semibold text-white">Premium tier</p>
              <p className="mt-2">Full video library, high-value notes, and progress analytics unlocked via the app.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
