import React, { useState } from "react";
// import "../../Assets/Styles/Global/Cards.scss";
import "./style.scss";
import bathroomIcon from "../../../Assets/Images/bathroom.png";
import bedroomIcon from "../../../Assets/Images/bedroom.png";
import parkingIcon from "../../../Assets/Images/parking.png";
import sellerPhoto from "../../../Assets/Images/keys.png";
import AgencyLogo from "../../../Assets/Images/ray_white.png";
import WAIcon from "../../../Assets/Images/whatsapp.png";
import PhoneIcon from "../../../Assets/Images/phone.png";
import KeysIcon from "../../../Assets/Images/keys.png";
import SimpleImageSlider from "react-simple-image-slider";
import CameraIcon from "../../../Assets/Images/camera.png";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
// import { Slide } from "react-slideshow-image";
// import LineEllipsis from "react-lines-ellipsis";

export default function PropertyCards(props: any) {
  // const description =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt placerat hendrerit. Cras gravida nunc id lorem interdum pellentesque. In hac habitasse platea dictumst. Sed sit amet odio id turpis vulputate convallis sit amet a urna. Donec luctus hendrerit laoreet. Proin iaculis ipsum eros, vel fermentum elit tempor feugiat. Donec sit amet sapien vel lectus tempus tincidunt vitae eget neque.";;

  const [bookmark, setBookmark] = useState(false);
  const BookMarkBtn = () => {
    return (
      <div className="bookmark-icon" onClick={triggerBookmark}>
        {bookmark ? (
          <BsBookmarkCheck size={30} color="white" />
        ) : (
          <BsBookmarkCheckFill size={30} color="white" />
        )}
      </div>
    );
  };
  const triggerBookmark = () => {
    setBookmark(!bookmark);
    // console.log(bookmark);
  };
  // console.log(props);
  return (
    <div className="property-cards">
      <div className="top-card">
        <div className="dev-logo">
          <img src={props.devLogo} alt="property logo" />
        </div>
        <div className="top-harga">
          <h1>{props.harga}</h1>
          <h5> Cicilan: {props.cicilan} jutaan/bulan</h5>
        </div>
      </div>
      <div className="property-image">
        <SimpleImageSlider
          navSize={30}
          height={250}
          width={450}
          images={props.images}
          showBullets={true}
          showNavs={true}
        />
        <BookMarkBtn />
        <div className="jenis">
          <label>{props.jenisProperti}</label>
        </div>
        <div className="total-images">
          <div className="total-images-content">
            <img src={CameraIcon} alt="Total" />
            <h5>{props.imageTotal}</h5>
          </div>
        </div>
      </div>
      <div className="mid-card">
        <div className="mid-card-info">
          <h2>{props.judul}</h2>
          <p>
            {props.kecamatanValue}, {props.kabupatenValue},{" "}
            {props.provinsiValue}
          </p>
          <div className="card-info-tags">
            <div className="card-info-tags-content">
              <img src={bedroomIcon} alt="bedroom" />
              <h5>{props.jumlahKamar}</h5>
            </div>
            <div className="card-info-tags-content">
              <img src={bathroomIcon} alt="bedroom" />
              <h5>{props.jumlahWC}</h5>
            </div>
            <div className="card-info-tags-content">
              <img src={parkingIcon} alt="bedroom" />
              <h5>{props.jumlahParkir}</h5>
            </div>
            <div className="card-info-tags-content">
              <h5>{props.jumlahLantai} lt</h5>
            </div>
          </div>
          <div className="card-LTLB">
            <h5>
              LT: {props.luasTanah} m<sup>2</sup>
            </h5>
            <h5>
              LB: {props.luasBangunan} m<sup>2</sup>
            </h5>
          </div>
        </div>
        <div className="simulator-kpr">
          <div className="simulator-kpr-btn">
            <img src={KeysIcon} alt="calc" />
            <h5>Kalkulator</h5>
            <h5> KPR</h5>
          </div>
          {/* simulator kpr */}
        </div>
      </div>
      <div className="bot-card">
        <div className="seller-img-info">
          <div className="seller-img">
            <img src={sellerPhoto} alt="seller" />
            {/* seller pics */}
          </div>
          <div className="seller-info">
            <h5>{props.sellerName}</h5>
            <img src={AgencyLogo} alt="" />
            {/* Agency img */}
          </div>
        </div>
        <div className="seller-contact">
          <img src={PhoneIcon} alt="HP" />
          <img src={WAIcon} alt="WA" />
        </div>
      </div>
    </div>
  );
}
