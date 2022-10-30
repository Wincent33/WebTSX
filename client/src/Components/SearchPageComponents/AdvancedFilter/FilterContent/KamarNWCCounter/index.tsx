import React from "react";
import "./style.scss";
import BedroomIcon from "../../../../../Assets/Images/bedroom.png";
import BathroomIcon from "../../../../../Assets/Images/bathroom.png";

export default function KamarNWCCounter(props: any) {
  const { kamarCounter, wCCounter, setKamarCounter, setWCCounter } = props;

  const onKamarMinusClick = () => {
    if (kamarCounter > 0) {
      setKamarCounter(kamarCounter - 1);
    } else if (kamarCounter === "5+") {
      setKamarCounter(5);
    }
  };

  const onKamarPlusClick = () => {
    if (kamarCounter < 5) {
      setKamarCounter(kamarCounter + 1);
    } else if (kamarCounter === 5) {
      setKamarCounter("5+");
    }
  };

  const onWCMinusClick = () => {
    if (wCCounter > 0) {
      setWCCounter(wCCounter - 1);
    } else if (wCCounter === "5+") {
      setWCCounter(5);
    }
  };

  const onWCPlusClick = () => {
    if (wCCounter < 5) {
      setWCCounter(wCCounter + 1);
    } else if (wCCounter === 5) {
      setWCCounter("5+");
    }
  };
  return (
    <div className="kamarNWCCounter">
      <div className="kamar-counter">
        <div className="kamar-text">Jumlah Kamar Tidur:</div>
        <div className="kamar-input">
          <button className="kamar-btn" onClick={onKamarMinusClick}>
            -
          </button>
          <div className="jumlah-kamar">
            <img
              className="bedroom-icon"
              width="50px"
              src={BedroomIcon}
              alt="bathroom"
            />
            <h2>x {kamarCounter}</h2>
          </div>
          <button className="kamar-btn" onClick={onKamarPlusClick}>
            +
          </button>
        </div>
      </div>

      <div className="wc-counter">
        <div className="wc-text">Jumlah Kamar Mandi:</div>
        <div className="wc-input">
          <button className="wc-btn" onClick={onWCMinusClick}>
            -
          </button>
          <div className="jumlah-wc">
            <img
              className="bathroom-icon"
              width="50px"
              src={BathroomIcon}
              alt="bathroom"
            />
            <h2>x {wCCounter}</h2>
          </div>
          <button className="wc-btn" onClick={onWCPlusClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
