import { SelectField } from "@/components/ui/Field";
import { budgetOptions } from "@/lib/site";

/** Monthly ad-budget select - helps qualify fit before the call. */
export function BudgetSelect({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <SelectField
      id="budget"
      label="Monthly ad budget"
      options={budgetOptions}
      placeholder="Approximate range"
      value={value}
      onChange={onChange}
      error={error}
      hint="A rough range is fine - it just helps us prepare."
    />
  );
}
