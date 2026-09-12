import LegalDocument from "@/components/landing/LegalDocument"
import config from "@/config"

export const metadata = {
  title: config.legal.aviso.title,
  description: config.legal.aviso.subtitle,
}

export default function AvisoPrivacidadPage() {
  return <LegalDocument doc={config.legal.aviso} />
}
