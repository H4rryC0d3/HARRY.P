import './App.css';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skills from './Component/Skills';
import About from './Component/About';
import Contact from './Component/Contact';
import CursorTrail from './Component/CursorTrail'; // Optional custom cursor trail

function App() {
  return (
    <>
      <CursorTrail />       {/* ✅ Optional fancy cursor effect */}
      <Navbar />
      <Home />              {/* ✅ Includes Vanta background */}
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
