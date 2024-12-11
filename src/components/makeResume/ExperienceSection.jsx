import { ExperienceBlock } from "./ExperienceBlock";
import { HeaderWithSeparator } from "./HeaderWithSeparator";
export function ExperienceSection() {
  return (
    <section className="experience-section">
      <HeaderWithSeparator type={2} text="My experience" />
      <div className="experience-list">
        <ExperienceBlock />
        <ExperienceBlock />
        <ExperienceBlock />
      </div>
    </section>
  );
}
