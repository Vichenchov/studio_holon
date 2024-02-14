const TechnicalInfo = () => {
  return (
    <div className="info_main_container">
      <h2 id="technical_stuff" className="info_title">
        מידע כללי
      </h2>
      <div className="info_container">
        <div className="info_container--1">
          <box-icon name="map" color="#ff6f58"></box-icon>
          <h3>איפה ?</h3>
          <p>
            השיעורים מתקיימים בבתי
            <span className="decorated-text"> בחולון, ברחוב צאלים</span>
          </p>
        </div>
        <div className="info_container--2">
          <box-icon name="time-five" color="#ff6f58"></box-icon>
          <h3>מתי ?</h3>
          <p>
            השיעורים נערכים בימי<span> </span>
            <span className="decorated-text">
              שלישי, רביעי וחמישי, מ-17:00 עד 19:00.
            </span><span> </span>
            כל שעה כוללת קבוצה שונה. משך השיעור הינו שעה אחת, עם אפשרות להשתתף
            במספר שיעורים אם רצון התלמיד
          </p>
        </div>
        <div className="info_container--3">
          <box-icon name="dollar-circle" color="#ff6f58"></box-icon>
          <h3>כמה זה עולה ?</h3>
          <p>
            שיעור יחיד עולה <span className="decorated-text">50 ש"ח</span> לאדם
            וכולל את כל החומרים הדרושים ללמידה
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInfo;
