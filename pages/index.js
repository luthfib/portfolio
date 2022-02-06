import { Education } from "../components/education";
import { Experience } from "../components/experience";
import Footer from "../components/footer";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects";
import { SourceCode } from "../components/experience/source-code";

export default function Home() {
  return (
    <div className="app">
      <SourceCode />
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
