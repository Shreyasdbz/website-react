import React from "react";

import Nav from "./components/navigation/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Photography />
      <Contact />
    </div>
  );
}

export default App;
