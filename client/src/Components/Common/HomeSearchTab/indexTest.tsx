import { useState, useRef } from "react";
import "./style.scss";
import SearchGIF from "../../../Assets/Images/search.gif";
// import WilayahIndo from "../../../Assets/Data/WilayahIndonesia.json";
var data = require("../../../Assets/Data/WilayahIndonesia.json");
// import Select from "react-select";
export default function HomeSearchTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const titleCase = (str: string) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

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
    activeTab === 0
      ? console.log(searchTerm, "hi1")
      : console.log(searchTerm, "hi2");
  };
  const inputRef = useRef<any>(null);


  let listDataProvinsi: any = [];
  data.forEach((provinsi: any) => {
      listDataProvinsi.push({
        provinsi: titleCase(provinsi.name),
      });
  });

  let listDataKabupaten: any = [];
  data.forEach((provinsi: any) => {
    provinsi.regencies.forEach((kabupaten: any) => {
      listDataKabupaten.push({
        provinsi: titleCase(provinsi.name),
        kabupaten: titleCase(kabupaten.name),
      });
    });
  });

  let listDataKecamatan: any = [];
  data.forEach((provinsi: any) => {
    provinsi.regencies.forEach((kabupaten: any) => {
      kabupaten.districts.forEach((kecamatan: any) => {
        listDataKecamatan.push({
          provinsi: titleCase(provinsi.name),
          kabupaten: titleCase(kabupaten.name),
          kecamatan: titleCase(kecamatan.name),
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
                  autoComplete="off"
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
                  {listDataProvinsi
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.provinsi.toLowerCase();
                      console.log();
                      return (
                        searchTerm &&
                        place.includes(searchTerm) &&
                        place !== searchTerm
                      );
                    })
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
                  {listDataKabupaten
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.kabupaten.toLowerCase();
                      return (
                        searchTerm &&
                        place.includes(searchTerm) &&
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
                  {listDataKecamatan
                    .filter((item: any) => {
                      const searchTerm = value.toLowerCase();
                      const place = item.kecamatan.toLowerCase();
                      return (
                        searchTerm &&
                        place.includes(searchTerm) &&
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
