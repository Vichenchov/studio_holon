import { useEffect, useState } from "react";
import tallDrawing from "../../Resources/tall_drawing.svg";
import v2_g from "../../Resources/Vector2-green.svg";

const SecondSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementLeft = document.querySelector(".element-left");
      const elementRight = document.querySelector(".element-right");
      const positionFromTop = elementLeft.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        !animated &&
        Math.abs(positionFromTop) - windowHeight / 2 <= 0 &&
        currentScrollTop > 0
      ) {
        setAnimated(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div className="secondSec_container">
      <div className="secondSec_container--text">
        <div id="lessons" className="secondSec_container--text--1">
          <h2>השיעורים שלנו</h2>
          <p>
            בשיעורים שלנו, הילדים מכירים בנושאים ובטכניקות שונות, ומבטיחים כי כל
            שיעור הוא חוויה חינוכית ומרתקת. מהתרשמות בנושאי אמנות מרתקים ומשימוש
            בסגנונות ונושאים שונים, השיעורים שלנו מציעים גישה המעודדת חקירה
            וביטוי עצמי
          </p>
        </div>
        <div id="teacher" className="secondSec_container--text--2">
          <h2>המורה שלנו</h2>
          <p>
            היי, שמי גלינה, בעלת תואר בחינוך עם יותר מ-20 שנות ניסיון בתחום
            האומנות והעבודה עם ילדים. בשיעורים שלי, אני מבטיחה לכל ילד יחס אישי,
            ודואגת כי כל אחד מהם יקבל את תשומת ליבי האישית והליווי שהוא צריך.
            אני מחויבת לפתח את יכולות האמנות של כל תלמיד ולקדם אהבה גדולה ליצירה
          </p>
        </div>
      </div>
      <div className="secondSec_container--img">
        <img
          className={`tall_drawing element-right ${
            animated ? "animate-right" : ""
          }`}
          src={tallDrawing}
          alt="אישה מציירת על קאנבאס"
        />
        <img
          className={`svg-v2_g element-left ${animated ? "animate-left" : ""}`}
          src={v2_g}
          alt="כתם בצע טורקיז"
        />
      </div>
    </div>
  );
};

export default SecondSection;
