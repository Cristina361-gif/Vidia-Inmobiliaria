import Link from "next/link"
import config from "@/config"
import Logo from "@/components/Logo"

function FooterLink({ link, className }) {
  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {link.label}
    </Link>
  )
}

export default function Footer() {
  const { tagline, columns = [], credit } = config.landing.footer
  const legal = config.legal

  return (
    <footer className="bg-primary text-primary-content">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <div className="inline-flex items-center rounded-xl bg-white p-3">
              <Logo className="h-24 w-auto" />
            </div>
            {config.brand.showLogoText && (
              <p className="mt-3 text-lg font-bold">{config.brand.logoText}</p>
            )}
            <p className="mt-3 max-w-xs text-sm text-primary-content/70">{tagline}</p>
            <p className="mt-3 text-sm text-primary-content/70">{config.contact.city}</p>
            {config.contact.email && (
              <p className="mt-1 text-sm text-primary-content/70">{config.contact.email}</p>
            )}
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-accent">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      link={link}
                      className="text-sm text-primary-content/70 transition hover:text-accent"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary-content/15 pt-6 text-sm text-primary-content/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {config.brand.logoText}
          </span>
          <div className="flex flex-wrap gap-4">
            <Link href="/aviso-de-privacidad" className="hover:text-accent">
              {legal.aviso.title}
            </Link>
            <Link href="/carta-derechos" className="hover:text-accent">
              {legal.carta.title}
            </Link>
          </div>
          {credit && <span>{credit}</span>}
        </div>
      </div>
    </footer>
  )
}
