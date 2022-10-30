import React from "react";
import Select from "react-select";
import DeveloperOptions from "../../../Assets/Data/DeveloperOptions.json";

const Developer = (props) => {
  const { formValue, setFormValue } = props;

  const view =
    formValue.developer === null && formValue.devLogo === null
      ? [0]
      : { label: formValue.developer, value: formValue.devLogo };

  const handleOnChange = (e) => {
    if (e !== null) {
      let updatedValue = {};
      updatedValue = { developer: e.label, devLogo: e.value };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    } else {
      let updatedValue = {};
      updatedValue = { developer: null, devLogo: null };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  return (
    <div className="developer">
      <label>Nama developer:</label>
      <Select
        isClearable={true}
        isSearchable={true}
        isMulti={false}
        options={DeveloperOptions}
        placeholder={"Kosongkan atau Pilih salah satu..."}
        value={view}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Developer;
