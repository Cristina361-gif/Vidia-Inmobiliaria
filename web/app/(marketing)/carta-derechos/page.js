import LegalDocument from "@/components/landing/LegalDocument"
import config from "@/config"

export const metadata = {
  title: config.legal.carta.title,
  description: config.legal.carta.subtitle,
}

export default function CartaDerechosPage() {
  return <LegalDocument doc={config.legal.carta} />
}
