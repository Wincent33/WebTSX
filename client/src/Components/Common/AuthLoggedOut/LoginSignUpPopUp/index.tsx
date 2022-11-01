import React, { useState, useEffect } from "react";
// import "../../../Assets/Styles/Global/LoginSignupPopUp.scss";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import "./style.scss";
import Axios from "axios";

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
  const [daftarValue, setDaftarValue] = useState({
    email: "",
    user_name: "",
    password: "",
  });

  const submitDaftar = () => {
    Axios.post("http://localhost:5000/api/signin/post")
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDaftarOnChange = (e: any) => {
    const { name, value } = e.target;
    setDaftarValue({
      ...daftarValue,
      [name]: value,
    });
  };
  if (daftar) {
    return (
      <div className="login-content">
        <h3 className="title">Log In ke Website</h3>
        <div className="login-input">
          <AiOutlineMail className="icon" size={25} />
          <input type="email" placeholder="E-mail" />
        </div>
        <div className="login-input">
          <BsKey className="icon" size={25} />
          <input type="password" placeholder="Password" />
        </div>

        <div className="ingat-lupa">
          <div className="ingat-saya">
            <input type="checkbox" />
            <h5>Ingat Saya</h5>
          </div>
          <div className="lupa-pwd">
            <h5>Lupa Password</h5>
          </div>
        </div>
        <div className="confirm">
          <h3>Masuk</h3>
        </div>
        <h4>---atau---</h4>
        <h4>Masuk Menggunakan Pihak Ketiga:</h4>
        <div className="third-party-login">
          <div className="third-party-login-list">
            <GrGoogle className="google-icon" size={25} />
            <BsFacebook className="facebook-icon" size={25} />
            <BsApple className="apple-icon" size={25} />
          </div>
        </div>
        <div className="disclaimer">
          <h5>
            Saya telah setuju dengan{" "}
            <a href="persyaratan">Persyaratan Layanan</a> dan{" "}
            <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
            penggunaan, dan pengungkapan informasi pribadi saya.
          </h5>
        </div>
        <div className="divider" />
        <div className="register">
          <h5>
            Belum punya akun?{" "}
            <span onClick={() => setDaftar(false)}>Daftar Sekarang</span>
          </h5>
          <h5>
            Ingin daftar sebagai agen properti? <span>Daftar Sebagai Agen</span>
          </h5>
        </div>
      </div>
    );
  } else {
    return (
      <div className="daftar-content">
        <h3 className="title">Daftar ke website</h3>
        <div className="daftar-input">
          <AiOutlineUser className="icon" size={25} />
          <input
            type="text"
            name="user_name"
            onChange={handleDaftarOnChange}
            placeholder="Username"
            value={daftarValue.user_name}
          />
        </div>
        <div className="daftar-input">
          <AiOutlineMail className="icon" size={25} />
          <input
            type="email"
            name="email"
            onChange={handleDaftarOnChange}
            placeholder="E-mail"
            value={daftarValue.email}
          />
        </div>
        <div className="daftar-input">
          <BsKey className="icon" size={25} />
          <input
            type="password"
            name="password"
            onChange={handleDaftarOnChange}
            placeholder="Password"
            value={daftarValue.password}
          />
        </div>
        <div className="daftar-input">
          <BsKey className="icon" size={25} />
          <input type="password" placeholder="Re-enter Password" />
        </div>

        <div className="confirm" onClick={submitDaftar}>
          <h3>Daftar</h3>
        </div>
        <h4>---atau---</h4>
        <h4>Daftar Menggunakan Pihak Ketiga:</h4>
        <div className="third-party-login">
          <div className="third-party-login-list">
            <GrGoogle className="google-icon" size={25} />
            <BsFacebook className="facebook-icon" size={25} />
            <BsApple className="apple-icon" size={25} />
          </div>
        </div>
        <div className="disclaimer">
          <h5>
            <input type="checkbox" />
            Saya telah setuju dengan{" "}
            <a href="persyaratan">Persyaratan Layanan</a> dan{" "}
            <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
            penggunaan, dan pengungkapan informasi pribadi saya.
          </h5>
          <h5>
            {" "}
            <input type="checkbox" />
            Kirimkan saya berita listing rumah, data properti, dan penawaran
            baru.
          </h5>
        </div>
        <div className="divider" />
        <div className="register">
          <h5>
            Sudah punya akun?{" "}
            <span onClick={() => setDaftar(true)}>Log In Sekarang</span>
          </h5>
        </div>
      </div>
    );
  }
};
