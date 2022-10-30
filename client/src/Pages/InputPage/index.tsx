import React from "react";
import MovingBackground from "../../Components/Common/MovingBackground";
import "./style.scss";
import NavBar from "../../Components/Common/NavBar/NavBar";
import AuthLoggedOut from "../../Components/Common/AuthLoggedOut";
import InputForm from "../../Components/InputPageComponent";
function InputPage() {
  return (
    <div className="input-page">
      <MovingBackground />
      <div className="navbar">
        <img className="company-logo" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut />
      </div>
      <InputForm />
    </div>
  );
}

export default InputPage;
