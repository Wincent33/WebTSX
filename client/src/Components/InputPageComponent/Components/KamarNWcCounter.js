import BedroomIcon from "../../../Assets/Images/bedroom.png";
import BathroomIcon from "../../../Assets/Images/bathroom.png";

const KamarNWcCounter = (props) => {
  const { formValue, setFormValue } = props;

  const handleKamarMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur > 0) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleKamarPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarTidur < 10) {
      let updatedValue = {};
      updatedValue = { kamarTidur: formValue.kamarTidur + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCMinus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi > 0) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi - 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  const handleWCPlus = (e) => {
    e.preventDefault();
    if (formValue.kamarMandi < 10) {
      let updatedValue = {};
      updatedValue = { kamarMandi: formValue.kamarMandi + 1 };
      setFormValue((prev) => ({ ...prev, ...updatedValue }));
    }
  };

  return (
    <div className="kamarNWCCounter">
      <div className="kamar-counter">
        {/* <div className="kamar-text">Jumlah Kamar Tidur:</div> */}
        <div className="kamar-input">
          <button className="kamar-btn" onClick={handleKamarMinus}>
            -
          </button>
          <div className="jumlah-kamar">
            <img
              className="bedroom-icon"
              width="50px"
              src={BedroomIcon}
              alt="bathroom"
            />
            <h2>x {formValue.kamarTidur}</h2>
          </div>
          <button className="kamar-btn" onClick={handleKamarPlus}>
            +
          </button>
        </div>
      </div>

      <div className="wc-counter">
        {/* <div className="wc-text">Jumlah Kamar Mandi:</div> */}
        <div className="wc-input">
          <button className="wc-btn" onClick={handleWCMinus}>
            -
          </button>
          <div className="jumlah-wc">
            <img
              className="bathroom-icon"
              width="50px"
              src={BathroomIcon}
              alt="bathroom"
            />
            <h2>x {formValue.kamarMandi}</h2>
          </div>
          <button className="wc-btn" onClick={handleWCPlus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default KamarNWcCounter;
