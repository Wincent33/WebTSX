import { useState, useRef } from "react";
import "./style.scss";
import SearchGIF from "../../../Assets/Images/search.gif";
import DataMapper from "./datamapper/index.js";
var data = require("../../../Assets/Data/MOCK_DATA.json");
// import Select from "react-select";
export default function HomeSearchTabs() {
  DataMapper();
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabOnClick = (index: number) => () => {
    setActiveTab(index);
  };
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  const onSearchBtn = (value: string) => {
    activeTab === 0 ? console.log(value, "hi1") : console.log(value, "hi2");
  };
  const onSearchListClick = (searchTerm: string) => {
    inputRef.current.value = searchTerm;
    setValue(inputRef.current.value);
    // activeTab === 0
    //   ? console.log(searchTerm, "hi1")
    //   : console.log(searchTerm, "hi2");
  };
  const inputRef = useRef<any>(null);
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
                  {data
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.place.toLowerCase();
                      return (
                        searchTerm &&
                        place.startsWith(searchTerm) &&
                        place !== searchTerm
                      );
                    })
                    .slice(0, 20)
                    .map((item: any) => (
                      <div
                        className="location"
                        key={item.id}
                        onClick={() => {
                          onSearchListClick(item.place);
                        }}
                      >
                        {item.place}
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
