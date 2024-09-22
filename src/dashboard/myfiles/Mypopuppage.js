import React, { useState, useEffect } from "react";
import Logo from "../images/applogo1.jpg";
function Mypopuppage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 100);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div
          className="modal show Popupwindow"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className=" modal-dialog-centered popup">
            <div className="modal-content">
              <div className="bank-logo">
                <img src={Logo} />
              </div>
              <div className="popupwritten">
                <h3>इंडियन बैंक में आपका स्वागत है</h3>
                <h3>Welcome to Indian Bank</h3>
                <h3>
                  वेबसाइट में प्रवेश करने के लिए अपनी पसंदीदा भाषा का चयन करें
                </h3>
                <h3>Select your Preferred Language to Enter the Website</h3>
              </div>
              <p
                type="button"
                className="lang-select-btn-en"
                onClick={closePopup}
              >
                English
              </p>
              <p
                type="button"
                className="lang-select-btn-hi"
                onClick={closePopup}
              >
                हिन्दी
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mypopuppage;
