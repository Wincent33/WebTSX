import React from "react";
import { NumericFormat } from "react-number-format";
const Listrik = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { listrik: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="listrik">
      <h3>Listrik</h3>
      <NumericFormat
        displayType="number"
        value={formValue.listrik}
        onChange={handleOnChange}
        defaultValue={null}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={5}
        placeholder={"Daya Listrik Properti..."}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
    </div>
  );
};

export default Listrik;
