import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import config from "@/config"

export default function Hero() {
  const { eyebrow, title, subtitle, cta, ctaSecondary } = config.landing.hero

  return (
    <section id="inicio" className="relative overflow-hidden bg-primary text-primary-content">
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-40"
        aria-hidden
      >
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-[-8rem] size-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        {eyebrow && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary-content/5 px-3 py-1 text-xs font-medium text-primary-content/80 backdrop-blur">
            <ShieldCheck className="size-3.5 text-accent" />
            {eyebrow}
          </div>
        )}

        <h1 className="text-balance text-4xl font-bold tracking-tight uppercase md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-primary-content/75 md:text-xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href={cta.href} className="btn btn-accent btn-lg">
            {cta.label}
            <ArrowRight className="size-4" />
          </Link>
          {ctaSecondary && (
            <Link
              href={ctaSecondary.href}
              className="btn btn-lg border-primary-content/30 bg-transparent text-primary-content hover:border-accent hover:bg-primary-content/10"
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
