const Lokasi = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { alamat: e.target.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <div className="lokasi">
      <label>Lokasi</label>
      <input
        name="lokasi"
        value={formValue.alamat}
        type="text"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Lokasi;
