import Background from '../components/ui/Background';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Home />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
