import { useState, useEffect } from "react";
import Select from "react-select";

const ProvinsiSelect = (props) => {
  const { formValue, setFormValue } = props;
  const [fetchProvinsi, setFetchProvinsi] = useState([]);

  useEffect(() => {
    fetch("http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((res) => {
        res.forEach(function (data) {
          data["value"] = data["id"];
          delete data["id"];
          data["label"] = data["name"];
          delete data["name"];
        });
        setFetchProvinsi(res);
      });
  }, [setFetchProvinsi]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { provinsi: e, kabupaten: null, kecamatan: null };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <>
      <div>
        <div className="provinsi">
          <label>provinsi</label>
          <Select
            name="provinsi"
            value={formValue.provinsi}
            onChange={handleOnChange}
            options={fetchProvinsi}
          />
        </div>
      </div>
    </>
  );
};

export default ProvinsiSelect;
