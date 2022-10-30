import ZonaOptions from "../../../Assets/Data/ZonaOptions.json";
import Select from "react-select";

const Zona = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { zona: e.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="zona">
      <label>Zona Interaksi:</label>
      <Select
        options={ZonaOptions}
        onChange={handleOnChange}
        placeholder="Pilih salah satu..."
        isClearable={true}
        value={formValue.zona.value}
      />
    </div>
  );
};

export default Zona;
