import { Form } from "./Form";

export function MakeResume({ setFormEntries }) {
  return (
    <section className="make-resume-section">
      <header className="form-header">
        <h1>Make your resume</h1>
      </header>
      <Form setFormEntries={setFormEntries} />
    </section>
  );
}
