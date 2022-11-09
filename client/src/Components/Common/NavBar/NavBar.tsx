import React from "react";
// import logo from "../../images/1654241759209.jpg";
// import LoginDaftar from "../LoginDaftarPopUp";
// import LoginDaftarContent from "../LoginDaftarPopUp/LoginDaftarContent";
// import "./NavTest.css";
import "./style.scss"

export default function NavBar() {
  //   const [LoginDaftarPopUp, setLoginDaftarPopUp] = useState(false);
  return (
    <section className="navbar">
      <nav className="circle">
        <ul>
          <li>
            <a href="#">Beli/Sewa</a>
          </li>
          <li>
            <a href="/simulasi-kpr">Kalkulator KPR</a>
          </li>
          <li>
            <a href="#">Konsultasi</a>
          </li>
          <li>
            <a href="#">List Properti Anda</a>
          </li>
          <li>
            <a href="#">Kontak Kami</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
