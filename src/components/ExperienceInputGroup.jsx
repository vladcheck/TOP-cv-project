import { InputRow } from "./InputRow";

export default function ExperienceInputGroup() {
  return (
    <div className="input-group">
      <h3>Experience</h3>
      <InputRow name="Company full name" inputName="company" placeholder="Google LTD" required={true} />
      <InputRow name="Position" inputName="position" placeholder="CI/CD specialist" required={true} />
      <InputRow type="date" name="Date from" inputName="data-from" required={true} />
      <InputRow type="date" name="Date until" inputName="date-until" required={true} />
    </div>
  );
}
