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
  "w-full rounded-xl border bg-white px-4 py-3 text-base text-graphite placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

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
      <label htmlFor={id} className="text-sm font-semibold text-graphite">
        {label}
        {required && <span className="ml-0.5 text-cobalt-600" aria-hidden> *</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const borderState = (error?: string) =>
  error ? "border-red-400" : "border-platinum-300 hover:border-slate-400";

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
          value ? "text-graphite" : "text-slate-400",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-white text-graphite">
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
