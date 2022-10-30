import React from "react";
import "./style.scss";
import AuthLoggedOut from "../../Components/Common/AuthLoggedOut";
import MovingBackground from "../../Components/Common/MovingBackground";
import NavBar from "../../Components/Common/NavBar/NavBar";
import KPRHero from "../../Components/KPRPageComponents/KPRHero";
import SurveyKPR from "../../Components/KPRPageComponents/SurveyKPR";

function KPRPage() {
  return (
    <div className="kpr-page">
      <div className="kpr1">
        <MovingBackground />
        <div className="navbar">
          <img className="company-logo" src="" alt="logo" />
          <NavBar />
          <AuthLoggedOut />
        </div>
        <KPRHero />
      </div>
      <div className="kpr2">
        <SurveyKPR />
      </div>
    </div>
  );
}

export default KPRPage;
