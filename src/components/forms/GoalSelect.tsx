import { SelectField } from "@/components/ui/Field";
import { goalOptions } from "@/lib/site";

/** Main-growth-goal select - qualifies the lead and shapes the call. */
export function GoalSelect({
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
      id="goal"
      label="Main growth goal"
      required
      options={goalOptions}
      placeholder="What matters most right now?"
      value={value}
      onChange={onChange}
      error={error}
    />
  );
}
