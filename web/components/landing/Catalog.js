"use client"

import { useMemo, useState } from "react"
import config from "@/config"
import { fillTemplate, openWhatsAppOrCopy } from "@/lib/whatsapp"
import PropertyCard from "@/components/landing/PropertyCard"
import BuyerProfileModal from "@/components/landing/BuyerProfileModal"
import WhatsAppStatus from "@/components/landing/WhatsAppStatus"

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function Catalog() {
  const copy = config.landing.catalog
  const [filterId, setFilterId] = useState(copy.filters[0]?.id || "all")
  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState(null)

  const activeFilter = copy.filters.find((item) => item.id === filterId) || copy.filters[0]

  const properties = useMemo(() => {
    const min = activeFilter?.minBedrooms || 0
    return config.properties.filter((property) => property.bedrooms >= min)
  }, [activeFilter])

  async function onVisit(property) {
    if (config.features.buyerProfiling) {
      setSelected(property)
      return
    }
    const message = fillTemplate(config.whatsappTemplates.visit, {
      nombre: "",
      telefono: "",
      formaPago: "",
      ingresos: "",
      propiedad: property.title,
      precio: formatPrice(property.price),
    })
    const result = await openWhatsAppOrCopy({
      phone: config.contact.whatsapp,
      message,
    })
    setStatus(result)
  }

  return (
    <section id={copy.id} className="border-t border-base-200 bg-base-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight uppercase md:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base-content/70">{copy.subtitle}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {copy.filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setFilterId(filter.id)}
              className={
                "btn btn-sm " + (filter.id === filterId ? "btn-accent" : "btn-ghost border-base-300")
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        {properties.length === 0 ? (
          <p className="mt-12 text-center text-base-content/60">{copy.empty}</p>
        ) : (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <li key={property.id}>
                <PropertyCard
                  property={property}
                  onVisit={onVisit}
                  ctaLabel={copy.ctaLabel}
                />
              </li>
            ))}
          </ul>
        )}

        <div className="mx-auto mt-8 max-w-lg">
          <WhatsAppStatus result={status} />
        </div>
      </div>

      {selected && (
        <BuyerProfileModal property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
