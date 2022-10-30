import Select from "react-select";
import JenisPropertiOptions from "../../../Assets/Data/JenisPropertiOption.json";

const JenisProperti = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { jenisProperti: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="jenis-properti">
      <label>Jenis Properti</label>
      <Select
        options={JenisPropertiOptions}
        value={formValue.jenisProperti.value}
        onChange={handleOnChange}
        placeholder={"Pilih Salah Satu..."}
      />
    </div>
  );
};

export default JenisProperti;
