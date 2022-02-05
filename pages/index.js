import { Experience } from "../components/experience";
import Footer from "../components/footer";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div className="app">
      <Intro />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
