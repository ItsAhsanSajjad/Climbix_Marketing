import { SelectField, type FieldTone } from "@/components/ui/Field";
import { budgetOptions } from "@/lib/site";

/** Monthly ad-budget select - helps qualify fit before the call. */
export function BudgetSelect({
  value,
  onChange,
  error,
  tone,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  tone?: FieldTone;
}) {
  return (
    <SelectField
      id="budget"
      label="Monthly ad budget"
      tone={tone}
      options={budgetOptions}
      placeholder="Approximate range"
      value={value}
      onChange={onChange}
      error={error}
      hint="A rough range is fine - it just helps us prepare."
    />
  );
}
