import React from "react";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./style.scss";
const LoginForm = ({ setDaftar }: any) => {
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
          Saya telah setuju dengan <a href="persyaratan">Persyaratan Layanan</a>{" "}
          dan <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
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
};

export default LoginForm;
