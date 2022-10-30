import React from "react";
// import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./style.scss";
import { BiBed, BiBath } from "react-icons/bi";
import SimpleImageSlider from "react-simple-image-slider";

const HomeCards: React.FC = () => {
  // var sliderSettings = {
  //   className: "card-slider",
  //   draggable: false,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
  const imagesExample = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div className="homecard-container">
      <div className="homecard-top">
        <h5>Nama cluster</h5>
        <img src="" alt="dev-logo" />
      </div>
      <div className="card-slider">
        <SimpleImageSlider
          height={200}
          width={370}
          images={imagesExample}
          showBullets={false}
          showNavs={true}
        />
      </div>

      <div className="homecard-bot-info">
        <div className="homecard-bot-top">
          <p>Thamrin, Jakarta Pusat, DKI Jakarta</p>
          <h5>Rp 1.5 Mil</h5>
        </div>
        <div className="homecard-bot-bot">
          <div className="homecard-bot-tags">
            <p>3</p>
            <BiBed size={"20px"} color={"white"} />
          </div>

          <div className="homecard-bot-tags">
            <p>5</p>
            <BiBath size={"20px"} color={"white"} />
          </div>

          <div className="homecard-bot-tags">
            <p>TagJenis</p>
          </div>
          <div className="homecard-bot-tags">
            <p>TagSert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
