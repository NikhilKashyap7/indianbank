import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mylandingpage from "./dashboard/Mylandingpage";
import "../src/dashboard/cssfiles/Custom.css";
import Myhomepage from "./dashboard/Myhomepage";
import Customeronlineservice from "./dashboard/myfiles/Customeronlineservice";
import "../src/dashboard/cssfiles/Customeronlineservice.css";
import "../src/dashboard/cssfiles/Popup.css";
import "../src/dashboard/cssfiles/Footer.css";
import "../src/dashboard/cssfiles/Homepage.css";
import Footer from "./dashboard/myfiles/Myfooter";
import Mypopuppage from "./dashboard/myfiles/Mypopuppage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Mylandingpage />} />
        <Route path="myhomepage" element={<Myhomepage />} />
        <Route path="Coservices" element={<Customeronlineservice />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Mypopupage" element={<Mypopuppage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
