import React, { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { BsFacebook, BsApple, BsKey } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { submitDaftar } from "../api/submitAPI";
import validateEmail from "../utils/validateEmail";
const DaftarForm = ({ setDaftar }: any) => {
  const [daftarValue, setDaftarValue] = useState({
    email: "",
    user_name: "",
    password: "",
    repassword: "",
  });
  const [errMsg, setErrMsg] = useState(false);

  const handleDaftarOnChange = (e: any) => {
    const { name, value } = e.target;
    setDaftarValue({
      ...daftarValue,
      [name]: value,
    });
    setErrMsg(false);
  };
  const handleDaftarOnSubmit = submitDaftar(daftarValue);

  const daftarFormDiscipline = () => {
    setErrMsg(true);
    if (daftarValue.password !== daftarValue.repassword) {
      console.log("Password should be the identical");
      return <>"Password should be the identical"</>;
    }
    if (!validateEmail(daftarValue.email)) {
      console.log("Email is not Valid");
      return <>"Email is not Valid"</>;
    }
    //email discipline
    else {
      handleDaftarOnSubmit();
      return <></>;
    }
  };
  const [emailErrHover, setEmailErrHOver] = useState(false)
  // const handleMouseOver = () => {
  //   setEmailErrHOver(true);
  // };

  // const handleMouseOut = () => {
  //   setEmailErrHOver(false);
  // };
  const EmailErr = () => {
    if (!validateEmail(daftarValue.email)) {
      console.log("Email is not Valid");
      return <>"Email is not Valid"</>;
    }else return<></>
  }
  const PassErr = () =>{
    if (errMsg===true){
      if(daftarValue.password !== daftarValue.repassword){
        return<>Password Not the Same</>
      } else return <></>
    } else return <></>
  }
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
      <EmailErr/>
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
      <PassErr/>
      <div className="daftar-input">
        <BsKey className="icon" size={25} />
        <input
          type="password"
          name="repassword"
          onChange={handleDaftarOnChange}
          placeholder="Re-enter Password"
          value={daftarValue.repassword}
        />
      </div>
      {/* <ErrorMessage /> */}
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
          {" "}
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
