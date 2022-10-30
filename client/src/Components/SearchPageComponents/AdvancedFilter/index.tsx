import React from "react";
import FilterContent from "./FilterContent/index";
import "./style.scss";
function AdvancedFilter(props: any) {
  return props.trigger ? (
    <div className="filter-popup">
      <div className="filter-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          Close
        </button>
        <FilterContent />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AdvancedFilter;
