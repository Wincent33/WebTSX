import React from "react";
import SearchGIF from "../../../../../Assets/Images/search.gif";
import "./style.scss";
var data = require("../../../../../Assets/Data/MOCK_DATA.json");

const Lokasi = (props: any) => {
  const { locationSelect, setLocationSelect } = props;

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLocationSelect((event.target as HTMLInputElement).value);
  };
  const onSearchList = (searchTerm: any) => {
    setLocationSelect(searchTerm);
  };

  return (
    <div className="filter-lokasi-container">
      <img className="search-gif" src={SearchGIF} alt="gif" />
      <input
        className="search-beli"
        type="text"
        name="search-beli"
        placeholder="Lokasi..."
        value={locationSelect}
        onChange={onChange}
      />
      <div className="search-result">
        {data
          .filter((item: any) => {
            const searchTerm = locationSelect.toLowerCase();
            const place = item.place.toLowerCase();

            return (
              searchTerm && place.startsWith(searchTerm) && place !== searchTerm
            );
          })
          .slice(0, 20)
          .map((item: any) => (
            <div
              className="location"
              key={item.id}
              onClick={() => {
                onSearchList(item.place);
              }}
            >
              {item.place}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lokasi;
