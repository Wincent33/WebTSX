import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail, AiFillWarning } from "react-icons/ai";
import { submitDaftar } from "../../api/submitAPI";
import ReactTooltip from "react-tooltip";
import validateEmail from "../../utils/validateEmail";
import "./style.scss";
const DaftarForm = ({ setDaftar }: any) => {
  const [daftarValue, setDaftarValue] = useState({
    email: "",
    user_name: "",
    password: "",
    repassword: "",
  });
  const [errUserMsg, setErrUserMsg] = useState(false);
  const [errPassMsg, setErrPassMsg] = useState(false);
  const [errEmailMsg, setErrEmailMsg] = useState(false);
  const handleDaftarOnChange = (e: any) => {
    const { name, value } = e.target;
    setDaftarValue({
      ...daftarValue,
      [name]: value,
    });
    setErrUserMsg(false);
    setErrPassMsg(false);
    setErrEmailMsg(false);
  };
  const handleDaftarOnSubmit = submitDaftar(daftarValue);

  const daftarFormDiscipline = () => {
    const passwordErrSetter = () => {
      if (
        daftarValue.password !== daftarValue.repassword ||
        daftarValue.password === ""
      ) {
        setErrPassMsg(true);
        return passwordErrSetter
      }
    };
    const emailErrSetter = () => {
      if (!validateEmail(daftarValue.email) || daftarValue.email === "") {
        setErrEmailMsg(true);
        return emailErrSetter
      }
    };
    const userSetter = () => {
      if (daftarValue.user_name === "") {
        setErrUserMsg(true);
        return userSetter
      }
    };
    passwordErrSetter();
    emailErrSetter();
    userSetter();
    const checker=()=>{
      if(passwordErrSetter()&&emailErrSetter()&&userSetter())
      {console.log("test failed")}
      else {console.log("test passed")}
    } 
    
    checker()
  };
  const ErrDesc = ({ errorValue, errState }: any) => {
    if (errState === true) {
      return (
        <div className="err-popup">
          <AiFillWarning
            data-tip={errorValue}
            data-for="error"
            className="warning-icon"
          />
          <ReactTooltip
            className="err-tooltip"
            id="error"
            type="error"
            effect="solid"
            place="top"
            getContent={(dataTip:any) => `${dataTip}`}
          />
        </div>
      );
    } else return <></>;
  };
  const UserErr = () => {
    if (errUserMsg === true) {
      if (daftarValue.user_name === "") {
        return "Username tidak dapat kosong";
      }
      if (!validateEmail(daftarValue.email)) {
        return "Email is not Valid";
      } else return "";
    } else return "";
  };
  const EmailErr = () => {
    if (errEmailMsg === true) {
      if (daftarValue.email === "") {
        return "Harap Masukan Email Anda";
      }
      if (!validateEmail(daftarValue.email)) {
        return "Email is not Valid";
      } else return "";
    } else return "";
  };

  const PassErr = () => {
    if (errPassMsg === true) {
      if (daftarValue.password !== daftarValue.repassword) {
        return "Password Tidak Sama";
      }
      if (daftarValue.password === "") {
        return "Password Tidak Dapat Kosong";
      } else return "";
    } else return "";
  };
  return (
    <div className="daftar-content">
      <h3 className="title">Daftar ke website</h3>
      <div className="daftar-input">
        <div className="input">
          <AiOutlineUser className="icon" size={25} />
          <input
            type="text"
            name="user_name"
            onChange={handleDaftarOnChange}
            placeholder="Username"
            value={daftarValue.user_name}
          />
        </div>
        <ErrDesc errorValue={UserErr()} errState={errUserMsg} />
      </div>
      <div className="daftar-input">
        <div className="input">
          <AiOutlineMail className="icon" size={25} />
          <input
            type="email"
            name="email"
            onChange={handleDaftarOnChange}
            placeholder="E-mail"
            value={daftarValue.email}
          />
        </div>
        <ErrDesc errorValue={EmailErr()} errState={errEmailMsg} />
      </div>
      <div className="daftar-input">
        <div className="input">
          <BsKey className="icon" size={25} />
          <input
            type="password"
            name="password"
            onChange={handleDaftarOnChange}
            placeholder="Password"
            value={daftarValue.password}
          />
        </div>
      </div>

      <div className="daftar-input">
        <div className="input">
          <BsKey className="icon" size={25} />
          <input
            type="password"
            name="repassword"
            onChange={handleDaftarOnChange}
            placeholder="Re-enter Password"
            value={daftarValue.repassword}
          />
        </div>
        <ErrDesc errorValue={PassErr()} errState={errPassMsg} />
      </div>
      <div className="confirm" onClick={daftarFormDiscipline}>
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
          Saya telah setuju dengan <a href="persyaratan">
            Persyaratan Layanan
          </a>{" "}
          dan <a href="kebijakan">Kebijakan Privasi</a> termasuk pengumpulan,
          penggunaan, dan pengungkapan informasi pribadi saya.
        </h5>
        <h5>
          <input type="checkbox" />
          Kirimkan saya berita listing rumah, data properti, dan penawaran baru.
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
};

export default DaftarForm;
