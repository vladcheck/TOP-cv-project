import ResumeExperienceRow from "./ResumeExperienceRow";
import { ResumeExperienceSection } from "./ResumeExperienceSection";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeInputGroup } from "./ResumeInputGroup";

export function Resume({ formEntries }) {
  return (
    <section className="resume">
      <ResumeHeader />
      <ResumeInputGroup header="Main info" entries={formEntries.firstLevel}></ResumeInputGroup>
      <ResumeExperienceSection>
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
      </ResumeExperienceSection>
    </section>
  );
}
