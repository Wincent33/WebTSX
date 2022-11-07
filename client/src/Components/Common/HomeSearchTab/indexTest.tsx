import { useState, useRef } from "react";
import "./style.scss";
import SearchGIF from "../../../Assets/Images/search.gif";
// import WilayahIndo from "../../../Assets/Data/WilayahIndonesia.json";
var data = require("../../../Assets/Data/WilayahIndonesia.json");
// import Select from "react-select";
export default function HomeSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabOnClick = (index: number) => () => {
    setActiveTab(index);
  };
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSearchBtn = (value: any) => {
    activeTab === 0 ? console.log(value, "hi1") : console.log(value, "hi2");
  };
  const onSearchListClick = (searchTerm: any) => {
    inputRef.current.value = searchTerm;
    setValue(inputRef.current.value);
    // activeTab === 0
    //   ? console.log(searchTerm, "hi1")
    //   : console.log(searchTerm, "hi2");
  };
  const inputRef = useRef<any>(null);

  let listData: any = [];
  data.forEach((provinsi: any) => {
    provinsi.regencies.forEach((kabupaten: any) => {
      kabupaten.districts.forEach((kecamatan: any) => {
        listData.push({
          provinsi: provinsi.name,
          kabupaten: kabupaten.name,
          kecamatan: kecamatan.name,
        });
      });
    });
  });

  return (
    <section className="SearchTab">
      <div className="container">
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

        <div className="content-tabs">
          <div className="content  active-content">
            <div className="search-box">
              <div className="search-box">
                <img className="search-gif" src={SearchGIF} alt="gif" />
                <input
                  className="search-beli"
                  type="text"
                  name="search-beli"
                  placeholder="Lokasi..."
                  value={value}
                  onChange={onChange}
                  ref={inputRef}
                />
                <div className="search-button-bg">
                  <button
                    className="search-button"
                    onClick={() => onSearchBtn(value)}
                  >
                    CARI
                  </button>
                </div>
                <div className="search-result">
                  {listData
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.provinsi.toLowerCase();
                      return (
                        searchTerm &&
                        place.startsWith(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 1)
                    .map((item: any) => (
                      <div
                        className="location"
                        // key={item.id}
                        onClick={() => {
                          onSearchListClick(item.provinsi);
                        }}
                      >
                        {`${item.provinsi}`}
                      </div>
                    ))}
                  {listData
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.kabupaten.toLowerCase();
                      return (
                        searchTerm &&
                        place.startsWith(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 4)
                    .map((item: any) => (
                      <div
                        className="location"
                        // key={item.id}
                        onClick={() => {
                          onSearchListClick(item.kabupaten);
                        }}
                      >
                        {`${item.kabupaten}, ${item.provinsi}`}
                      </div>
                    ))}
                  {listData
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.kecamatan.toLowerCase();
                      return (
                        searchTerm &&
                        place.startsWith(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 4)
                    .map((item: any) => (
                      <div
                        className="location"
                        // key={item.id}
                        onClick={() => {
                          onSearchListClick(item.kecamatan);
                        }}
                      >
                        {`${item.kecamatan}, ${item.kabupaten}, ${item.provinsi}`}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
