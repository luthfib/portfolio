import { Education } from "../components/education";
import { Experience } from "../components/experience";
import Footer from "../components/footer";
import Head from "next/head";
import { Intro } from "../components/intro";
import { Projects } from "../components/projects";
import { SourceCode } from "../components/experience/source-code";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Luthfi Bustillo's Portolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SourceCode />
      <Intro />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
