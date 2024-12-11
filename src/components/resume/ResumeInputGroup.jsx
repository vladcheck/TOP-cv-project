import { ResumeRow } from "./ResumeRow";

export function ResumeInputGroup({ header, entries }) {
  console.log(Object.entries(entries));
  return (
    <div className="resume-input-group">
      <h2>{header}</h2>
      <hr />
      <ul>
        {Object.entries(entries).map((entry) =>
          entry[0] ? <ResumeRow key={entry[0]} name={entry[0]} value={entry[1]} /> : null
        )}
      </ul>
    </div>
  );
}
