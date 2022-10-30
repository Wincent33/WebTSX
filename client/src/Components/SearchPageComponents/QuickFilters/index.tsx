import React, { useState } from "react";
import "./style.scss";
import Select from "react-select";
import JenisPropertiOption from "../../../Assets/Data/JenisPropertiOption.json";
import HargaOption from "../../../Assets/Data/HargaOption.json";
function QuickFilters() {
  const [jenisValue, setJenisValue] = useState("");

  const kamarOption = [
    {
      value: 1,
      label: "1 kamar",
    },
    {
      value: 2,
      label: "2 kamar",
    },
    {
      value: 3,
      label: "3 kamar",
    },
    {
      value: 4,
      label: "4 kamar",
    },
    {
      value: 5,
      label: "5 kamar",
    },
    {
      value: 6,
      label: "5+ kamar",
    },
  ];

  return (
    <div className="quick-filters">
      <div className="jenis-properti">
        <Select
          options={JenisPropertiOption}
          isClearable={true}
          placeholder={"Semua Jenis"}
        />
        {/* <select value={jenisValue} onChange={(e)=>setJenisValue(e.target.value)}>
        <option value="semuaJenis">Semua Jenis</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select> */}
      </div>
      <label>|</label>
      <div className="harga-filter">
        <div className="harga-min">
          <Select
            options={HargaOption}
            isClearable={true}
            placeholder={"Min Harga"}
          />
        </div>
        -
        <div className="harga-max">
          <Select
            options={HargaOption}
            isClearable={true}
            placeholder={"Max Harga"}
          />
        </div>
      </div>
      <label>|</label>
      <div className="kamar-filter">
        <Select
          options={kamarOption}
          isClearable={true}
          placeholder={"jumlah kamar"}
        />
      </div>
    </div>
  );
}

export default QuickFilters;
