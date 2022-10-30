import React from "react";

const Lantai = (props) => {
  const { formValue, setFormValue } = props;
  const handleLantaiMinus = (e) => {
    e.preventDefault();
    if (formValue.lantai > 0) {
      let updatedValue = {};
      updatedValue = { lantai: formValue.lantai - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  const handleLantaiPlus = (e) => {
    e.preventDefault();
    if (formValue.lantai < 5) {
      let updatedValue = {};
      updatedValue = { lantai: formValue.lantai + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };
  return (
    <div className="lantai-counter">
      <div className="lantai-input">
        <button className="lantai-btn" onClick={handleLantaiMinus}>
          -
        </button>
        <div className="jumlah-lantai">
          {/* <img
                    className="lantai-icon"
                    width="50px"
                    src={""}
                    alt="bathroom"
                  /> */}
          <label> jumlah lantai:</label>
          <h2> {formValue.lantai}</h2>
        </div>
        <button className="lantai-btn" onClick={handleLantaiPlus}>
          +
        </button>
      </div>
    </div>
  );
};

export default Lantai;
