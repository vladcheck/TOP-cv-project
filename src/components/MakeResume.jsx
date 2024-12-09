import { HeaderWithSeparator } from "./HeaderWithSeparator";
import { Form } from "./Form";

export function MakeResume() {
  return (
    <section className="make-resume">
      <HeaderWithSeparator type={1} text="Make your resume" />
      <Form />
    </section>
  );
}
