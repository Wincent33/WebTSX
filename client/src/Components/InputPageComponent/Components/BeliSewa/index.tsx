import React, { useState } from "react";
import "./style.scss";

export default function BeliSewa(props: any) {
  const { formValue, setFormValue } = props;
  const [activeTab, setActiveTab] = useState(0);
  const handleTabOnClick = (index: number) => (e: any) => {
    e.preventDefault();
    setActiveTab(index);
    let updatedValue = {};
    updatedValue = { status: activeTab === 0 ? "dijual" : "disewa" };
    setFormValue((prev: any) => ({ ...prev, ...updatedValue }));
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
