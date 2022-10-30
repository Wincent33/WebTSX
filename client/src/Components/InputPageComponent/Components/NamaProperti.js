const NamaProperti = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { namaProperti: e.target.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <>
      <div className="nama-properti">
        <label>Nama Properti:</label>
        <input
          type="text"
          value={formValue.namaProperti}
          onChange={handleOnChange}
        />
      </div>
    </>
  );
};
export default NamaProperti;
