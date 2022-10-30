import Slider from "react-slick";
import "./style.scss";
import HomeCards from "../../Common/HomeCards";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-next"
      style={{ ...style }}
      // style={{ ...style, display: "flex", position:"absolute",right:"0", top:"45%", justifyContent:"center",alignItems:"center", height:"30px", width:"30px", background: "red", borderRadius:"20px" }}
      onClick={onClick}
    >
      <GrLinkNext className="next-button" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-prev"
      style={{ ...style }}
      // style={{ ...style, display: "flex", position:"absolute",right:"0", top:"45%", justifyContent:"center",alignItems:"center", height:"30px", width:"30px", background: "red", borderRadius:"20px" }}
      onClick={onClick}
    >
      <GrLinkPrevious className="prev-button" />
    </div>
  );
}

function HomeB2() {
  var settings = {
    className: "slider",
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    // autoplaySPeed: 10000,
    // centerMode: true,
  };
  return (
    <div className="HomeB2">
      <h2>Newly Listed Property</h2>
      <Slider {...settings}>
        <div className="slider-content">
          <HomeCards />
        </div>
        <div className="slider-content">
          <HomeCards />
        </div>
        <div className="slider-content">
          <HomeCards />
        </div>
        <div className="slider-content">
          <HomeCards />
        </div>
        <div className="slider-content">
          <HomeCards />
        </div>
        <div className="slider-content">
          <HomeCards />
        </div>
      </Slider>
    </div>
  );
}

export default HomeB2;
