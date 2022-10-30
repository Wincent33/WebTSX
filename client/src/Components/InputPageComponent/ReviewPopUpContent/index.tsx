import React from "react";
// import PropertyCards from "../../../PropertyCards";
import PropertyCards from "../../Common/PropertyCards";
import "./style.scss";
// import toRupiah from "@develoka/angka-rupiah-js";
import { WordifyRupiah } from "../../../Utils/WordifyRupiah";

const ReviewPopUP = (props: any) => {
  return props.trigger ? (
    <div className="review-pop-up">
      <div className="review-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          Close
        </button>
        <div className="content">
          <PropertyCards
            devLogo={props.devLogo}
            harga={WordifyRupiah(props.harga)}
            images={props.images}
            cicilan={props.cicilan}
            imageTotal={props.imagesLength}
            judul={props.judul}
            lokasi={props.lokasi}
            jumlahKamar={props.jumlahKamar}
            jumlahLantai={props.lantai}
            jumlahWC={props.jumlahWC}
            jumlahParkir={props.jumlahParkir}
            luasTanah={props.luasTanah}
            luasBangunan={props.luasBangunan}
            sellerPhoto={props.sellerPhoto}
            sellerName={props.sellerName}
            kecamatanValue={props.kecamatanValue}
            kabupatenValue={props.kabupatenValue}
            provinsiValue={props.provinsiValue}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ReviewPopUP;
