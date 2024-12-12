import { Button } from "../Button";
import { ExperienceSection } from "./ExperienceSection";
import { InputGroup } from "./InputGroup";
import { InputRow } from "./InputRow";
import { useState } from "react";

const groupPersonal = (
  <InputGroup header="Personal information">
    <InputRow name="Name" inputName="first-name" placeholder="Joshua" required={true} defaultValue={"adsf"} />
    <InputRow name="Second name" inputName="second-name" placeholder="Musk" required={true} defaultValue={"adsf"} />
    <InputRow name="Third name" inputName="third-name" />
    <InputRow type="number" name="Age" inputName="age" placeholder="34" required={true} defaultValue={23} />
  </InputGroup>
);
const groupContacts = (
  <InputGroup header="Contacts">
    <InputRow
      type="tel"
      name="Phone (work)"
      inputName="phone"
      placeholder="+77572121232"
      required={true}
      defaultValue={"adsf"}
    />
    <InputRow
      type="email"
      name="Email (work)"
      inputName="email"
      placeholder="hi@yandex.ru"
      required={true}
      defaultValue={"adsf@a"}
    />
    <InputRow name="GitHub nickname" inputName="github-nickname" placeholder="JoshuaMusk" />
  </InputGroup>
);
const groupEducation = (
  <InputGroup header="Education">
    <InputRow
      name="Full name of college/university"
      inputName="study-place"
      placeholder="Harvard"
      required={true}
      defaultValue={"adsf"}
    />
    <InputRow
      name="Full name of study"
      inputName="study-name"
      placeholder="Bioengineering"
      required={true}
      defaultValue={"adsf"}
    />
    <InputRow type="date" name="Start date" inputName="study-start" required={true} defaultValue={"adsf"} />
    <InputRow type="date" name="Graduation date" inputName="study-end" required={true} defaultValue={"12-23-23"} />
  </InputGroup>
);
const id = "resume-form";

export function Form({ setFormEntries }) {
  const [experienceBlocks, setExperienceBlocks] = useState([]);

  return (
    <form action="." id={id}>
      {groupPersonal}
      {groupContacts}
      {groupEducation}
      <ExperienceSection setExperienceBlocks={setExperienceBlocks} experienceBlocks={experienceBlocks} />
      <Button
        type="submit"
        name="Submit"
        cb={(e) => {
          const form = document.getElementById(id);
          if (form.checkValidity()) {
            e.preventDefault();
            const inputs = form.querySelectorAll(".input-row");
            const entries = [...inputs].reduce((acc, curr) => {
              const key = curr.querySelector(".input-name").textContent;
              const value = curr.querySelector("input").value;
              if (value) acc[key] = value;
              return acc;
            }, {});
            setFormEntries({ firstLevel: entries });
          }
        }}
      ></Button>
    </form>
  );
}
