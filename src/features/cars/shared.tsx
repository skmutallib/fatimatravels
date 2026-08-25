import { siteConfig } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  Enquiry helper                                                     */
/* ------------------------------------------------------------------ */

export const WA = siteConfig.whatsapp.replace(/\D/g, "");
export const enquire = (model: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi Fatima Travels, I'd like to enquire about the ${model} (chauffeur-driven).`,
  )}`;

/* ------------------------------------------------------------------ */
/*  Illustration palette (home-page flat style)                        */
/* ------------------------------------------------------------------ */

/* Luxury car finishes — real metallic tones, not cartoon colors. */
export const paints = [
  { body: "#1f2937", roof: "#0f172a" }, // obsidian black
  { body: "#334155", roof: "#1e293b" }, // gunmetal
  { body: "#1e3a5f", roof: "#14273f" }, // midnight blue
  { body: "#475569", roof: "#2f3e52" }, // graphite
  { body: "#8a94a6", roof: "#5b6577" }, // liquid silver
];
export const paint = (i: number) => paints[i % paints.length];

export type Vehicle = "sedan" | "suv" | "van" | "bus";

/* Shared gradient overlays that turn flat shapes into a rendered, metallic look. */
function VehDefs() {
  return (
    <defs>
      <linearGradient id="veh-sheen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
        <stop offset="42%" stopColor="#ffffff" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="veh-shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="52%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.32" />
      </linearGradient>
      <linearGradient id="veh-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.55" />
        <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
      </linearGradient>
      <radialGradient id="veh-hub" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#6b7280" />
      </radialGradient>
    </defs>
  );
}

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0b0f16" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1f2937" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r * 0.42} fill="url(#veh-hub)" />
      <circle cx={cx} cy={cy} r={r * 0.14} fill="#374151" />
    </g>
  );
}

export function VehicleArt({
  variant,
  color,
  roof,
}: {
  variant: Vehicle;
  color: string;
  roof: string;
}) {
  if (variant === "suv") {
    const bodyD =
      "M12 84c-3 0-5-2-5-5V56c0-6 4-11 10-12l12-2 18-24c3-4 8-6 13-6h60c6 0 11 3 14 8l15 24 18 3c7 1 12 7 12 14v13c0 3-2 5-5 5H12Z";
    const roofD = "M58 20c2-3 6-5 10-5h54c5 0 10 3 13 7l13 20H46l12-22Z";
    return (
      <svg viewBox="0 0 230 120" fill="none" className="h-full w-full">
        <VehDefs />
        <ellipse cx="115" cy="108" rx="92" ry="7" fill="#000" opacity="0.14" />
        <path d={bodyD} fill={color} />
        <path d={roofD} fill={roof} />
        <path d={roofD} fill="url(#veh-glass)" />
        <path d="M96 16v26" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
        <path d={bodyD} fill="url(#veh-sheen)" />
        <path d={bodyD} fill="url(#veh-shade)" />
        <Wheel cx={62} cy={88} r={18} />
        <Wheel cx={168} cy={88} r={18} />
      </svg>
    );
  }
  if (variant === "van") {
    const bodyD =
      "M10 86c-3 0-5-2-5-5V40c0-7 5-13 12-14l8-1 12-14c3-4 8-6 13-6h108c7 0 12 4 13 11l8 46v29c0 3-2 5-5 5H10Z";
    const roofD = "M44 20c2-3 6-5 10-5h94c6 0 11 4 12 10l4 23H32l12-28Z";
    return (
      <svg viewBox="0 0 240 120" fill="none" className="h-full w-full">
        <VehDefs />
        <ellipse cx="120" cy="108" rx="96" ry="7" fill="#000" opacity="0.14" />
        <path d={bodyD} fill={color} />
        <path d={roofD} fill={roof} />
        <path d={roofD} fill="url(#veh-glass)" />
        <path d="M78 12v36M116 12v36" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
        <path d={bodyD} fill="url(#veh-sheen)" />
        <path d={bodyD} fill="url(#veh-shade)" />
        <Wheel cx={62} cy={90} r={17} />
        <Wheel cx={178} cy={90} r={17} />
      </svg>
    );
  }
  if (variant === "bus") {
    const bodyD =
      "M16 20h216c8 0 14 6 14 14v46c0 5-4 9-9 9H14c-5 0-9-4-9-9V34c0-8 5-14 11-14Z";
    return (
      <svg viewBox="0 0 260 110" fill="none" className="h-full w-full">
        <VehDefs />
        <ellipse cx="130" cy="100" rx="116" ry="6" fill="#000" opacity="0.14" />
        <path d={bodyD} fill={color} />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={30 + i * 27} y={32} width={19} height={17} rx={3} fill={roof} />
        ))}
        <rect x="234" y="32" width="9" height="17" rx="2" fill={roof} />
        <rect x="14" y="30" width="232" height="20" fill="url(#veh-glass)" opacity="0.5" />
        <path d={bodyD} fill="url(#veh-sheen)" />
        <path d={bodyD} fill="url(#veh-shade)" />
        <Wheel cx={70} cy={90} r={15} />
        <Wheel cx={196} cy={90} r={15} />
      </svg>
    );
  }
  // sedan
  const bodyD =
    "M14 74c-3 0-5-2-5-5v-6c0-6 4-11 10-12l24-4 20-16c3-2 6-3 10-3h44c5 0 10 2 14 6l14 13 26 5c7 1 12 7 12 14v3c0 3-2 5-5 5H14Z";
  const roofD = "M76 30c2-2 5-3 8-3h40c4 0 8 2 11 5l11 11H62l14-13Z";
  return (
    <svg viewBox="0 0 220 110" fill="none" className="h-full w-full">
      <VehDefs />
      <ellipse cx="110" cy="98" rx="86" ry="7" fill="#000" opacity="0.14" />
      <path d={bodyD} fill={color} />
      <path d={roofD} fill={roof} />
      <path d={roofD} fill="url(#veh-glass)" />
      <path d="M104 27v16" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
      <path d={bodyD} fill="url(#veh-sheen)" />
      <path d={bodyD} fill="url(#veh-shade)" />
      <Wheel cx={62} cy={80} r={16} />
      <Wheel cx={162} cy={80} r={16} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Luxury marque catalogue (shared by the cars page + brand pages)    */
/* ------------------------------------------------------------------ */

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type Marque = {
  brand: string;
  tag: string;
  variant: Vehicle;
  models: string[];
};

export const luxuryBrands: Marque[] = [
  { brand: "Mercedes-Benz", tag: "Germany", variant: "sedan", models: ["E-Class", "S-Class", "GLE", "GLS"] },
  {
    brand: "BMW",
    tag: "Germany",
    variant: "sedan",
    models: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7"],
  },
  { brand: "Audi", tag: "Germany", variant: "sedan", models: ["A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8"] },
  { brand: "Jaguar", tag: "Britain", variant: "sedan", models: ["XF", "XJL"] },
  { brand: "Volvo", tag: "Sweden", variant: "suv", models: ["S90", "XC90"] },
  { brand: "Lexus", tag: "Japan", variant: "suv", models: ["ES 300h", "LX 600"] },
  { brand: "Range Rover", tag: "Britain", variant: "suv", models: ["Range Rover", "SUV & Sedan"] },
];

export const getMarque = (slug: string) =>
  luxuryBrands.find((b) => slugify(b.brand) === slug);
