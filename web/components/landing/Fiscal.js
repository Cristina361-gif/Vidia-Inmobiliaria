"use client"

import { useState } from "react"
import * as LucideIcons from "lucide-react"
import { MessageCircle } from "lucide-react"
import config from "@/config"
import { openWhatsAppOrCopy } from "@/lib/whatsapp"
import WhatsAppStatus from "@/components/landing/WhatsAppStatus"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

export default function Fiscal() {
  const copy = config.landing.fiscal
  const [status, setStatus] = useState(null)
  const [pending, setPending] = useState(false)

  async function onCta() {
    setPending(true)
    const result = await openWhatsAppOrCopy({
      phone: config.contact.whatsapp,
      message: config.whatsappTemplates.fiscal,
    })
    setStatus(result)
    setPending(false)
  }

  return (
    <section id={copy.id} className="border-t border-base-200 bg-base-200/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase md:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base-content/70">{copy.subtitle}</p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-base-200 bg-base-100 p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon name={item.icon} className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-base-content/70">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button type="button" className="btn btn-accent btn-lg" onClick={onCta} disabled={pending}>
            <MessageCircle className="size-4" />
            {copy.cta.label}
          </button>
          <div className="w-full max-w-lg">
            <WhatsAppStatus result={status} />
          </div>
        </div>
      </div>
    </section>
  )
}
