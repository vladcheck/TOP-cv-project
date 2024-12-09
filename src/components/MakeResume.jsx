import { HeaderWithSeparator } from "./HeaderWithSeparator";
import { Form } from "./Form";

export function MakeResume() {
  return (
    <section className="make-resume">
      <header className="form-header">
        <h1>Make your resume</h1>
      </header>
      <Form />
    </section>
  );
}
