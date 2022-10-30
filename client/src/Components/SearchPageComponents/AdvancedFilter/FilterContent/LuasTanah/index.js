import React from "react";
import "./style.scss";

export default function LuasTanah(props) {
  const { minVal, setMinVal, maxVal, setMaxVal } = props;

  const minOnChange = (event) => {
    setMinVal(event.target.value);
  };

  const maxOnChange = (event) => {
    setMaxVal(event.target.value);
  };

  return (
    <div className="luas-tanah-container">
      <div className="luas-tanah-text">Luas tanah</div>
      <div className="luas-tanah-min-max">
        <input
          type="number"
          placeholder="Min."
          value={minVal}
          onChange={minOnChange}
        />
        <h2>-</h2>
        <input
          type="number"
          placeholder="Max."
          value={maxVal}
          onChange={maxOnChange}
        />
      </div>
    </div>
  );
}
