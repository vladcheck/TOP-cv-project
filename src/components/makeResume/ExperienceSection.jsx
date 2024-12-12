import { Button } from "../Button";
import { ExperienceBlock } from "./ExperienceBlock";

export function ExperienceSection({ experienceBlocks, setExperienceBlocks }) {
  return (
    <section className="experience-section">
      <header>
        <div className="row">
          <h2>My experience</h2>
          <Button
            name="Add"
            cb={() => {
              setExperienceBlocks([...experienceBlocks, ExperienceBlock()]);
            }}
          />
        </div>
        <hr />
      </header>
      <div className="experience-list">{experienceBlocks}</div>
    </section>
  );
}
