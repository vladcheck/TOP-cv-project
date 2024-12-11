import ResumeExperienceRow from "./ResumeExperienceRow";
import { ResumeExperienceSection } from "./ResumeExperienceSection";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeInputGroup } from "./ResumeInputGroup";

export function Resume() {
  return (
    <section className="resume">
      <ResumeHeader />
      <ResumeInputGroup
        header="Personal"
        entries={{ Name: "Joshua", "Second name": "Musk", "Third name": "Karlson", age: 24 }}
      />
      <ResumeInputGroup
        header="Contacts"
        entries={{ "Phone number": "+7-918-232-12-21", Email: "group@gmail.com", Github: "@JoshuaMusk12" }}
      />
      <ResumeInputGroup
        header="Education"
        entries={{
          "Full name of college/university": "Harvard university",
          "Full name of study": "Fullstack developer",
          "Start date": "12-09-2022",
          "Graduation date": "23-06-2024",
        }}
      />
      <ResumeExperienceSection>
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
        <ResumeExperienceRow name="Google LLC" role="CI/CD manager" start="24-02-24" end="24-02-24" />
      </ResumeExperienceSection>
    </section>
  );
}
