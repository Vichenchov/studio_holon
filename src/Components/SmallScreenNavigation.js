import logo from "../Resources/logo.png";

const SmallScreenNavigation = () => {
  const handleAnchorClick = (event, sectionId) => {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav role="navigation">
        <img className="logo" src={logo} alt="logo" />
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#lessons" onClick={(e) => handleAnchorClick(e, "lessons")}>
              <li>השיעורים שלנו</li>
            </a>
            <a href="#teacher" onClick={(e) => handleAnchorClick(e, "teacher")}>
              <li>המורה שלנו</li>
            </a>
            <a
              href="#technical_stuff"
              onClick={(e) => handleAnchorClick(e, "technical_stuff")}
            >
              <li>פרטי השיעורים</li>
            </a>
            <a href="#" onClick={(e) => handleAnchorClick(e, "contact")}>
              <li>צור קשר</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SmallScreenNavigation;
