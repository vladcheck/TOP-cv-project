import { InputRow } from "./InputRow";
import { Button } from "../Button";

export default function ExperienceInputGroup() {
  return (
    <div className="input-group">
      <header className="experience-header">
        <h3>Experience</h3>
        <Button name="Remove this entry" />
      </header>
      <hr />
      <InputRow name="Company full name" inputName="company" placeholder="Google LTD" required={true} />
      <InputRow name="Position" inputName="position" placeholder="CI/CD specialist" required={true} />
      <InputRow type="date" name="Date from" inputName="data-from" required={true} />
      <InputRow type="date" name="Date until" inputName="date-until" required={true} />
    </div>
  );
}
