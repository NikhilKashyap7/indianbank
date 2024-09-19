import React from "react";
import brandlogo from "../images/applogo1.jpg";
import g20pic from "../images/g20pic.jpg";
import onloans from "../images/onlineloan.png";
import form16a from "../images/form16a.png";
import oicertificate from "../images/interest.png";
import dopening from "../images/td.png";
import acopening from "../images/sbcif.png";
import ppsystem from "../images/chq.png";
import email from "../images/email.png";
import lstatus from "../images/loanstatus.png";
import aadhar from "../images/aadhaar.png";
import locker from "../images/locker.png";
import rekyc from "../images/rekyc.png";
import ojan from "../images/jan.png";
import jewel from "../images/jewel.png";
import { Link } from "react-router-dom";

function Coservices() {
  return (
    <>
      <div className="parent">
        <div className="div1">
          <img className="pic1" src={brandlogo} />{" "}
        </div>
        <div className="div2">
          {" "}
          <h3>Indian Bank - Customer Online Services</h3>
        </div>
        <div className="div3">
          <img className="pic2" src={g20pic} />{" "}
        </div>
      </div>
      <div className="d-line"></div>

      <div className="flex-container">
        <div className="line-1">
          <Link to="" className="l-1elements">
            <img className="line-1img" src={onloans} />
            <p>Online Loans</p>
          </Link>
          <Link to="" className="l-1elements">
            <img className="line-1img" src={form16a} />
            <p>Online Form 16A Download</p>
          </Link>
          <Link to="" className="l-1elements">
            <img className="line-1img" src={oicertificate} />
            <p>Onlie Interest Certificate</p>
          </Link>
          <Link to="" className="l-1elements">
            <img className="line-1img" src={dopening} />
            <p>IND SWAGAT- Online Term Deposit Opening</p>
          </Link>
          <Link to="" className="l-1elements">
            <img className="line-1img" src={acopening} />
            <p>SB Account Opening Through Video-CIP</p>
          </Link>
          <Link to="" className="l-1elements">
            <img className="line-1img" src={ppsystem} />
            <p>Positive Pay System</p>
          </Link>
        </div>


        <div className="line-2">
          <Link to="" className="l-2elements">
            <img className="line-2img" src={email} />
            <p>Account Statement By Email</p>
          </Link>
          <Link to="" className="l-2elements">
            <img className="line-2img" src={lstatus} />
            <p>Loan Application Status</p>
          </Link>
          <Link to="" className="l-2elements">
            <img className="line-2img" src={aadhar} />
            <p>Aadhar Seeding Online</p>
          </Link>
          <Link to="" className="l-2elements">
            <img className="line-2img" src={locker} />
            <p>Online Locker Facility</p>
          </Link>
          <Link to="" className="l-2elements">
            <img className="line-2img" src={rekyc} />
            <p>Online Re-KYC Portal</p>
          </Link>
          <Link to="" className="l-2elements">
            <img className="line-2img" src={ojan} />
            <p>Online enrollment- Jansuraksha</p>
          </Link>
        </div>


        <div className="line-3">
        <Link to="" className="l-3elements">
            <img className="line-3img" src={jewel} />
            <p>Jewel Loan appointment</p>
          </Link>
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
}

export default Coservices;
