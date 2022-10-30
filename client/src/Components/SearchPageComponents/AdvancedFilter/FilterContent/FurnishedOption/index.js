import React from "react";
import Switch from "react-switch";
import "./style.scss";

const FurnishedOption = (props) => {
  const { isFurnished, setIsFurnished } = props;

  const handleOnChange = (checked) => {
    setIsFurnished(checked);
  };
  return (
    <div className="furnished-container">
      <div className="furnished-text">Furnished</div>
      <div className="furnished-toggle">
        <Switch onChange={handleOnChange} checked={isFurnished} />
      </div>
    </div>
  );
};

export default FurnishedOption;

