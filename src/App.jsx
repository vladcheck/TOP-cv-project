import { Footer } from "./components/Footer";
import { MakeResume } from "./components/MakeResume";
import { Resume } from "./components/resume/Resume";
function App() {
  return (
    <>
      <main>
        <MakeResume />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
