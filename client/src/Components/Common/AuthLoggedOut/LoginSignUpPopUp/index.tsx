import React, { useState } from "react";
import "./style.scss";
import LoginForm from "./components/LoginForm";
import DaftarForm from "./components/DaftarForm";

function LoginDaftarPopUp(props: any) {
  if (props.trigger) {
    return (
      <div className="login-logout-popup">
        <div className="login-logout-inner">
          <button
            className="close-btn"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            Close
          </button>
          <LoginContent />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default LoginDaftarPopUp;

const LoginContent = () => {
  const [daftar, setDaftar] = useState(true);
  if (daftar) {
    return <LoginForm setDaftar={setDaftar} />;
  } else {
    return <DaftarForm setDaftar={setDaftar} />;
  }
};
