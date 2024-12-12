import { Button } from "../Button";
import { ExperienceSection } from "./ExperienceSection";
import { InputGroup } from "./InputGroup";
import { InputRow } from "./InputRow";
import { useState } from "react";

const groupPersonal = (
  <InputGroup header="Personal information">
    <InputRow name="Name" inputName="first-name" placeholder="Joshua" required={true} />
    <InputRow name="Second name" inputName="second-name" placeholder="Musk" required={true} />
    <InputRow name="Third name" inputName="third-name" />
    <InputRow type="number" name="Age" inputName="age" placeholder="34" required={true} />
  </InputGroup>
);
const groupContacts = (
  <InputGroup header="Contacts">
    <InputRow type="tel" name="Phone (work)" inputName="phone" placeholder="+77572121232" required={true} />
    <InputRow type="email" name="Email (work)" inputName="email" placeholder="hi@yandex.ru" required={true} />
    <InputRow name="GitHub nickname" inputName="github-nickname" placeholder="JoshuaMusk" />
  </InputGroup>
);
const groupEducation = (
  <InputGroup header="Education">
    <InputRow name="Full name of college/university" inputName="study-place" placeholder="Harvard" required={true} />
    <InputRow name="Full name of study" inputName="study-name" placeholder="Bioengineering" required={true} />
    <InputRow type="date" name="Start date" inputName="study-start" required={true} />
    <InputRow type="date" name="Graduation date" inputName="study-end" required={true} />
  </InputGroup>
);
export function Form() {
  let [inputGroups, setInputGroups] = useState([groupPersonal, groupContacts, groupEducation]);

  return (
    <form action="." id="resume-form">
      {groupPersonal}
      {groupContacts}
      {groupEducation}
      <ExperienceSection />
      <Button type="submit" name="Submit"></Button>
    </form>
  );
}
