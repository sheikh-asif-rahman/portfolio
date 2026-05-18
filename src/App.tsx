// App.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 pt-20">
      <Navbar />

      <Hero />
      <Skills />

      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;