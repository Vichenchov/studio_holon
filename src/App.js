import "./Sass/index.scss";

import Hero from "./Components/Sections/Hero";
import Layout from "./Components/layout";

import Icon from "./Resources/logo.png";

function App() {
  return (
    <Layout>
      <img className="logo" src={Icon} alt="Icon" />

      <Hero />
    </Layout>
  );
}

export default App;
