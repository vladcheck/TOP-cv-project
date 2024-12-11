export default function ResumeExperienceRow(props) {
  return (
    <li className="experience-row">
      At {props.place} as {props.role} since {props.start} until {props.end}
    </li>
  );
}
