import { useEffect, useState } from "react";
import SmallScreenNavigation from "./SmallScreenNavigation";

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

  return (
    <>
      {!isSmallScreen ? (
        <div className="nav-container">
          <ul>
            <li>
              <a href="#" className="navigation_a">
                קצת עלינו
              </a>
            </li>
            <li>
              <a href="#" className="navigation_a">
                על המורה
              </a>
            </li>
            <li>
              <a href="#" className="navigation_a">
                פרטי השיעורים
              </a>
            </li>
            <li>
              <a href="#" className="navigation_a">
                צור קשר
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <SmallScreenNavigation />
      )}
    </>
  );
};

export default MainNavigation;
