import Svg1 from "../../Resources/pencils.svg";
import v1_g from "../../Resources/Vector1-orange.svg";

const Hero = () => {
  return (
    <div className="hero">
      <header>
        <h1 className="heading-primary">
          <span className="heading-primary--main">שיעורי ציור לילדים</span>
          <span className="heading-primary--sub">
            <span>
              מחפשים פעילות כיפית לילדכם המעודדת את יכולות היצירה והאמנות שלהם
              <span>?</span>
            </span>
            <br /> <br />
            <span className="decorated_text">הגעתם למקום הנכון!</span> <br />
            <br /> שיעורי הציור של סטודיו חולון מציעים סביבה למידה דינמית ומרתקת
            שבה הילדים יכולים לחקור את יכולותיהם האמנותיות ולהביע את עצמם דרך
            האמנות
          </span>
        </h1>
        <a href="#contact" className="btn">
          להשארת פרטים
        </a>
      </header>
      <div className="hero_svgs">
        <img className="svg-v1_o" src={v1_g} alt="SVG Image" />
        <img className="svg-pencils" src={Svg1} alt="SVG Image" />
      </div>
    </div>
  );
};

export default Hero;
