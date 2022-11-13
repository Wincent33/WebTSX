
import React from "react";
import "./style.scss";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
const FastDetail = () => {
  const Items = ({ title, value, unit, powerOf }: any) => {
    return (
      <div className="fast-detail-item">
        <label>{title}</label>
        <p>
          {value} {unit}
          <sup>{powerOf}</sup>
        </p>
        ----------------------
      </div>
    );
  };
  return (
    <div className="fast-detail">
      <div className="fast-detail-top">
        <h1>Rp 1,4 M</h1>
        <p>cicilan mulai dari Rp 8 jt/bulan</p>
        <div className="fast-detail-top-content">
          <div className="content-item">
          <p>3</p>
            <BiBed size={"30px"} color={"white"} />
          </div>
          <div className="content-item">
          <p>3</p>
            <BiBath size={"30px"} color={"white"} />
          </div>
          <div className="content-item">
          <p>3</p>
            <BiCar size={"30px"} color={"white"} />
          </div>
        </div>
      </div>
      <div className="fast-detail-bot">
        <div className="fast-detail-bot-left">
          <Items title="Tipe Properti" value="Rumah" />
          <Items title="Status" value="Dijual" />
          <Items title="Luas Tanah" value="123" unit="m" powerOf="2" />
        </div>
        <div className="fast-detail-bot-right">
          <Items title="Sertifikat" value="SHM-Sertifikat Hak Milik" />
          <Items title="Terdaftar Pada" value="1 bulan yang lalu" />
          <Items title="Interior" value="Non-Furnished" />
        </div>
      </div>
    </div>
  );
};

export default FastDetail;
