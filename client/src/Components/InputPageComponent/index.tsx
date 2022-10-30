import React, { useState } from "react";
import "./style.scss";
import ReviewPopUP from "./ReviewPopUpContent";
import Judul from "./Components/Judul";
import NamaProperti from "./Components/NamaProperti";
import Deskripsi from "./Components/Deskripsi";
import Developer from "./Components/Developer";
import JenisProperti from "./Components/JenisProperti";
import Harga from "./Components/Harga";
import JenisSertifikat from "./Components/JenisSertifikat";
import Furnished from "./Components/Furnished";
import ProvinsiSelect from "./Components/ProvinsiSelect";
import KabupatenSelect from "./Components/KabupatenSelect";
import KecamatanSelect from "./Components/KecamatanSelect";
import LTLB from "./Components/LTLB";
import KamarNWcCounter from "./Components/KamarNWcCounter";
import Fasilitas from "./Components/Fasilitas";
import Lokasi from "./Components/Lokasi";
import Zona from "./Components/Zona";
import Yard from "./Components/Yard";
import ImagesUpload from "./Components/ImagesUpload";
import Lantai from "./Components/Lantai";
import ParkirMobil from "./Components/ParkirMobil";
import Listrik from "./Components/Listrik";
import BeliSewa from "./Components/BeliSewa/index";
const InputForm = () => {
  const formInnit = {
    status: "dijual",
    judul: "",
    developer: null,
    devLogo: null,
    deskripsiProperti: "",
    namaProperti: "",
    alamat: "",
    provinsi: { value: "", label: "" },
    kabupaten: { province_id: "", value: "", label: "" },
    kecamatan: { regency_id: "", value: "", label: "" },
    jenisProperti: { value: "", label: "" },
    harga: 0,
    jenisSertifikat: "",
    cicilan: 0,
    imagesURLs: [
      "https://images.unsplash.com/photo-1665777916560-60bbcb0ce05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    isFurnished: false,
    luasTanah: null,
    luasBangunan: null,
    lantai: 0,
    parkir: 0,
    kamarTidur: 0,
    kamarMandi: 0,
    fasilitas: [],
    zona: [],
    isYard: false,
    listrik: null,
  };
  const [formValue, setFormValue] = useState(formInnit);
  const [reviewPopUp, setReviewPopUp] = useState(false);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([
    "https://images.unsplash.com/photo-1665777916560-60bbcb0ce05b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  ]);
  function titleCase(str: string) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  return (
    <div className="admin-form">
      <form>
        <div className="form-left">
          <BeliSewa formValue={formValue} setFormValue={setFormValue} />
          <Judul formValue={formValue} setFormValue={setFormValue} />
          <NamaProperti formValue={formValue} setFormValue={setFormValue} />
          <Deskripsi formValue={formValue} setFormValue={setFormValue} />
          <Developer formValue={formValue} setFormValue={setFormValue} />
          <div className="alamat">
            <Lokasi formValue={formValue} setFormValue={setFormValue} />
            <ProvinsiSelect formValue={formValue} setFormValue={setFormValue} />
            <KabupatenSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
            <KecamatanSelect
              formValue={formValue}
              setFormValue={setFormValue}
            />
          </div>
          <JenisProperti formValue={formValue} setFormValue={setFormValue} />
          <Harga formValue={formValue} setFormValue={setFormValue} />
          <JenisSertifikat formValue={formValue} setFormValue={setFormValue} />
          <ImagesUpload
            images={images}
            setImages={setImages}
            setImageURLs={setImageURLs}
          />
        </div>
        <div className="form-right">
          <Furnished formValue={formValue} setFormValue={setFormValue} />
          <ParkirMobil formValue={formValue} setFormValue={setFormValue} />
          <Lantai formValue={formValue} setFormValue={setFormValue} />
          <LTLB formValue={formValue} setFormValue={setFormValue} />
          <KamarNWcCounter formValue={formValue} setFormValue={setFormValue} />
          <Fasilitas formValue={formValue} setFormValue={setFormValue} />
          <Zona formValue={formValue} setFormValue={setFormValue} />
          <Yard formValue={formValue} setFormValue={setFormValue} />
          <Listrik formValue={formValue} setFormValue={setFormValue} />
          <div className="review-submit">
            <button
              className="review"
              onClick={(e) => {
                e.preventDefault();
                setReviewPopUp(true);
              }}
            >
              Review
            </button>
            <ReviewPopUP
              lantai={formValue.lantai}
              trigger={reviewPopUp}
              setTrigger={setReviewPopUp}
              harga={formValue.harga}
              judul={formValue.judul}
              images={imageURLs}
              cicilan={21}
              jumlahKamar={formValue.kamarTidur}
              jumlahParkir={formValue.parkir}
              jumlahWC={formValue.kamarMandi}
              devLogo={formValue.devLogo !== null ? formValue.devLogo : ""}
              kecamatanValue={
                formValue.kecamatan !== null
                  ? titleCase(formValue.kecamatan.label)
                  : null
              }
              kabupatenValue={
                formValue.kabupaten !== null
                  ? titleCase(formValue.kabupaten.label)
                  : null
              }
              provinsiValue={titleCase(formValue.provinsi.label)}
              imagesLength={imageURLs.length}
            />
            <button className="submit">Submit</button>
          </div>
        </div>
        {/* let result = formValue.fasilitas.map((a) => a.value); */}
        {/* Buat  convert object array ke aray saja */}
      </form>
    </div>
  );
};

export default InputForm;
