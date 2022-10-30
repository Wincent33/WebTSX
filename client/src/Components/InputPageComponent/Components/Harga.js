import { NumericFormat } from "react-number-format";
const Harga = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    var num = e.target.value;
    num = num.split(".").join("");
    num = parseInt(num, 10);
    let updatedValue = {};
    updatedValue = { harga: num };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="harga">
      <label>Harga:(in Rp.)</label>
      <NumericFormat
        decimalSeparator={","}
        displayType="number"
        value={formValue.harga}
        onChange={handleOnChange}
        placeholder={"Masukan Harga..."}
        allowLeadingZeros={false}
        thousandSeparator={"."}
        allowNegative={false}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
      <label>nanti didalam Miliar juta</label>
    </div>
  );
};

export default Harga;
