import v1 from '../../Resources/Vector_info_1.svg'
import v2 from '../../Resources/Vector_info_2.svg'
import v3 from '../../Resources/Vector_info_3.svg'

const TechnicalInfo = () => {
  return (
    <div className="info_main_container">
      <h2 className="info_title">מידע כללי</h2>
      <div className="info_container">
        <div className="info_container--1">
          <h3>? איפה</h3>
          <label>השיעורים מתקיימים בבית בחולון ברחוב צאלים</label>
        </div>
        <div className="info_container--2">
          <h3>? מתי</h3>
          <label>
            השיעורים נערכים בכל שלישי, רביעי וחמישי, מ-17:00 עד 19:00. כל שעה
            כוללת קבוצה שונה. משך השיעור הינו שעה אחת, עם אפשרות להשתתף במספר
            סשנים אם רצון התלמיד
          </label>
        </div>
        <div className="info_container--3">
          <h3>? כמה זה עולה</h3>
          <label>
            המחירים הנמוכים שלנו נותנים לכל המשפחות גישה ללמידה ברמה גבוהה.
            שיעור יחיד עולה 50 ש"ח לאדם
          </label>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInfo;
