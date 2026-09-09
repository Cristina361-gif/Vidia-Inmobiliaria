import { Bath, LandPlot, BedDouble, Ruler } from "lucide-react"
import config from "@/config"

function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PropertyCard({ property, onVisit, ctaLabel }) {
  const labels = config.landing.catalog.labels
  const statusLabel =
    config.propertyStatusLabels[property.status] || property.status
  const photo = property.photos?.[0]
  const isAvailable = property.status === "disponible"

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
      <div className="relative aspect-[16/10] bg-base-200">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={property.title}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-base-content/40">
            {property.title}
          </div>
        )}
        <span
          className={
            "absolute left-3 top-3 badge border-0 " +
            (isAvailable ? "bg-success text-success-content" : "bg-neutral text-neutral-content")
          }
        >
          {statusLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wide text-base-content/50">{property.location}</p>
        <h3 className="mt-1 text-lg font-semibold">{property.title}</h3>
        <p className="mt-2 text-xl font-bold text-primary">{formatPrice(property.price)}</p>

        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-base-content/70">
          <li className="flex items-center gap-2">
            <LandPlot className="size-4 text-accent" />
            {labels.land}: {property.landM2} m²
          </li>
          <li className="flex items-center gap-2">
            <Ruler className="size-4 text-accent" />
            {labels.construction}: {property.constructionM2} m²
          </li>
          <li className="flex items-center gap-2">
            <BedDouble className="size-4 text-accent" />
            {labels.bedrooms}: {property.bedrooms}
          </li>
          <li className="flex items-center gap-2">
            <Bath className="size-4 text-accent" />
            {labels.bathrooms}: {property.bathrooms}
          </li>
        </ul>

        {property.features?.length > 0 && (
          <p className="mt-3 text-sm text-base-content/60">{property.features.join(" · ")}</p>
        )}

        <button
          type="button"
          className="btn btn-accent mt-5 w-full"
          onClick={() => onVisit(property)}
          disabled={!isAvailable}
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  )
}
