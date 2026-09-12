import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function LegalDocument({ doc }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary">
        <ArrowLeft className="size-4" />
        {doc.backLabel}
      </Link>

      {doc.eyebrow && (
        <p className="mt-8 text-sm font-medium uppercase tracking-wider text-accent">{doc.eyebrow}</p>
      )}
      <h1 className="mt-3 text-3xl font-bold tracking-tight uppercase md:text-4xl">{doc.title}</h1>
      {doc.subtitle && <p className="mt-4 text-lg text-base-content/70">{doc.subtitle}</p>}
      {doc.updatedLabel && (
        <p className="mt-2 text-sm text-base-content/50">{doc.updatedLabel}</p>
      )}

      {doc.pdfHref && (
        <a
          href={doc.pdfHref}
          download
          className="btn btn-accent mt-6"
        >
          <Download className="size-4" />
          {doc.pdfLabel}
        </a>
      )}

      <div className="mt-10 space-y-8">
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-2 leading-7 text-base-content/75">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  )
}
