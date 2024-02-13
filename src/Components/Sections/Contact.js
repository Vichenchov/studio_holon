const Contact = () => {
  const imageUrl = "https://example.com/image.jpg"; // Replace this with the URL of your image
  const phoneNumber = "1234567890"; // Replace this with the recipient's phone number including country code

  const handleClick = () => {
    const message = "Check out this image: " + imageUrl;
    const whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="contact">
      <h2>צור קשר</h2>
      <div className="contact_info">
        <div className="contact_phone">
          <p>054-5785930</p>
          <p className="italic">: טלפון</p>
        </div>
        <div className="contact_whatsapp">
          <a href="#" className="btn contact_btn" onClick={handleClick}>
            <box-icon
              name="whatsapp"
              type="logo"
              animation="flashing"
              color="#fff"
            ></box-icon>
            <label className="lbl">פתיחת צ'אט</label>
          </a>
          <p className="italic">: ווצאפ</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
