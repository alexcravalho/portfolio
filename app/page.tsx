import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Software from './components/Software/Software';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import ContactFooter from './components/Contact/ContactFooter';

export default function Page() {
  return (
    <div className="App">
      <Contact />
      <div className="info">
        <About />
        <Skills />
        <Software />
        <Experience />
        <Education />
      </div>
      <ContactFooter />
    </div>
  );
}
