import { cn } from "@/lib/cn";

type BaseProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
};

const controlBase =
  "w-full rounded-lg border bg-ink-900/60 px-3.5 py-2.5 text-sm text-paper placeholder:text-mist-400/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

function Wrapper({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className={cn("flex flex-col gap-1.5", className)} data-field={describedBy}>
      <label htmlFor={id} className="text-sm font-medium text-mist-200">
        {label}
        {required && <span className="ml-0.5 text-accent-300" aria-hidden> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-mist-400">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const borderState = (error?: string) =>
  error ? "border-red-400/60" : "border-ink-600 hover:border-ink-500";

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
        className={cn(controlBase, borderState(base.error))}
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
        className={cn(
          controlBase,
          borderState(base.error),
          value ? "text-paper" : "text-mist-400/70",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900 text-paper">
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
