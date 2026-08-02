import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#07111D] transition-all duration-500">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
       <About />
       <Contact />
    </div>
  );
}

export default App;