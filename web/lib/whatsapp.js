// Arma el enlace wa.me y el plan B (copiar al portapapeles)
// cuando no hay número configurado. Sin env vars: todo sale de config.

export function fillTemplate(template, values) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => {
    const value = values[key]
    return value == null ? "" : String(value)
  })
}

export function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "")
}

export function buildWhatsAppUrl(phone, message) {
  const digits = digitsOnly(phone)
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export async function openWhatsAppOrCopy({ phone, message }) {
  const url = buildWhatsAppUrl(phone, message)
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer")
    return { ok: true, mode: "whatsapp" }
  }

  try {
    await navigator.clipboard.writeText(message)
    return { ok: true, mode: "copy" }
  } catch {
    return { ok: false, mode: "copy-failed", message }
  }
}
