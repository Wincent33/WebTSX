import React from "react";
import "./style.scss";

export default function BeliSewa(props: any) {
  const { activeTab, setActiveTab } = props;
  const handleTabOnClick = (index: number) => () => {
    setActiveTab(index);
  };
  return (
    <div className="filter-sewabeli-container">
      <section className="bloc-tabs">
        <button
          className={activeTab === 0 ? "tabs active-tabs" : "tabs"}
          onClick={handleTabOnClick(0)}
        >
          BELI
        </button>
        <button
          className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={handleTabOnClick(1)}
        >
          SEWA
        </button>
      </section>
    </div>
  );
}
