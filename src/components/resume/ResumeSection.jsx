import { ResumeRow } from "./ResumeRow";

export function ResumeInputGroup({ header, entries }) {
  return (
    <div className="resume-input-group">
      <h2>{header}</h2>
      <hr />
      <ul>
        {Object.entries(entries).map((name, value) =>
          value ? <ResumeRow key={name} name={name} value={value} /> : null
        )}
      </ul>
    </div>
  );
}
