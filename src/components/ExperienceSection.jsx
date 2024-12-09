import { Experience } from "./Experience";

export function ExperienceSection() {
  return (
    <section className="experience-section">
      <h2>My experience</h2>
      <div className="experience-list">
        <Experience />
        <Experience />
      </div>
    </section>
  );
}
