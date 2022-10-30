import Switch from "react-switch";

const Furnished = (props) => {
  const {formValue, setFormValue} = props

  const handleOnChange= (e) => {
    let updatedValue = {};
      updatedValue = { isFurnished: e};
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
  }
  return (
    <div className="furnished">
      <label>Furnished?</label>
      <Switch
        onChange={handleOnChange}
        checked={formValue.isFurnished}
      />
    </div>
  );
};

export default Furnished;
