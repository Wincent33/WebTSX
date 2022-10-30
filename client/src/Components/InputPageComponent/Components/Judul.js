const Judul = (props) => {
  const { formValue, setFormValue } = props;

  const handleOnChange = (e) => {
    let updatedValue = {};
    updatedValue = { judul: e.target.value };
    setFormValue((prev) => ({ ...prev, ...updatedValue }));
  };
  return (
    <>
      <div className="judul">
        <label>Judul</label>
        <input type="text" value={formValue.judul} onChange={handleOnChange} />
      </div>
    </>
  );
};
export default Judul;
