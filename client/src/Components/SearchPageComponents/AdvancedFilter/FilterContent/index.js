import React, { useState } from "react";
import "./style.scss";
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import FurnishedOption from "./FurnishedOption";
import LuasBangunan from "./LuasBangunan";
import LuasTanah from "./LuasTanah";
import KamarNWCCounter from "./KamarNWCCounter";
import Fasilitas from "./Fasilitas";
import ZonaInteraksi from "./ZonaInteraksi";
import YardOption from "./YardOption";
import BeliSewa from "./BeliSewa";
import JenisProperti from "./JenisProperti";
import Lokasi from "./Lokasi";

export default function FilterContent() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
  const [lokasiValue, setLokasiValue] = useState("");
  const [beliSewaValue, setBeliSewaValue] = useState(0);
  const [jenisPropertiOptions, setJenisPropertiOptions] = useState([]);
  const [hargaSlider, setHargaSlider] = useState([0, 10]);
  const [furnishedValue, setFurnishedValue] = useState(false);
  const [minLBValue, setMinLBValue] = useState("");
  const [maxLBValue, setMaxLBValue] = useState("");
  const [minLTValue, setMinLTValue] = useState("");
  const [maxLTValue, setMaxLTValue] = useState("");
  const [kamarValue, setKamarValue] = useState(0);
  const [wCValue, setWCValue] = useState(0);
  const [fasilitasValue, setFasilitasValue] = useState([]);
  const [zonaValue, setZonaValue] = useState("");
  const [yardValue, setYardValue] = useState(false);
  return (
    <form onSubmit={handleSubmit} className="filter-content">
      <div className="filter-sewa-beli">
        <BeliSewa activeTab={beliSewaValue} setActiveTab={setBeliSewaValue} />
      </div>
      <div className="filter-lokasi">
        <Lokasi
          locationSelect={lokasiValue}
          setLocationSelect={setLokasiValue}
        />
      </div>
      <div className="filter-jenis">
        <JenisProperti
          selectedOptions={jenisPropertiOptions}
          setSelectedOptions={setJenisPropertiOptions}
        />
      </div>
      <div className="filter-slider">
        <PriceRangeSlider
          sliderValues={hargaSlider}
          setSliderValues={setHargaSlider}
        />
      </div>
      <div className="filter-furnished">
        <FurnishedOption
          isFurnished={furnishedValue}
          setIsFurnished={setFurnishedValue}
        />
      </div>
      <div className="filter-luas-bangunan">
        <LuasBangunan
          minVal={minLBValue}
          setMinVal={setMinLBValue}
          maxVal={maxLBValue}
          setMaxVal={setMaxLBValue}
        />
      </div>
      <div className="filter-luas tanah">
        <LuasTanah
          minVal={minLTValue}
          setMinVal={setMinLTValue}
          maxVal={maxLTValue}
          setMaxVal={setMaxLTValue}
        />
      </div>
      <div className="filter-kamar-dan-wc">
        <KamarNWCCounter
          kamarCounter={kamarValue}
          setKamarCounter={setKamarValue}
          wCCounter={wCValue}
          setWCCounter={setWCValue}
        />
      </div>
      <div className="filter-fasilitas">
        <Fasilitas
          selectedOptions={fasilitasValue}
          setSelectedOptions={setFasilitasValue}
        />
      </div>
      <div className="filter-zona">
        <ZonaInteraksi
          selectedOptions={zonaValue}
          setSelectedOptions={setZonaValue}
        />
      </div>
      <div className="filter-yard">
        <YardOption isYard={yardValue} setIsYard={setYardValue} />
      </div>
      {/* <div className="submit-data">
        <h3>sewa/Beli : {beliSewaValue}</h3>
        <h3>lokasi :{lokasiValue}</h3>
        <h3>jenis :{jenisPropertiOptions.map((d) => d.label).join(", ")}</h3>
        <h3>
          Harga : {hargaLabel[hargaSlider[0]]} - {hargaLabel[hargaSlider[1]]}
        </h3>
        <h3>Furnished : {furnishedValue.toString()}</h3>
        <h3>
          LuasBangunan : {minLBValue} m^2 - {maxLBValue} m^2
        </h3>
        <h3>
          LuasTanah : {minLTValue} m^2 - {maxLTValue} m^2
        </h3>
        <h3>JumlahKamar :{kamarValue}</h3>
        <h3>Jumlah WC : {wCValue}</h3>
        <h3>fasilitas : {fasilitasValue.map((v)=>v.label).join(", ")}</h3>
        <h3>zona :  {zonaValue === null ? null : zonaValue.label}</h3>
        <h3>Yard :{yardValue.toString()}</h3>
      </div> */}

      <button type="submit" className="Search-filter" onClick={() => {}}>
        Submit
      </button>
    </form>
  );
}
