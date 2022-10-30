import React, { useState } from "react";
import "./style.scss";
import SearchBar from "../SearchBar";
import QuickFilters from "../QuickFilters";
import AdvancedFilter from "../AdvancedFilter";
import { ClassificationType } from "typescript";
function Search1() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
    <div className="search1">
      <div className="searchbar">
        <SearchBar />
        <button
          className="advanced-filter-btn"
          onClick={() => setTrigger(true)}
        >
          Advanced Filter
        </button>
        </div>
      <QuickFilters />
    </div>
    <AdvancedFilter trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}

export default Search1;
