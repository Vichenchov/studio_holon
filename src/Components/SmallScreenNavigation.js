const SmallScreenNavigation = () => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>קצת עלינו</li>
            </a>
            <a href="#">
              <li>על המורה</li>
            </a>
            <a href="#">
              <li>פרטי השיעורים</li>
            </a>
            <a href="#">
              <li>צור קשר</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SmallScreenNavigation;
