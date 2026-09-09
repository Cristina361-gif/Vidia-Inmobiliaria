"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import config from "@/config"
import { fillTemplate, openWhatsAppOrCopy } from "@/lib/whatsapp"
import WhatsAppStatus from "@/components/landing/WhatsAppStatus"

export default function ValuationForm() {
  const copy = config.landing.valuation
  const fields = copy.fields
  const [status, setStatus] = useState(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(event) {
    event.preventDefault()
    setPending(true)
    const form = new FormData(event.currentTarget)
    const values = {
      nombre: String(form.get(fields.nombre.name) || "").trim(),
      telefono: String(form.get(fields.telefono.name) || "").trim(),
      ubicacion: String(form.get(fields.ubicacion.name) || "").trim(),
      m2: String(form.get(fields.m2.name) || "").trim(),
      estatusLegal: String(form.get(fields.estatusLegal.name) || "").trim(),
    }
    const message = fillTemplate(config.whatsappTemplates.valuation, values)
    const result = await openWhatsAppOrCopy({
      phone: config.contact.whatsapp,
      message,
    })
    setStatus(result)
    setPending(false)
  }

  return (
    <section id={copy.id} className="border-t border-base-200 bg-base-200/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase md:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base-content/70">{copy.subtitle}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field field={fields.nombre} />
            <Field field={fields.telefono} type="tel" />
            <Field field={fields.ubicacion} className="sm:col-span-2" />
            <Field field={fields.m2} type="number" />
            <label className="form-control w-full">
              <span className="label-text mb-1.5 font-medium">{fields.estatusLegal.label}</span>
              <select
                name={fields.estatusLegal.name}
                required={fields.estatusLegal.required}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  {fields.estatusLegal.label}
                </option>
                {fields.estatusLegal.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-4 text-xs leading-5 text-base-content/55">{copy.privacyNote}</p>

          <button type="submit" className="btn btn-accent mt-6 w-full" disabled={pending}>
            <MessageCircle className="size-4" />
            {pending ? copy.submittingLabel : copy.submitLabel}
          </button>

          <div className="mt-4">
            <WhatsAppStatus result={status} />
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({ field, type = "text", className = "" }) {
  return (
    <label className={`form-control w-full ${className}`}>
      <span className="label-text mb-1.5 font-medium">{field.label}</span>
      <input
        name={field.name}
        type={type}
        required={field.required}
        placeholder={field.placeholder}
        className="input input-bordered w-full"
      />
    </label>
  )
}
