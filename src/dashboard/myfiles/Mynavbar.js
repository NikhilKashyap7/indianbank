import React, { useState } from "react";
import Logo from "../images/applogo1.jpg";
import Pci from "../images/pcidsslogo.png";
import { Link } from "react-router-dom";
import phone from "../images/phoneicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Mynavbar() {
  const [fontSize, setFontsize] = useState(15);
  const [bgColor, setBgColor] = useState("rgba(12, 77, 162, .8)");
  const handleFontSizeChange = (increment) => {
    let newFontSize = fontSize + increment;
    if (newFontSize > 20) {
      {
        toast.info("Sorry you have reached maximum font size");
      }
      // alert('Sorry you have reached maximum font size')
      newFontSize = 18;
    } else if (newFontSize < 10) {
      {
        toast.info("Sorry you have reached minimum font size");
      }
      // alert('Sorry you have reached minimum font size')
      newFontSize = 10;
    }
    setFontsize(newFontSize);
  };
  // Change color function
  const colorChange = (color) => {
    setBgColor(color);
  };

  const navigate = useNavigate();
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navcss fixed-top"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container-fluid sticky-top">
            <Link className="navbar-brand" to="/dashboard">
              <img src={Logo} alt="Bank's logo" className="brandimg" />
            </Link>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <p className="hindi">
              <b>हिन्दी</b>
            </p>
            <div className="font-set">
              <p className="font-btn" onClick={() => handleFontSizeChange(1)}>
                A+ <ToastContainer position="top-left" theme="dark" />
              </p>
              <p className="font-btn" onClick={() => setFontsize(15)}>
                A
              </p>
              <p className="font-btn" onClick={() => handleFontSizeChange(-1)}>
                A-{" "}
              </p>
              <ToastContainer position="top-right" theme="dark" />
            </div>
            <p
              className="orange"
              id="color1"
              onClick={() => colorChange("#ff7900")}
            ></p>
            <p
              className="blue"
              id="color2"
              onClick={() => colorChange("rgba(12, 77, 162, .8)")}
            ></p>
            <p
              className="yellow"
              id="color3"
              onClick={() => colorChange("#fed74c")}
            ></p>
            <p
              className="aquamarine"
              id="color4"
              onClick={() => colorChange("#4eb9a7")}
            ></p>

            <div className="phone">
              <p>
                <img src={phone} className="phone-icon" /> National Helpline No{" "}
                <strong> 1800 425 00 0000 </strong>
              </p>
            </div>
            <a
              href="https://www.sisainfosec.com/certificate.php?number=91920577341653101309&type=pcidss"
              className="pcilogo"
            >
              <img src={Pci} alt="Pci DSS Logo" className="pcilogo" />
            </a>
          </div>
        </nav>
      </div>

      {/* Second Navbar starts from here */}
      <nav className="second-navbar ">
        <ul
          className="navbar-list"
          id="text"
          style={{ fontSize: `${fontSize}px` }}
        >
          <li className="navbar-item dropdown">HOME</li>
          <li className="navbar-item dropdown">
            ABOUT US
            <FontAwesomeIcon icon={faAngleDown} />
            <ul
              className="dropdown-content"
              style={{ backgroundColor: bgColor }}
            >
              <div>
                <li className="navbar-item">
                  <Link to="#">Bank's Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="#">e-Allahabad Bank's Journey</Link>
                </li>
                <li className="navbar-item">
                  <Link to="#">Vision and Mission</Link>
                </li>
                <li className="management">
                  <Link href="#" className="navbar-item">
                    Management
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                  <ul
                    className="management-d"
                    style={{ backgroundColor: bgColor }}
                  >
                    <li className="navbar-item">MD & CEO's Profile</li>
                    <li className="navbar-item">ED's Profile</li>
                    <li className="navbar-item">BOARD of DIRECTORS</li>
                    <li className="navbar-item">CHIEF VIGILLANCE OFFICER</li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#">Image</a>
                </li>
                <li className="navbar-item">
                  <a href="#">Indian Bank Mutual Fund</a>
                </li>
              </div>
            </ul>
          </li>
          <li className="navbar-item dropdown">INVESTOR </li>
          <li className="navbar-item dropdown">
            PRODUCTS <FontAwesomeIcon icon={faAngleDown} />
            <ul
              className="dropdown-content"
              style={{ backgroundColor: bgColor }}
            >
              <div>
                <li>
                  <a
                    href="#"
                    style={{ backgroundColor: bgColor }}
                    className="navbar-item"
                  >
                    Loan Products <FontAwesomeIcon icon={faChevronRight} />{" "}
                  </a>
                  <section className="side-dropdown">
                    <ul>
                      <li className="navbar-item">Agriculture</li>
                      <li className="sub-dropdown-content">
                        Retail/Personal
                        <FontAwesomeIcon icon={faChevronRight} />
                        <ul
                          className="sub-dropdown-content"
                          style={{ backgroundColor: bgColor }}
                        >
                          <li className="navbar-item">Home Loan</li>
                          <li className="navbar-item">Mortage Loan</li>
                          <li className="navbar-item">Vehicle Loan</li>
                          <li className="navbar-item">Personal Loan</li>
                          <li className="navbar-item">Education Loan</li>
                          <li className="navbar-item">Jewel Loan</li>
                          <li className="navbar-item">
                            Loan/OD against Deposit
                          </li>
                          <li className="navbar-item">
                            Loan/Od against NSC/KVP
                          </li>
                        </ul>
                      </li>
                      <li className="navbar-item">
                        <a>MSME</a>
                      </li>
                      <li className="navbar-item">
                        <a>Online Loans</a>
                      </li>
                      <li className="navbar-item">
                        <a>Corporate</a>
                      </li>
                      <li className="navbar-item">
                        <a>Supply Chain Finance</a>
                      </li>
                      <li className="navbar-item">
                        <a>59 Minnutes Loan</a>
                      </li>
                    </ul>
                  </section>
                </li>
              </div>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            RATES
            <FontAwesomeIcon icon={faAngleDown} />
            <ul
              className="dropdown-content"
              style={{ backgroundColor: bgColor }}
            >
              <li className="navbar-item">
                <a>Deposit Rates</a>
              </li>
              <li className="navbar-item">
                <a>Lending Rates</a>
              </li>
              <li className="navbar-item">
                <a>Service Charges/Forex Rates</a>
              </li>
              <li className="navbar-item">
                <a>Interest Rates for Small Savings Schemes</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            NEWS
            <FontAwesomeIcon icon={faAngleDown} />
            <ul
              className="dropdown-content "
              style={{ backgroundColor: bgColor }}
            >
              <li className="navbar-item">
                <a>What's New?</a>
              </li>
              <li className="navbar-item">
                <a>Notifications</a>
              </li>
              <li className="navbar-item">
                <a>Empanelments/Engagements</a>
              </li>
              <li className="navbar-item">
                <a>Amalagation</a>
              </li>
              <li className="navbar-item">
                <a>Corporate Social Reesponsibility</a>
              </li>
              <li className="navbar-item">
                <a>Press Releases</a>
              </li>
            </ul>
          </li>
          <li className="navbar-item dropdown">
            CUSTOMER CORNER <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li className="navbar-item dropdown">
            USEFUL LINKS
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <li className="navbar-item dropdown">
            CONTACTS <FontAwesomeIcon icon={faAngleDown} />
          </li>
          <Link to="/Coservices">
            <button className="navbar-item apply-btn">APPLY ONLINE</button>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Mynavbar;
