import { useEffect, useState } from "react";

import SmallScreenNavigation from "./SmallScreenNavigation";
import logo from "../Resources/logo.png";

const MainNavigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 950px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:950px)");
    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addListener(handleScreenChange);
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);

  const handleAnchorClick = (event, sectionId) => {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {!isSmallScreen ? (
        <nav role="navigation" className="nav-container">
          <ul>
            <li>
              <a
                href="#lessons"
                onClick={(e) => handleAnchorClick(e, "lessons")}
                className="navigation_a"
              >
                השיעורים שלנו
              </a>
            </li>
            <li>
              <a
                href="teacher"
                onClick={(e) => handleAnchorClick(e, "teacher")}
                className="navigation_a"
              >
                המורה שלנו
              </a>
            </li>
            <li>
              <a
                href="technical_stuff"
                onClick={(e) => handleAnchorClick(e, "technical_stuff")}
                className="navigation_a"
              >
                פרטי השיעורים
              </a>
            </li>
            <li>
              <a
                href="contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
                className="navigation_a"
              >
                צור קשר
              </a>
            </li>
            <li>
              <img className="logo" src={logo} alt="logo" />
            </li>
          </ul>
        </nav>
      ) : (
        <SmallScreenNavigation />
      )}
    </>
  );
};

export default MainNavigation;
