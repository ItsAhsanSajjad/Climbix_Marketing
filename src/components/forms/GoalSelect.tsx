import { SelectField, type FieldTone } from "@/components/ui/Field";
import { goalOptions } from "@/lib/site";

/** Main-growth-goal select - qualifies the lead and shapes the call. */
export function GoalSelect({
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
      id="goal"
      label="Main growth goal"
      required
      tone={tone}
      options={goalOptions}
      placeholder="What matters most right now?"
      value={value}
      onChange={onChange}
      error={error}
    />
  );
}
