import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
// import HomePage from "./Pages/HomePage/HomePage";
import DashBoard from "./Pages/DashBoard";
import HomePage from "./Pages/HomePage";
import InputPage from "./Pages/InputPage";
import KPRPage from "./Pages/KPRPage";
import SearchPage from "./Pages/SearchPage";
import DashBoardTest from "./Pages/DashBoardLearn";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/simulasi-kpr" element={<KPRPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboardtest" element={<DashBoardTest />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
