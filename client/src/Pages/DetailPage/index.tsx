import React from "react";
import MovingBackground from "../../Components/Common/MovingBackground";
import "./style.scss";
import NavBar from "../../Components/Common/NavBar/NavBar";
import AuthLoggedOut from "../../Components/Common/AuthLoggedOut";
import BreadCrumbs from "../../Components/DetailPageComponents/Detail1/BreadCrumbs";
import ImageList from "../../Components/DetailPageComponents/Detail1/ImageList";
function DetailPage() {
  return (
    <div className="detail-page">
      <MovingBackground />
      <div className="navbar">
        <img className="company-logo" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut />
      </div>
      <BreadCrumbs/>
      <ImageList/>
    </div>
  );
}

export default DetailPage;
