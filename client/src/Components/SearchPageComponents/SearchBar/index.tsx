import React, { useState, useRef } from "react";
import SearchGIF from "../../../Assets/Images/search.gif";
import "./style.scss";
var data = require("../../../Assets/Data/MOCK_DATA.json");

type Provinsi = {
  name: string;
  listKota: Kota[];
};

type Kecamatan = {
  name: string;
};
type Kota = {
  name: string;
  listKecamatan: Kecamatan[];
};

const listProvinsi: Provinsi[] = [
  {
    name: "Jakarta",
    listKota: [
      {
        name: "Jaksel",
        listKecamatan: [{ name: "Thamrin" }, { name: "Kuningan" }],
      },
      {
        name: "Jaktim",
        listKecamatan: [{ name: "Cakung" }, { name: "Tipar" }],
      },
    ],
  },
  {
    name: "Jawa Barat",
    listKota: [
      {
        name: "Kota Bekasi",
        listKecamatan: [{ name: "Medan Satria" }, { name: "Tarumajaya" }],
      },
      {
        name: "Kota Bandung",
        listKecamatan: [{ name: "Dago" }, { name: "Lembang" }],
      },
    ],
  },
];

type MyListComponent = {
  provinsi: string;
  kota: string;
  kecamatan: string;
};
const listData: MyListComponent[] = [];
listProvinsi.forEach((provinsi) => {
  provinsi.listKota.forEach((kota) => {
    kota.listKecamatan.forEach((kecamatan) => {
      listData.push({
        provinsi: provinsi.name,
        kota: kota.name,
        kecamatan: kecamatan.name,
      });
    });
  });
});
// console.log(listData.map((d) => `${d.kecamatan}, ${d.kota}, ${d.provinsi}`));

const SearchBar = () => {
  var [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  const inputRef = useRef<any>(null);

  const OnSearchListClick = (searchTerm: string) => {
    // console.log(searchTerm);
    inputRef.current.value = searchTerm;
    setValue(searchTerm);
  };
  const SearchResult = data
    .filter((item: any) => {
      const searchTerm = value.toLowerCase();
      const place = item.place.toLowerCase();
      return searchTerm && place.startsWith(searchTerm) && place !== searchTerm;
    })
    .slice(0, 20)
    .map((item: any) => (
      <div
        className="location"
        key={item.id}
        onClick={() => OnSearchListClick(item.place)}
      >
        {item.place}
      </div>
    ));
  return (
    <section className="advanced-searchbar">
      <div className="search-box">
        <img className="search-gif" src={SearchGIF} alt="gif" height={"50px"} />
        <input
          className="search-text"
          type="text"
          placeholder="Ketik Lokasi..."
          value={value}
          onChange={handleOnChange}
          ref={inputRef}
        />
        <div className="search-btn-bg">
          <button className="search-button">CARI</button>
        </div>
        <div className="search-result">{SearchResult}</div>
        <section className="filters"></section>
      </div>
    </section>
  );
};

export default SearchBar;
