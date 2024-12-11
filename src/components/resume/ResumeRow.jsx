export function ResumeRow({ name, value }) {
  return (
    <li className="resume-row">
      <span className="resume-row-name">{name}</span>
      <span className="resume-row-value">{value}</span>
    </li>
  );
}
