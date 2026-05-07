// App.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
<div className="min-h-screen bg-zinc-50 pt-20">
          <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;