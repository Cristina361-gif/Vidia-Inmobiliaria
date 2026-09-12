// ============================================================
// Vidia Inmobiliaria · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Tip: para activar WhatsApp real, pon el número en contact.whatsapp
// (solo dígitos, con código de país 52). El logo y los PDFs legales
// se sustituyen en web/public/ y las rutas de brand.logoSrc / legal.*.pdfHref.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "Vidia Inmobiliaria",
    description:
      "Ayudamos a las familias y empresas de Chihuahua a comprar o vender sus propiedades con absoluta certeza jurídica y fiscal. Tu patrimonio en manos certificadas.",
    domain: "vidiainmobiliaria.com", // sin https://, sin www
    locale: "es", // "es" | "en"
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    // Color primario en HEX. DaisyUI lo aplica como --color-primary via theme.
    primary: "#0A192F",
    // Logo oficial (wordmark). showLogoText = false para no repetir el nombre.
    logoText: "VIDIA Inmobiliaria Real del Norte",
    logoSrc: "/logo.png",
    showLogoText: false,
    radius: "1rem",
  },

  // -----------------------------------------------------------
  // Contacto público (sin env vars)
  // -----------------------------------------------------------
  contact: {
    // Solo dígitos, con 52. Vacío = el formulario copia el mensaje (plan B).
    whatsapp: "",
    whatsappDisplay: "",
    phoneDisplay: "",
    email: "hola@vidiainmobiliaria.com",
    city: "Chihuahua, Chihuahua",
    address: "Chihuahua, Chihuahua, México",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: false,
    googleAuth: false,
    emailLogin: false,
    aiChat: true,
    toolUse: true,
    agents: true,
    resend: true,
    pricing: false,
    paypal: false,
    adminPanel: true,
    catalog: true,
    valuationForm: true,
    buyerProfiling: true,
    fiscalSection: true,
  },

  // -----------------------------------------------------------
  // PayPal.me (si features.paypal está activo)
  // -----------------------------------------------------------
  payment: {
    paypalMeUsername: "",
    defaultAmount: 0,
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini",
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    from: "Vidia Inmobiliaria <onboarding@resend.dev>",
    replyTo: "hola@vidiainmobiliaria.com",
    supportEmail: "hola@vidiainmobiliaria.com",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"],
  },

  // -----------------------------------------------------------
  // Plantillas de WhatsApp — {clave} se reemplaza con el dato del form
  // -----------------------------------------------------------
  whatsappTemplates: {
    valuation:
      "Hola Vidia, soy {nombre}. Solicito opinión de valor de un inmueble en {ubicacion} ({m2} m², {estatusLegal}). Mi teléfono es {telefono}.",
    visit:
      "Hola Vidia, soy {nombre}. Me interesa {propiedad} por {precio} en {formaPago}. Ingresos aproximados: {ingresos}. Tel: {telefono}.",
    fiscal:
      "Hola Vidia, quiero agendar una asesoría de certeza fiscal y legal (ISR / enajenación de bienes) en Chihuahua.",
  },

  // -----------------------------------------------------------
  // Catálogo de ejemplo (sin datos del dueño)
  // Agrega más objetos a este array para publicar otra propiedad.
  // -----------------------------------------------------------
  properties: [
    {
      id: "cerro-de-la-cruz",
      title: "Casa en Cerro de la Cruz",
      price: 360000,
      landM2: 360,
      constructionM2: 120,
      bedrooms: 2,
      bathrooms: 1,
      location: "Cerro de la Cruz, Chihuahua",
      status: "disponible",
      features: ["Sala-comedor", "Cocina", "Lavandería"],
      photos: ["/properties/cerro-de-la-cruz.svg"],
    },
    {
      id: "nombre-de-dios",
      title: "Casa en Nombre de Dios",
      price: 1850000,
      landM2: 220,
      constructionM2: 160,
      bedrooms: 3,
      bathrooms: 2,
      location: "Nombre de Dios, Chihuahua",
      status: "disponible",
      features: ["Cochera", "Patio", "Closets"],
      photos: ["/properties/nombre-de-dios.svg"],
    },
    {
      id: "colinas-del-sol",
      title: "Casa en Colinas del Sol",
      price: 2450000,
      landM2: 280,
      constructionM2: 190,
      bedrooms: 3,
      bathrooms: 2.5,
      location: "Colinas del Sol, Chihuahua",
      status: "disponible",
      features: ["Cochera techada", "Jardín", "Cuarto de servicio"],
      photos: ["/properties/colinas-del-sol.svg"],
    },
  ],

  propertyStatusLabels: {
    disponible: "Disponible",
    en_proceso: "En proceso",
    vendido: "Vendido",
  },

  // -----------------------------------------------------------
  // Landing — todo el copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Catálogo", href: "/#catalogo" },
      { label: "Valorar", href: "/#valorar" },
      { label: "Certeza fiscal", href: "/#certeza-fiscal" },
    ],
    navCta: { label: "Valoración gratuita", href: "/#valorar" },
    hero: {
      eyebrow: "Vidia Inmobiliaria Real del Norte · Chihuahua",
      title: "Tranquilidad y certeza jurídica en cada paso de tu transacción inmobiliaria",
      subtitle:
        "Tu patrimonio en manos certificadas. Hacemos simple lo complejo: asesoría fiscal y legal a tu alcance, con un catálogo transparente y trato directo por WhatsApp.",
      cta: {
        label: "Quiero vender mi propiedad con seguridad",
        href: "/#valorar",
      },
      ctaSecondary: {
        label: "Buscar propiedades disponibles",
        href: "/#catalogo",
      },
    },
    valuation: {
      id: "valorar",
      eyebrow: "Para propietarios",
      title: "Valora tu propiedad",
      subtitle:
        "Agenda una opinión de valor comercial. Un asesor certifica el inmueble en sitio; aquí solo captamos los datos para coordinar la visita. No calculamos el precio en automático.",
      submitLabel: "Solicitar opinión de valor comercial",
      submittingLabel: "Preparando mensaje…",
      privacyNote:
        "Solo pedimos datos de pre-perfilamiento. Escrituras, predial e identificaciones se entregan en persona, previa firma física del Aviso de Privacidad.",
      fields: {
        nombre: {
          name: "nombre",
          label: "Nombre del propietario",
          placeholder: "Perla Janeth Jáquez",
          required: true,
        },
        telefono: {
          name: "telefono",
          label: "Teléfono de contacto",
          placeholder: "614 123 4567",
          required: true,
        },
        ubicacion: {
          name: "ubicacion",
          label: "Ubicación del inmueble",
          placeholder: "Colonia o zona en Chihuahua",
          required: true,
        },
        m2: {
          name: "m2",
          label: "Metros cuadrados aproximados",
          placeholder: "150",
          required: true,
        },
        estatusLegal: {
          name: "estatusLegal",
          label: "Estado legal",
          required: true,
          options: [
            { value: "Libre de gravamen", label: "Libre de gravamen" },
            { value: "Con hipoteca", label: "Con hipoteca" },
          ],
        },
      },
    },
    catalog: {
      id: "catalogo",
      eyebrow: "Para compradores",
      title: "Catálogo de propiedades en Chihuahua",
      subtitle:
        "Fichas transparentes con fotos, medidas y precio de salida. Sin datos personales del dueño, de acuerdo con la NOM-247.",
      ctaLabel: "Agendar visita / Perfilamiento",
      empty: "No hay propiedades con ese filtro. Prueba otra búsqueda.",
      filters: [
        { id: "all", label: "Todas", minBedrooms: 0 },
        { id: "2plus", label: "2+ recámaras", minBedrooms: 2 },
        { id: "3plus", label: "3+ recámaras", minBedrooms: 3 },
      ],
      labels: {
        land: "Terreno",
        construction: "Construcción",
        bedrooms: "Recámaras",
        bathrooms: "Baños",
      },
    },
    buyerProfiling: {
      title: "Perfilamiento para agendar visita",
      subtitle:
        "Antes de coordinar la visita confirmamos un perfil inicial. El asesor valida la viabilidad de forma formal.",
      submitLabel: "Revisar perfil e ir a WhatsApp",
      whatsappLabel: "Enviar datos y agendar por WhatsApp",
      submittingLabel: "Preparando mensaje…",
      closeLabel: "Cerrar",
      backLabel: "Editar datos",
      privacyNote:
        "No pedimos identificaciones ni documentos oficiales en línea. El expediente se integra en la cita presencial.",
      fields: {
        nombre: {
          name: "nombre",
          label: "Nombre completo",
          placeholder: "Ana Aurora Medina",
          required: true,
        },
        telefono: {
          name: "telefono",
          label: "Teléfono",
          placeholder: "614 987 6543",
          required: true,
        },
        formaPago: {
          name: "formaPago",
          label: "Forma de pago",
          required: true,
          options: [
            { value: "Recursos propios", label: "Recursos propios / efectivo" },
            { value: "Crédito Infonavit", label: "Crédito Infonavit" },
            { value: "Crédito bancario", label: "Crédito bancario" },
          ],
        },
        ingresos: {
          name: "ingresos",
          label: "Ingresos mensuales aproximados",
          placeholder: "18000",
          required: true,
        },
      },
      viability: {
        minMonthlyIncomeCredit: 15000,
        cashValues: ["Recursos propios"],
        viableTitle: "Perfil inicial viable",
        viableBody:
          "Con los datos capturados podemos coordinar la visita. El asesor confirmará documentos y capacidad en la cita.",
        reviewTitle: "Requiere revisión del asesor",
        reviewBody:
          "Igual te atendemos. Un asesor revisará opciones de crédito o de inmueble antes de agendar en sitio.",
      },
    },
    fiscal: {
      id: "certeza-fiscal",
      eyebrow: "Certeza legal y fiscal",
      title: "ISR, expediente de venta y derechos del consumidor",
      subtitle:
        "Te explicamos con claridad la enajenación de bienes, las exenciones de ISR y cómo armar un expediente que cumpla la NOM-247-SE-2021.",
      cta: {
        label: "Agendar asesoría fiscal por WhatsApp",
        href: "fiscal",
      },
      items: [
        {
          icon: "Scale",
          title: "Exención de ISR para casa habitación",
          body: "Si cumples los requisitos del SAT, la venta de tu casa habitación puede quedar exenta. Te orientamos con predial, escrituras y tiempos antes de firmar.",
        },
        {
          icon: "FileCheck",
          title: "Expediente de venta en orden",
          body: "Te decimos qué documentos llevar a la notaría y cuáles se firman en físico: aviso de privacidad, inventario y contratos de intermediación.",
        },
        {
          icon: "ShieldCheck",
          title: "NOM-247 y datos personales",
          body: "El catálogo no publica datos del dueño. La entrega de identificaciones y escrituras es presencial, nunca por un formulario web.",
        },
      ],
    },
    whatsappFallback: {
      copiedTitle: "Mensaje copiado",
      copiedBody: "Abre WhatsApp y envíalo al {phone}.",
      noPhoneBody:
        "Mensaje copiado. Pégalo en WhatsApp para enviarlo a Vidia Inmobiliaria.",
      copyFailed:
        "No se pudo abrir WhatsApp ni copiar el mensaje. Anótalo y escríbenos por teléfono.",
    },
    finalCta: {
      eyebrow: "Hablemos",
      title: "Empieza con una valoración o una visita formal",
      subtitle:
        "Propietarios y compradores en Chihuahua: te acompañamos con certeza jurídica, asesoría de ISR y trato directo por WhatsApp.",
      cta: { label: "Valorar mi propiedad", href: "/#valorar" },
      ctaSecondary: { label: "Ver el catálogo", href: "/#catalogo" },
    },
    // Se conservan por si se reactivan los toggles de la plantilla
    problem: {
      eyebrow: "El problema",
      title: "Tu patrimonio merece un proceso formal, no improvisado.",
      subtitle:
        "Vender o comprar en Chihuahua implica ISR, notaría y certeza jurídica. Nosotros lo hacemos simple.",
      items: [],
    },
    features: {
      eyebrow: "Servicios",
      title: "Lo que ya puedes hacer aquí",
      subtitle: "",
      items: [],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Preguntas frecuentes",
      items: [],
    },
    waitlist: {
      eyebrow: "Lista",
      title: "Déjanos tu correo",
      subtitle: "",
      successMessage: "Listo.",
      buttonLabel: "Enviar",
      placeholder: "tu@email.com",
    },
    footer: {
      tagline:
        "Vidia Inmobiliaria Real del Norte. Asesoría inmobiliaria con certeza jurídica y fiscal en Chihuahua.",
      credit: "Vidia Inmobiliaria Real del Norte · Chihuahua, Chih.",
      columns: [
        {
          title: "Servicios",
          links: [
            { label: "Valorar propiedad", href: "/#valorar" },
            { label: "Catálogo", href: "/#catalogo" },
            { label: "Certeza fiscal", href: "/#certeza-fiscal" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Aviso de Privacidad (LFPDPPP)", href: "/aviso-de-privacidad" },
            { label: "Carta de Derechos (NOM-247)", href: "/carta-derechos" },
          ],
        },
        {
          title: "Contacto",
          links: [
            { label: "Chihuahua, Chihuahua", href: "/#inicio" },
            { label: "WhatsApp", href: "/#valorar" },
          ],
        },
      ],
      links: [
        { label: "Aviso de Privacidad", href: "/aviso-de-privacidad" },
        { label: "NOM-247", href: "/carta-derechos" },
      ],
    },
  },

  // -----------------------------------------------------------
  // Páginas legales (HTML). Pon el PDF en public/legal/ y llena pdfHref.
  // -----------------------------------------------------------
  legal: {
    aviso: {
      title: "Aviso de Privacidad",
      eyebrow: "LFPDPPP",
      subtitle:
        "Vidia Inmobiliaria Real del Norte protege los datos personales que recaba para prestar servicios inmobiliarios en Chihuahua.",
      pdfHref: null,
      pdfLabel: "Descargar Aviso de Privacidad (PDF)",
      backLabel: "Volver al inicio",
      updatedLabel: "Última actualización: agosto 2026",
      sections: [
        {
          title: "Responsable",
          body: "Vidia Inmobiliaria Real del Norte, con domicilio en Chihuahua, Chihuahua, México, es responsable del tratamiento de los datos personales que recabe a través de este sitio y de sus formularios de pre-perfilamiento.",
        },
        {
          title: "Datos que recabamos en línea",
          body: "En la web solo pedimos datos de pre-perfilamiento: nombre, teléfono, ubicación general del inmueble, superficies aproximadas, estado legal declarado, forma de pago e ingresos aproximados. No solicitamos escrituras, identificaciones oficiales, prediales ni expedientes completos por este medio.",
        },
        {
          title: "Finalidad",
          body: "Utilizamos esos datos para contactarte por WhatsApp, agendar una opinión de valor o una visita, y orientar una asesoría fiscal o legal inicial. El expediente formal se integra en cita presencial, previa firma física de este aviso y del inventario correspondiente.",
        },
        {
          title: "Transferencias y derechos ARCO",
          body: "No vendemos tu información. Para ejercer derechos de acceso, rectificación, cancelación u oposición, escríbenos a hola@vidiainmobiliaria.com o acude a nuestra asesoría en Chihuahua.",
        },
      ],
    },
    carta: {
      title: "Carta de Derechos del Consumidor",
      eyebrow: "NOM-247-SE-2021",
      subtitle:
        "Tríptico de derechos y obligaciones en la prestación de servicios inmobiliarios, en formato visible y descargable.",
      pdfHref: null,
      pdfLabel: "Descargar Carta de Derechos (PDF)",
      backLabel: "Volver al inicio",
      updatedLabel: "NOM-247-SE-2021",
      sections: [
        {
          title: "Información clara del inmueble",
          body: "Tienes derecho a conocer superficie de terreno y construcción, recámaras, baños, precio de salida y estatus comercial antes de agendar una visita. Este catálogo no publica datos personales del propietario.",
        },
        {
          title: "Contratos y apartados",
          body: "Los contratos de intermediación y la entrega de arras se firman en físico, ante asesoría y, cuando corresponde, ante notaría. Este sitio no cobra señas ni genera contratos digitales de adhesión.",
        },
        {
          title: "Privacidad y documentos",
          body: "La entrega de escrituras, actas, prediales e identificaciones se hace de manera presencial, previa firma del Aviso de Privacidad. No subas documentos oficiales a formularios web.",
        },
        {
          title: "Asesoría profesional",
          body: "Puedes solicitar orientación sobre ISR por enajenación de bienes, exenciones aplicables a casa habitación y la integración de tu expediente de venta o compra.",
        },
      ],
    },
  },

  // -----------------------------------------------------------
  // Pricing — vitrina de planes (apagada en features.pricing)
  // -----------------------------------------------------------
  pricing: {
    eyebrow: "Precios",
    title: "Simple y sin sorpresas.",
    subtitle: "Empieza gratis. Sube de plan cuando tu producto crezca.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: 0,
        currency: "USD",
        interval: "mes",
        description: "Para probar el producto.",
        features: ["Hasta 100 usuarios", "Soporte por email", "Branding Vidia"],
        cta: "Empezar gratis",
      },
      {
        id: "pro",
        name: "Pro",
        price: 29,
        currency: "USD",
        interval: "mes",
        description: "Para founders que ya facturan.",
        features: ["Usuarios ilimitados", "Soporte prioritario", "Sin branding"],
        cta: "Probar Pro",
        highlighted: true,
      },
    ],
  },
}

export default config
