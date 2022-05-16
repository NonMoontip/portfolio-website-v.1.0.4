import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Version from './Components/Version';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
      <Version />
    </>
  );
}

export default App;
