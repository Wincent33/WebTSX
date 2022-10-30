import React from "react";

import "./style.scss";

export default function LuasBangunan(props) {
  const { minVal, setMinVal, maxVal, setMaxVal } = props;

  const minOnChange = (event) => {
    setMinVal(event.target.value);
  };

  const maxOnChange = (event) => {
    setMaxVal(event.target.value);
  };

  return (
    <div className="luas-bangunan-container">
      <div className="luas-bangunan-text">Luas Bangunan</div>
      <div className="luas-bangunan-min-max">
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
