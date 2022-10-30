import React from "react";

const Lantai = (props) => {
  const { formValue, setFormValue } = props;
  const handleParkirMinus = (e) => {
    e.preventDefault();
    if (formValue.parkir > 0) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleParkirPlus = (e) => {
    e.preventDefault();
    if (formValue.parkir < 5) {
      let updatedValue = {};
      updatedValue = { parkir: formValue.parkir + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  return (
    <div className="parkir-counter">
      <div className="parkir-input">
        <button className="parkir-btn" onClick={handleParkirMinus}>
          -
        </button>
        <div className="jumlah-parkir">
          {/* <img
                    className="lantai-icon"
                    width="50px"
                    src={""}
                    alt="bathroom"
                  /> */}
          <label> jumlah Parkir:</label>
          <h2> {formValue.parkir}</h2>
        </div>
        <button className="parkir-btn" onClick={handleParkirPlus}>
          +
        </button>
      </div>
    </div>
  );
};

export default Lantai;
