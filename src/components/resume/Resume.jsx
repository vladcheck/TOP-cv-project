import { ResumeHeader } from "./ResumeHeader";
import { ResumeInputGroup } from "./ResumeSection";

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
    </section>
  );
}