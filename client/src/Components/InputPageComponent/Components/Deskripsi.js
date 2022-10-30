import React from "react";

const Deskripsi = (props) => {
  const { formValue, setFormValue } = props;
  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { deskripsiProperti: e.target.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="deskripsi">
      <label>Deskripsi:</label>
      <textarea
        rows={4}
        cols={60}
        onChange={handleOnChange}
        value={formValue.deskripsiProperti}
      />
    </div>
  );
};

export default Deskripsi;
