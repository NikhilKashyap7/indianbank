import React, { useState, useEffect } from "react";
import { Carousel } from "bootstrap";
import car1 from "./images/Termdeposit.jpg";
import car2 from "./images/NominationFacility.jpg";
import car3 from "./images/CyberCrime.jpg";
import car4 from "./images/indsmart.jpg";
import netbanking from "./images/netbanking.png";
import nriimg from "./images/nri.png";
import giftimg from "./images/indbankgift.png";
import rsicon from "./images/rs-icon.png";
import cusicon from "./images/customerSupportLanding.png";
import dform from "./images/download-icon.png";
import fresult from "./images/financialResultIcon.gif";
import chatbot from "./images/adya-logo.png";
import cardimg1 from "./images/Home-Loan-2.jpg";
import cardimg2 from "./images/Home-Loan-Plus-2.jpg";
import cardimg3 from "./images/family.jpg";
import cardimg4 from "./images/girl.jpg";
import cardimg5 from "./images/glod.jpg";
import rbi from "./images/Single-Window-RBI.jpg";
import youtube from "./images/111years.jpg";
import applink from "./images/mobile-app-bg.jpg";
import playstore from "./images/google-play-store.png";
import appstore from "./images/ios.png";
import { Link } from "react-router-dom";

function Myhomepage() {
  const anothersite = () => {
    window.confirm("You are being redirected to another website");
  };
  const [slider, SetSlider] = useState(0);
  const data = [car1, car2, car3, car4];

  const getSlide = (index) => {
    SetSlider(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      SetSlider((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      <div className="slider">
        <div className="slider-img">
          <img
            src={data[slider]}
            alt="0"
            style={{ width: "100%", height: "100vh" }}
          />
          <div className="slider-btn">
            <div className="s-btn" onClick={() => getSlide(0)}></div>
            <div className="s-btn" onClick={() => getSlide(1)}></div>
            <div className="s-btn" onClick={() => getSlide(2)}></div>
            <div className="s-btn" onClick={() => getSlide(3)}></div>
          </div>
        </div>
      </div>

      <div className="right-sidebar">
        <section className="net-banking">
          <img
            src={netbanking}
            alt="Net banking image"
            className="netbankin-img"
          />
          <p className="nb-text"> Net Banking </p>
        </section>
        <section className="nri-forex">
          <img src={nriimg} alt="Nri images" className="nri-img" />
          <p className="nri-text">
            NRI,Trade <br /> & Forex{" "}
          </p>
        </section>
        <section className="reward">
          <img src={giftimg} alt="Gift and reward image" className="gift-img" />
          <p className="gift-text">
            Ind Advantage <br />
            <p className="reward-text">(Reward Program)</p>
          </p>
        </section>
        <section className="mobile">
          <img src={rsicon} alt="Mobile banking icon" className="rs-icon" />
          <p className="m-bankingtext"> Mobile Banking </p>
        </section>
        <section className="support">
          {" "}
          <img
            src={cusicon}
            alt="Customer Support icon"
            className="cusicon"
          />{" "}
          <p className="cus-text">Customer Support</p>
        </section>
        <section className="form-download">
          <img src={dform} alt="download form icon" className="dform-img" />{" "}
          <p className="dform-text">
            Forms <br />
            Download
          </p>
        </section>
      </div>
      <div className="left-sidebar">
        <section>
          <Link>
            <img src={fresult} alt="Financial result checking button" />
          </Link>
        </section>
      </div>
      <div className="chatbot-area">
        <section className="chatbot">
          <img src={chatbot} />
          <p className="botname">Ask ADYA</p>
        </section>
      </div>

      {/* Other Content of main page started */}

      <div className="market-feed">
        <div className="mf-feed">
          <p>Market Feed</p>
        </div>
        <div className="mf-list">
          <Link
            to={"https://www.nseindia.com/"}
            target="_blank"
            onClick={anothersite}
          >
            <p>NSE</p>
          </Link>
        </div>
        <div className="mf-list">
          <Link
            to={"https://www.bseindia.com/"}
            target="_blank"
            onClick={anothersite}
          >
            <p>BSE</p>
          </Link>
        </div>
        <div className="mf-list">
          <Link
            to={"https://www.nseindia.com/get-quotes/equity?symbol=INDIANB"}
          >
            <p>Indian Bank-NSE</p>
          </Link>
        </div>
        <div className="mf-list">
          <Link
            to={
              "https://www.bseindia.com/stock-share-price/indian-bank/indianb/532814/"
            }
          >
            <p>Indian Bank-BSE</p>
          </Link>
        </div>
        <div className="mf-blank"></div>
      </div>

      <div className="self-ad">
        <div className="rbi-scheme">
          <img src={rbi} />
        </div>

        <div className="rates">
          <div className="interest-rate">
            <h1>MCLR</h1>
            <div>
              <h1>9%</h1>
            </div>
            <p>w.e.f. 03/09/2024</p>
          </div>
          <div className="yt-link">
            <Link
              to="https://www.youtube.com/channel/UC71NMIgjPSWTCGXnCc-Aiwg"
              target="_blank"
            >
              <img src={youtube} />
            </Link>
          </div>
        </div>
        <div className="app-link">
          <p style={{ padding: 15 }}>
            <h4 style={{ fontWeight: 200 }}>Download Our </h4>
            <h2 style={{ fontWeight: 500 }}>Mobile Apps</h2>
          </p>
          <div className="app-link-1">
            <div>
              <Link
                to="https://play.google.com/store/apps/details?id=com.iexceed.ib.digitalbankingprod"
                target="_blank"
              >
                <img src={playstore} className="playstore" />
              </Link>
            </div>
            <div>
              <Link
                to="https://apps.apple.com/us/app/indsmart-indianbank-mobile-app/id6479515872"
                target="_blank"
              >
                {" "}
                <img src={appstore} className="apple" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card-carousel">
        <h2>How Can We Help you Today?</h2>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <div className="cards">
                <div class="card card-1">
                  <img src={cardimg1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>IB Home Loan</h6>
                    <p class="card-text">
                      Target Group: Salaried Class, Self-employed, Professional,
                      Businessmen. Age: 18 years. Purpose of Loan…
                    </p>
                  </div>
                </div>

                <div class="card card-2">
                  <img src={cardimg2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>IB Home Loan Plus</h6>
                    <p class="card-text">
                      Target Group: All existing Home Loan borrowers (Residents
                      & NRIs) including HL-CRE / IB Home Advantage / HL...
                    </p>
                  </div>
                </div>

                <div class="card card-3">
                  <img src={cardimg3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>
                      IB Arogya Raksha - Portability Option for Existing
                      Customers
                    </h6>
                    <p class="card-text">
                      A Banking Raksha for existing Health Insurance product
                      withdrawal by MIs..
                    </p>
                  </div>
                </div>

                <div class="card card-4">
                  <img src={cardimg4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>Ind Netbanking</h6>
                    <p class="card-text">
                      Eligibility: Customers having Savings Bank, Current
                      Account with us. Features: Customers can use the internet
                      to do banking…
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <div class="card card-5">
                <img src={cardimg5} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6>Agricultural Jewel Loan Scheme</h6>
                  <p class="card-text">
                    Features: Easy and hassle-free loan scheme. Low-interest
                    rates. Processing charges and jewel appraisal charges apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Myhomepage;
