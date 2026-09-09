import Hero from "@/components/landing/Hero"
import ValuationForm from "@/components/landing/ValuationForm"
import Catalog from "@/components/landing/Catalog"
import Fiscal from "@/components/landing/Fiscal"
import FinalCta from "@/components/landing/FinalCta"
import config from "@/config"

export default function HomePage() {
  return (
    <>
      <Hero />
      {config.features.valuationForm && <ValuationForm />}
      {config.features.catalog && <Catalog />}
      {config.features.fiscalSection && <Fiscal />}
      <FinalCta />
    </>
  )
}
