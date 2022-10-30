import { NumericFormat } from "react-number-format";

const LTLB = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChangeLt = (e) => {
    let updatedValue = {};
    updatedValue = { luasTanah: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  const handleOnChangeLb = (e) => {
    let updatedValue = {};
    updatedValue = { luasBangunan: parseInt(e.target.value) };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };

  return (
    <div className="LTLB">
      <h3>LT |</h3>
      <NumericFormat
        displayType="number"
        value={formValue.luasTanah}
        onChange={handleOnChangeLt}
        defaultValue={null}
        placeholder={0}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={3}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
      <h5>
        m<sup>2</sup>
      </h5>
      <h3>LB |</h3>
      <NumericFormat
        displayType="number"
        value={formValue.luasBangunan}
        onChange={handleOnChangeLb}
        defaultValue={null}
        placeholder={0}
        allowLeadingZeros={false}
        allowNegative={false}
        maxLength={3}
        isAllowed={(values) => {
          const { value } = values;
          return value >= 0;
        }}
      />
      <h5>
        m<sup>2</sup>
      </h5>
    </div>
  );
};

export default LTLB;
