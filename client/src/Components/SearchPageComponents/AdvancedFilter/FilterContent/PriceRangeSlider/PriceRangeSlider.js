import React from "react";
import "./style.scss";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const hargaLabel = {
  0: "0",
  1: "100 juta",
  2: "250 juta",
  3: "500 juta",
  4: "750 juta",
  5: "1 miliar",
  6: "1.5 miliar",
  7: "2 miliar",
  8: "2.5 miliar",
  9: "3 miliar",
  10: "3+ miliar",
};

const PriceRangeSlider = (props) => {
  const { sliderValues, setSliderValues } = props;
  // const [sliderValues, setSliderValues] = React.useState([0, 10]);
  return (
    <div className="price-slider-container">
      <div className="price-slider-text">
        <p>Harga:</p>
        <p>
          Rp {hargaLabel[sliderValues[0]]} - Rp {hargaLabel[sliderValues[1]]}
        </p>
      </div>
      <div className="slider-container">
        <div className="price-slider-btn-container">
          <div className="price-slider-btn-width">
            <Range
              range
              onChange={(e) => {
                setSliderValues(e);
              }}
              defaultValue={[0, 10]}
              allowCross={false}
              pushable={1}
              min={0}
              max={10}
              step={1}
              marks={hargaLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
