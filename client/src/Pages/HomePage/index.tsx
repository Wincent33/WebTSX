import React from "react";
import HomeB1 from "../../Components/HomePageComponents/Home1";
import HomeB2 from "../../Components/HomePageComponents/Home2";
import Tentang from "../../Components/HomePageComponents/Home3/Tentang";
import "./style.scss";

const HomePage: React.FC = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HomeB1 />
      <HomeB2 />
      <Tentang />
    </div>
  );
};

export default HomePage;
