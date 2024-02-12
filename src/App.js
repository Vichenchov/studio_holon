import "./Sass/index.scss";

import Hero from "./Components/Sections/Hero";

import SecondSection from "./Components/Sections/secondSection";
import TechnicalInfo from "./Components/Sections/technicalInfo";
import MainNavigation from "./Components/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Hero />
      <SecondSection />
      <TechnicalInfo />
    </>
  );
}

export default App;
