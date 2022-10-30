import React from "react";
import "./style.scss";
import FinanceSVG from "../../../Assets/SVG/finance.svg";
function KPRHero() {
  return (
    <div className="KPR-hero">
      <div className="hero-right">
        <h1>Simulasi KPR</h1>
        <p>
          Kalkulasikan kemampuanmu untuk mengajukan pengkreditan
          <br /> rumah dan cari program KPR yang tepat untuk anda.
        </p>
      </div>
      <div className="hero-left">
        <img src={FinanceSVG} alt="?" />
      </div>
    </div>
  );
}

export default KPRHero;
