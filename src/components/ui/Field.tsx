import { cn } from "@/lib/cn";

export type FieldTone = "light" | "dark";

type BaseProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  tone?: FieldTone;
  className?: string;
};

// Premium control styling per tone. Light = ivory/white surfaces with cobalt
// focus; dark = used inside the deep-navy conversion panels.
const controlBase =
  "w-full rounded-xl border px-3.5 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const toneControl: Record<FieldTone, string> = {
  light:
    "bg-white text-graphite-900 placeholder:text-graphite-400 focus-visible:ring-cobalt-500 focus-visible:ring-offset-white",
  dark:
    "bg-navy-950/60 text-white placeholder:text-white/40 focus-visible:ring-cobalt-400 focus-visible:ring-offset-navy-900",
};

const toneBorder = (tone: FieldTone, error?: string) => {
  if (error) return tone === "light" ? "border-red-500/70" : "border-red-400/60";
  return tone === "light"
    ? "border-graphite-900/15 hover:border-graphite-900/30"
    : "border-white/15 hover:border-white/30";
};

const toneText = {
  light: { label: "text-graphite-700", hint: "text-graphite-500", req: "text-cobalt-600", err: "text-red-600" },
  dark: { label: "text-white/85", hint: "text-white/50", req: "text-cobalt-300", err: "text-red-300" },
} as const;

function Wrapper({
  id,
  label,
  required,
  error,
  hint,
  tone = "dark",
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  const t = toneText[tone];
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className={cn("text-sm font-medium", t.label)}>
        {label}
        {required && <span className={cn("ml-0.5", t.req)} aria-hidden> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className={cn("text-xs", t.hint)}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className={cn("text-xs font-medium", t.err)} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/** Text-like input field (text / email / url / tel). */
export function Field({
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  inputMode,
  ...base
}: BaseProps & {
  type?: "text" | "email" | "url" | "tel";
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  inputMode?: "text" | "email" | "url" | "tel";
}) {
  const tone = base.tone ?? "dark";
  return (
    <Wrapper {...base}>
      <input
        id={base.id}
        name={base.id}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        value={value}
        required={base.required}
        autoComplete={autoComplete}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.id}-error` : base.hint ? `${base.id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(controlBase, toneControl[tone], toneBorder(tone, base.error))}
      />
    </Wrapper>
  );
}

/** Select field driven by an options list. */
export function SelectField({
  value,
  onChange,
  options,
  placeholder = "Select...",
  ...base
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder?: string;
}) {
  const tone = base.tone ?? "dark";
  const placeholderColor =
    tone === "light" ? (value ? "text-graphite-900" : "text-graphite-400") : value ? "text-white" : "text-white/40";
  return (
    <Wrapper {...base}>
      <select
        id={base.id}
        name={base.id}
        value={value}
        required={base.required}
        aria-invalid={base.error ? true : undefined}
        aria-describedby={base.error ? `${base.id}-error` : base.hint ? `${base.id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(controlBase, toneControl[tone], toneBorder(tone, base.error), placeholderColor)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className={tone === "light" ? "bg-white text-graphite-900" : "bg-navy-900 text-white"}>
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
