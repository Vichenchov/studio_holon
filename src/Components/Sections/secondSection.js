import tallDrawing from "../../Resources/tall_drawing.svg";
import v2_g from "../../Resources/Vector2-green.svg";

const SecondSection = () => {
  return (
    <div className="secondSec_container">
      <div className="secondSec_container--text">
        <div id="lessons" className="secondSec_container--text--1">
          <h2>השיעורים שלנו</h2>
          <label>
            בשיעורים שלנו, הילדים מכירים בנושאים ובטכניקות שונות, מבטיחים כי כל
            שיעור הוא חוויה חינוכית ומרתקת. מהתרשמות בנושאי אמנות מרתקים ומשימוש
            בסגנונות ונושאים שונים, השיעורים שלנו מציעים גישה הוליסטית לציור
            המעודדת חקירה וביטוי עצמי.
          </label>
        </div>
        <div id="teacher" className="secondSec_container--text--2">
          <h2>המורה שלנו</h2>
          <label>
            המורה שלנו מביאה איתה ידע ומומחיות רבה לכל שיעור, מבטיחה כי כל ילד
            יקבל תשומת לב אישית וליווי. עם רקע בציור מאוניברסיטה מובילה ושנים של
            ניסיון בעבודה עם ילדים מכל הגילאים, היא מחויבת לפתח את יכולות
            האמנותיות של כל תלמיד ולקדם אהבה ליצירה.
          </label>
        </div>
      </div>
      <div className="secondSec_container--img">
        <img className="tall_drawing" src={tallDrawing} alt="SVG Image" />
        <img className="svg-v2_g" src={v2_g} alt="SVG Image" />
      </div>
    </div>
  );
};

export default SecondSection;
