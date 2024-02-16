const Contact = () => {
  const phoneNumber = "+972545785930";

  const handleClick = () => {
    const message = "היי, אני מעוניין להירשם לשיעורי ציור" ;
    const whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div id="contact" className="contact">
      <h2>צור קשר</h2>
      <div className="contact_info">
        <div className="contact_phone">
          <p>054-5785930</p>
          <p className="italic">טלפון :</p>
        </div>
        <div className="contact_whatsapp">
          <a href="#" className="btn contact_btn" role="button" onClick={handleClick}>
            <box-icon
              name="whatsapp"
              type="logo"
              color="#fff"
            ></box-icon>
            <label className="lbl">פתיחת צ'אט</label>
          </a>
          <p className="italic">ווצאפ :</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
