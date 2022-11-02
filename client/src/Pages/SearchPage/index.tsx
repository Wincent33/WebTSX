import React, { useState } from "react";
import NavBar from "../../Components/Common/NavBar/NavBar";
import { HiOutlineUserCircle } from "react-icons/hi";
import LoginDaftarPopUp from "../../Components/Common/AuthLoggedOut/LoginSignUpPopUp";
import SearchBar from "../../Components/SearchPageComponents/SearchBar";
import MovingBackground from "../../Components/Common/MovingBackground";
import "./style.scss";
import AuthLoggedOut from "../../Components/Common/AuthLoggedOut";
import Search1 from "../../Components/SearchPageComponents/Search1";
import SearchResults from "../../Components/SearchPageComponents/SearchResults";

const SearchPage: React.FC = () => {
  const [trigger, setTrigger] = useState<boolean>(false);
  return (
    <div className="searchpage">
      <MovingBackground />
      <div className="navbar">
        <img className="company-logo" src="" alt="logo" />
        <NavBar />
        <AuthLoggedOut />
      </div>
      <LoginDaftarPopUp trigger={trigger} setTrigger={setTrigger} />
      <Search1 />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
