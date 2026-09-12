import config from "@/config"
import { fillTemplate } from "@/lib/whatsapp"

export default function WhatsAppStatus({ result }) {
  if (!result) return null

  const copy = config.landing.whatsappFallback
  const phone = config.contact.whatsappDisplay || config.contact.phoneDisplay

  if (result.mode === "whatsapp") return null

  if (result.ok && result.mode === "copy") {
    return (
      <p
        role="status"
        className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-base-content"
      >
        <strong className="block font-semibold">{copy.copiedTitle}</strong>
        {phone
          ? fillTemplate(copy.copiedBody, { phone })
          : copy.noPhoneBody}
      </p>
    )
  }

  return (
    <p role="alert" className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm">
      {copy.copyFailed}
      {result.message ? ` ${result.message}` : ""}
    </p>
  )
}
