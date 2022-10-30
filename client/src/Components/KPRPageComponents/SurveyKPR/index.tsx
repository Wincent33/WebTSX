import React, { useState } from "react";
import "./style.scss";

const Slider = (props: any) => {
  const { activeTab, setActiveTab } = props;

  const handleTabOnClick = (index: number) => (e: any) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return (
    <div className="slider-container">
      <section className="bloc-tabs">
        <button
          className={activeTab === 0 ? "tabs active-tabs" : "tabs"}
          onClick={handleTabOnClick(0)}
        >
          Ada
        </button>
        <button
          className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={handleTabOnClick(1)}
        >
          Tidak Ada
        </button>
      </section>
    </div>
  );
};

function SurveyKPR() {
  const [dp, setDP] = useState(1);
  const [cicilan, setCicilan] = useState(1);

  const DpForm = () => {
    if (dp === 0) {
      return (
        <div className="dp-cicil">
          <div className="q">
            <label>Nominal Uang Muka:</label>
            <input type={"number"} />
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const CicilanForm = () => {
    if (cicilan === 0) {
      return (
        <div className="q">
          <label>Besar total cicilan bulanan lain:</label>
          <input type={"number"} />
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="survey-kpr">
      <div className="kpr-judul">
        <h1> Ketahui Kemampuan Anda</h1>
        <p>
          coba isi formulir dibawah dengan data terkini dan seakurat mungkin
          <br />
          untuk mengetahui kemampuan pembiayaan properti (KPA/KPR/KPT).
        </p>
      </div>
      <form className="kpr-form">
        <div className="harga-properti">
          <label>Harga Properti :</label>
          <input type={"number"} />
        </div>
        <div className="divider" />
        <div className="uang-muka">
          <label>Telah menyediakan uangmuka/DP: </label>
          <Slider activeTab={dp} setActiveTab={setDP} />
        </div>

        <div className="dp-cicil">
          <DpForm />
          <div className="divider" />
          <div className="q">
            <label>Banyak Kredit Berjalan Saat Ini:</label>
            <input type={"select"} />
          </div>
          <div className="q">
            <label>Penghasilan bersih bulanan:</label>
            <input type={"number"} />
          </div>
          <div className="divider" />
          <div className="cicilan">
            <label>Memiliki cicilan bulanan?</label>
            <Slider activeTab={cicilan} setActiveTab={setCicilan} />
          </div>
          <CicilanForm />
          <div className="divider" />
          <div className="q">
            <label>lama masa cicilan yang diinginkan:</label>
            <input type={"select"} />
          </div>
          <div className="q">
            <label>pekerjaan saat ini:</label>
            <input type={"select"} />
          </div>
          <div className="q">
            <label>Usia Saat Ini:</label>
            <input type={"number"} />
          </div>
          <div className="divider"/>
        </div>
      </form>
      <div className="kpr-submit">
        <p>
          Dengan klik tombol di bawah ini, Anda menyetujui Syarat dan Ketentuan
          serta Kebijakan Privasi Pinhome yang berlaku. Data dan informasi Anda
          tidak akan disebarluaskan tanpa persetujuan Anda.
        </p>
        <button>Lihat Kemampuan Anda</button>
      </div>
    </div>
  );
}

export default SurveyKPR;
