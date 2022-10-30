import React, { useState } from "react";
import "./style.scss";
// import "../../Assets/Styles/Global/Home1Bg.scss";
import SearchTabs from "../../Common/HomeSearchTab";
import NavBar from "../../Common/NavBar/NavBar";
import LoginDaftarPopUp from "../../Common/AuthLoggedOut/LoginSignUpPopUp";
import MovingBackground from "../../Common/MovingBackground";
import AuthLoggedOut from "../../Common/AuthLoggedOut";
// import PhoneLogo from "../Assets/Images/phone_icon.png"

export default function HomeB1() {
  const [trigger, setTrigger] = useState<boolean>(false);
  return (
    <section className="home-b1">
      <MovingBackground />
      <div className="home-navbar">
        <div className="navbar-menu">
          <img src="" alt="Logo" className="company-logo" />
          <NavBar />
          <AuthLoggedOut />
        </div>
        <LoginDaftarPopUp trigger={trigger} setTrigger={setTrigger} />
      </div>
      <div className="home1-content">
        <div className="home1-left">
          <h1>Mencari Rumah Idaman Dengan Praktis</h1>
          <div className="search">
            <SearchTabs />
          </div>
        </div>
        <img
          className="home1-img"
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </section>
  );
}
