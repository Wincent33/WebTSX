import React from "react";
import MovingBackground from "../../Components/Common/MovingBackground";
import "./style.scss";
import NavBar from "../../Components/Common/NavBar/NavBar";
import AuthLoggedOut from "../../Components/Common/AuthLoggedOut";
import BreadCrumbs from "../../Components/DetailPageComponents/Detail1/BreadCrumbs";
import ImageList from "../../Components/DetailPageComponents/Detail1/ImageList";
import FastDetail from "../../Components/DetailPageComponents/Detail1/FastDetail";
import Detail2 from "../../Components/DetailPageComponents/Detail2";
function DetailPage() {
  return (
    <div className="detail-page">
      <MovingBackground />
      <div className="navbar">
        <img className="company-logo" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut />
      </div>
      <BreadCrumbs />
      <div className="detail-judul">
        <h2>Judul Detail</h2>
      </div>
      <div className="detail-top">
        <FastDetail />
        <ImageList />
      </div>
      <Detail2 />
    </div>
  );
}

export default DetailPage;
