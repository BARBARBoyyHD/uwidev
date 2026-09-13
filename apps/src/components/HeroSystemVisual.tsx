const MONO = "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, monospace";

const STROKE_SOFT = "rgba(255, 255, 255, 0.14)";
const STROKE = "rgba(255, 255, 255, 0.25)";
const DASH = "rgba(255, 255, 255, 0.3)";
const GRID = "rgba(255, 255, 255, 0.12)";
const DOT = "rgba(255, 255, 255, 0.5)";

/** Isometric diamond path, 2:1 (width = 2 × height). */
function diamond(cx: number, cy: number, w: number, h: number) {
  return `M ${cx} ${cy - h / 2} L ${cx + w / 2} ${cy} L ${cx} ${cy + h / 2} L ${cx - w / 2} ${cy} Z`;
}

/** Thin dotted connector with small dots at both endpoints. */
function Connector({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={DASH} strokeWidth="1" strokeDasharray="2 6" />
      <circle cx={x1} cy={y1} r="2.5" fill={DOT} />
      <circle cx={x2} cy={y2} r="2.5" fill={DOT} />
    </g>
  );
}

/** Small isometric node tile with a mono label beneath it. */
function NodeTile({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <path d={diamond(cx, cy, 80, 40)} fill="rgba(255,255,255,0.04)" stroke={STROKE} strokeWidth="1" />
      <text
        x={cx}
        y={cy + 46}
        textAnchor="middle"
        fontSize="11"
        fill="#F4F6FB"
        style={{ fontFamily: MONO }}
      >
        {label}
      </text>
    </g>
  );
}

/** Floating label chip (pill) with a mono caption. */
function Chip({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  const width = label.length * 6 + 18;
  return (
    <g>
      <rect
        x={cx - width / 2}
        y={cy - 11}
        width={width}
        height={22}
        rx={11}
        fill="rgba(7,12,31,0.78)"
        stroke="rgba(255,255,255,0.18)"
      />
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        fontSize="10"
        fill="#C7CEDD"
        style={{ fontFamily: MONO }}
      >
        {label}
      </text>
    </g>
  );
}

/**
 * Floating isometric business-system diagram: Sales / Inventory / Customers
 * feed the Uwi_Dev core slab, which produces Reports. Honest labels only —
 * no fabricated operational metrics.
 *
 * Mobile: the wireframe extras and label chips are hidden; the platform,
 * node tiles, and connectors remain.
 */
export default function HeroSystemVisual() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 800 700"
        className="h-auto w-full"
        role="img"
        aria-label="Business system diagram. Sales, inventory, and customers feed into the Uwi_Dev core platform, which produces reports."
      >
        <defs>
          <linearGradient id="slab-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8FA7FF" />
            <stop offset="50%" stopColor="#3D5AFE" />
            <stop offset="100%" stopColor="#2B46D6" />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3D6BFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3D6BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft glow under the core slab — the single orchestrated motion */}
        <ellipse
          cx="400"
          cy="480"
          rx="210"
          ry="100"
          fill="url(#core-glow)"
          className="animate-core-pulse"
          aria-hidden
        />

        {/* dotted ground grid plane */}
        <g stroke={GRID} strokeWidth="1" strokeDasharray="1 7" fill="none" className="hidden md:block" aria-hidden>
          <path d={diamond(400, 420, 260, 130)} />
          <path d={diamond(315, 462, 260, 130)} />
          <path d={diamond(485, 462, 260, 130)} />
          <path d={diamond(400, 505, 260, 130)} />
        </g>

        {/* core slab — the focal object */}
        <g>
          <path d="M525,350 L400,410 L400,520 L525,460 Z" fill="#1B3FB8" />
          <path d="M275,350 L400,410 L400,520 L275,460 Z" fill="#2749D4" />
          <path
            d={diamond(400, 350, 250, 130)}
            fill="url(#slab-top)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        </g>

        {/* connectors: inputs → core, core → reports */}
        <Connector x1={225} y1={500} x2={305} y2={410} />
        <Connector x1={345} y1={555} x2={398} y2={521} />
        <Connector x1={175} y1={590} x2={320} y2={465} />
        <Connector x1={525} y1={460} x2={575} y2={520} />

        {/* node tiles */}
        <NodeTile cx={175} cy={500} label="Sales" />
        <NodeTile cx={300} cy={555} label="Inventory" />
        <NodeTile cx={140} cy={590} label="Customers" />
        <NodeTile cx={620} cy={520} label="Reports" />

        {/* floating label chips */}
        <g className="hidden md:block" aria-hidden>
          <line x1="165" y1="145" x2="290" y2="295" stroke={DASH} strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="290" cy="295" r="2.5" fill={DOT} />
          <Chip cx={165} cy={132} label="WhatsApp order sync" />
        </g>
        <g className="hidden md:block" aria-hidden>
          <line x1="620" y1="138" x2="478" y2="305" stroke={DASH} strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="478" cy="305" r="2.5" fill={DOT} />
          <Chip cx={620} cy={125} label="Ledger + reporting" />
        </g>
      </svg>
    </div>
  );
}