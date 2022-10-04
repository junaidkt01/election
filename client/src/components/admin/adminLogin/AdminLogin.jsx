import React, { useState } from "react";
import "./adminLogin.css";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../../BackendLink/backendLink";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function loginAdmin(e) {
    e.preventDefault();
    if (name === "anfas" && password === "1111") navigate("/adminhome");
  }

  return (
    <div>
      <div className="adminlogin">
        <div className="admin-login-border">
          <label className="label" htmlFor="">
            Name
          </label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <br />
          <label className="label" htmlFor="">
            Password
          </label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
          />
          <br />
          <input onClick={loginAdmin} className="button" type="submit" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
