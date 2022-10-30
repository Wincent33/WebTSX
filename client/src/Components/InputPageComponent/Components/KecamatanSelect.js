import { useState, useEffect } from "react";
import Select from "react-select";
const KecamatanSelect = (props) => {
  const { formValue, setFormValue } = props;
  const [fetchKecamatan, setFetchKecamatan] = useState([]);

  useEffect(() => {
    if (
      formValue.kabupaten !== null ||
      (undefined && Object.values(formValue.provinsi) !== undefined)
    ) {
      fetch(
        `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${formValue.kabupaten.value}.json`
      )
        .then((res) => res.json())
        .then((res) => {
          res.forEach(function (data) {
            data["value"] = data["id"];
            delete data["id"];
            data["label"] = data["name"];
            delete data["name"];
          });
          setFetchKecamatan(res);
        });
    }
  }, [formValue.kabupaten, formValue.provinsi, setFetchKecamatan]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { kecamatan: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="kecamatan">
      <label>kecamatan</label>
      <Select
        name="kecamatan"
        value={formValue.kecamatan}
        onChange={handleOnChange}
        options={fetchKecamatan}
      />
    </div>
  );
};

export default KecamatanSelect;
