// import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactInfo from './Components/Contact';
import ContactForm from './Components/ContactForm';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <ContactInfo/>
    </div>
  );
}

export default App;
