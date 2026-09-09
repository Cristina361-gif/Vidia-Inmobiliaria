import config from "@/config"

// Si hay logoSrc en config, se muestra la imagen.
// Si no, un isotipo de edificios (navy / dorado) como marca temporal.
export default function Logo({ className = "size-7", variant = "default" }) {
  if (config.brand.logoSrc) {
    return (
      <img
        src={config.brand.logoSrc}
        alt=""
        className={`object-contain ${className}`}
      />
    )
  }

  const wrap =
    variant === "onDark"
      ? "bg-accent text-accent-content"
      : "bg-primary text-primary-content"

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg ${wrap} ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[70%]">
        <path
          d="M4 19V10.5L8 8v11M8 19V7l5-3v15M13 19v-8l5 3V19M3.5 19.5h17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
