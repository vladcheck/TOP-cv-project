import { useState } from "react";
import { Footer } from "./components/Footer";
import { MakeResume } from "./components/makeResume/MakeResume";
import { Resume } from "./components/resume/Resume";
function App() {
  const [formEntries, setFormEntries] = useState({});
  return (
    <>
      <main>
        <MakeResume setFormEntries={setFormEntries} />
        {Object.keys(formEntries).length > 0 && <Resume formEntries={formEntries} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
