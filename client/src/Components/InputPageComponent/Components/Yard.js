import Switch from "react-switch";
const Yard = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { isYard: e };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="yard">
      <label>Yard?</label>
      <Switch onChange={handleOnChange} checked={formValue.isYard} />
    </div>
  );
};

export default Yard;
