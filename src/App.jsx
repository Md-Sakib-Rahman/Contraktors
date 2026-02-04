import Navbar from "./Components/Navbar"
import CallToAction from "./Sections/CallToAction/CallToAction"
import Constraints from "./Sections/Constraints/Constraints"
import Hero from "./Sections/Hero/Hero"
import Methodology from "./Sections/Methodology/Methodology"
import ProblemSection from "./Sections/ProblemSection/ProblemSection"
import Services from "./Sections/Services/Services"


function App() {


  return (
    <>
      <Navbar/>  
      <Hero/>
      <ProblemSection/>
      <Services/>
      <Methodology/>
      <Constraints/>
      <CallToAction/>
    </>
  )
}

export default App
