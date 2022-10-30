import Select from "react-select";
import SertifikatOptions from "../../../Assets/Data/JenisSertifikatOptions.json";
const JenisSertifikat = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { jenisSertifikat: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="jenis-sertifikat">
      <label>Jenis Sertifikat:</label>
      <Select
        options={SertifikatOptions}
        value={formValue.jenisSertifikat.value}
        onChange={handleOnChange}
        placeholder="Pilih Salah Satu..."
      />
    </div>
  );
};

export default JenisSertifikat;
