import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import LoginDaftarPopUp from "./LoginSignUpPopUp";
import "./style.scss";

function AuthLoggedOut() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div className="user-auth" onClick={() => setTrigger(true)}>
        <HiOutlineUserCircle size={"30px"} />
        <label>Daftar/Masuk</label>
      </div>
      <LoginDaftarPopUp trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}

export default AuthLoggedOut;
