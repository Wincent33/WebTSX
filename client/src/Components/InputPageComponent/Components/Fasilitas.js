import Select from "react-select";
import FasilitasOptions from "../../../Assets/Data/FasilitasOptions.json";
const Fasilitas = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { fasilitas: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  return (
    <div className="fasilitas">
      <label>Fasilitas:</label>
      <Select
        options={FasilitasOptions}
        isMulti={true}
        onChange={handleOnChange}
        value={formValue.fasilitas}
      />
    </div>
  );
};

export default Fasilitas;
