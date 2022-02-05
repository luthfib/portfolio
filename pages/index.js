import { Experience } from "../components/Experience";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";

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
