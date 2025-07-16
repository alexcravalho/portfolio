import Contact from './contact';
import About from './about';
import Skills from './skills';
import Software from './software';
import Experience from './experience';
import Education from './education';
import ContactFooter from '../components/Contact/ContactFooter';

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
