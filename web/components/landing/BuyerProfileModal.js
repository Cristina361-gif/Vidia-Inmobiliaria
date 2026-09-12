"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import config from "@/config"
import { fillTemplate, openWhatsAppOrCopy } from "@/lib/whatsapp"
import WhatsAppStatus from "@/components/landing/WhatsAppStatus"

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price)
}

function assessViability(formaPago, ingresos) {
  const rules = config.landing.buyerProfiling.viability
  const income = Number(String(ingresos).replace(/[^\d.]/g, ""))
  const isCash = rules.cashValues.includes(formaPago)
  if (isCash) return "viable"
  if (income >= rules.minMonthlyIncomeCredit) return "viable"
  return "review"
}

export default function BuyerProfileModal({ property, onClose }) {
  const copy = config.landing.buyerProfiling
  const fields = copy.fields
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState(null)
  const [assessment, setAssessment] = useState(null)

  if (!property) return null

  async function onSubmit(event) {
    event.preventDefault()
    setPending(true)
    const form = new FormData(event.currentTarget)
    const values = {
      nombre: String(form.get(fields.nombre.name) || "").trim(),
      telefono: String(form.get(fields.telefono.name) || "").trim(),
      formaPago: String(form.get(fields.formaPago.name) || "").trim(),
      ingresos: String(form.get(fields.ingresos.name) || "").trim(),
      propiedad: property.title,
      precio: formatPrice(property.price),
    }
    const viability = assessViability(values.formaPago, values.ingresos)
    const message = fillTemplate(config.whatsappTemplates.visit, values)
    setAssessment({ viability, message, values })
    setPending(false)
  }

  async function sendWhatsApp() {
    if (!assessment) return
    setPending(true)
    const result = await openWhatsAppOrCopy({
      phone: config.contact.whatsapp,
      message: assessment.message,
    })
    setStatus(result)
    setPending(false)
  }

  const resultCopy =
    assessment?.viability === "viable"
      ? { title: copy.viability.viableTitle, body: copy.viability.viableBody }
      : { title: copy.viability.reviewTitle, body: copy.viability.reviewBody }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-neutral/50 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="perfil-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-base-200 bg-base-100 p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="perfil-title" className="text-xl font-bold">
              {copy.title}
            </h2>
            <p className="mt-1 text-sm text-base-content/60">
              {property.title} · {formatPrice(property.price)}
            </p>
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-circle"
            onClick={onClose}
            aria-label={copy.closeLabel}
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mt-3 text-sm text-base-content/70">{copy.subtitle}</p>

        {!assessment ? (
          <form onSubmit={onSubmit} className="mt-5 grid gap-4">
            <Field field={fields.nombre} />
            <Field field={fields.telefono} type="tel" />
            <label className="form-control w-full">
              <span className="label-text mb-1.5 font-medium">{fields.formaPago.label}</span>
              <select
                name={fields.formaPago.name}
                required={fields.formaPago.required}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  {fields.formaPago.label}
                </option>
                {fields.formaPago.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <Field field={fields.ingresos} />
            <p className="text-xs leading-5 text-base-content/55">{copy.privacyNote}</p>
            <button type="submit" className="btn btn-accent" disabled={pending}>
              {pending ? copy.submittingLabel : copy.submitLabel}
            </button>
          </form>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-accent/30 bg-accent/10 p-4">
              <p className="font-semibold">{resultCopy.title}</p>
              <p className="mt-1 text-sm text-base-content/70">{resultCopy.body}</p>
            </div>
            <button
              type="button"
              className="btn btn-accent w-full"
              onClick={sendWhatsApp}
              disabled={pending}
            >
              <MessageCircle className="size-4" />
              {pending ? copy.submittingLabel : copy.whatsappLabel}
            </button>
            <button type="button" className="btn btn-ghost w-full" onClick={() => setAssessment(null)}>
              {copy.backLabel}
            </button>
            <WhatsAppStatus result={status} />
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ field, type = "text" }) {
  return (
    <label className="form-control w-full">
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
