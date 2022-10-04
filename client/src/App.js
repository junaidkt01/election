import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHome } from "./components/admin/adminHome/AdminHome";
import AdminLogin from "./components/admin/adminLogin/AdminLogin";
import AllData from "./components/admin/alldata/AllData";
import Register from "./components/admin/register/Register";
import Result from "./components/admin/result/Result";
import Home from "./components/home/Home";
import UserLogin from "./components/user/userLogin/UserLogin";
import Vote from "./components/user/vote/Vote";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/register" element={<Register />} />
          <Route path="/result" element={<Result />} />
          <Route path="/alldata" element={<AllData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
