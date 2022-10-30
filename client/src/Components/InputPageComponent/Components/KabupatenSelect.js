import { useState, useEffect } from "react";
import Select from "react-select";
const KabupatenSelect = (props) => {
  const { formValue, setFormValue } = props;

  const [fetchKabupaten, setFetchKabupaten] = useState([]);
  useEffect(() => {
    if (Object.values(formValue.provinsi)[0] !== undefined) {
      fetch(
        `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${
          Object.values(formValue.provinsi)[0]
        }.json`
      )
        .then((res) => res.json())
        .then((res) => {
          res.forEach(function (data) {
            data["value"] = data["id"];
            delete data["id"];
            data["label"] = data["name"];
            delete data["name"];
          });
          setFetchKabupaten(res);
        });
    }
  }, [formValue.provinsi, setFetchKabupaten]);

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { kabupaten: e, kecamatan: null };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="kabupaten">
      <label>kabupaten</label>
      <Select
        name="kabupaten"
        value={formValue.kabupaten}
        onChange={handleOnChange}
        options={fetchKabupaten}
      />
    </div>
  );
};

export default KabupatenSelect;
