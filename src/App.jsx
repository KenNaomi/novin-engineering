import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CEO from "./components/CEO/CEO";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";
import EngineeringCursor from "./components/EngineeringCursor/EngineeringCursor";
import EngineeringBackground from "./components/EngineeringBackground/EngineeringBackground";
function App() {

  return (
    <>

      <Loader/>

      <Navbar/>

      <Hero/>

      <About/>

      <CEO/>

      <Services/>

      <Projects />

      <Statistics />

      <Footer/>
      
      <EngineeringBackground/>

      <EngineeringCursor/>

    </>
  );

}

export default App;