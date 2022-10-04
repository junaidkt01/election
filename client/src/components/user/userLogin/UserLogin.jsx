import React, { useState } from "react";
import "./userLogin.css";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../../BackendLink/backendLink";

const UserLogin = () => {
  const navigate = useNavigate();
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        registerId,
        password,
      }),
    });
    const data = await response.json();
    console.log("user: ",data.voter.registerId)
    localStorage.setItem("voter", data.voter);
    if (data.user) {
      alert("Login Successful");
      navigate("/vote");
    } else {
      alert("please check your id and password");
    }
    localStorage.setItem("token", data.user);
  }

  return (
    <div className="userlogin">
      <div className="user-border">
        <form onSubmit={loginUser}>
          <label className="label" htmlFor="">
            Register ID
          </label>
          <br />
          <input
            value={registerId}
            onChange={(e) => setRegisterId(e.target.value)}
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
          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
