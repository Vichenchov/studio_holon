import "boxicons";
import "./Sass/index.scss";

import Hero from "./Components/Sections/Hero";

import SecondSection from "./Components/Sections/secondSection";
import TechnicalInfo from "./Components/Sections/technicalInfo";
import MainNavigation from "./Components/MainNavigation";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/footer";

function App() {
  return (
    <>
      <MainNavigation />
      <Hero />
      <SecondSection />
      <TechnicalInfo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
