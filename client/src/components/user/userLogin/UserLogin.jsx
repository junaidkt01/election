import React, { useEffect, useState } from "react";
import "./userLogin.css";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/getpolls")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

 
  const navigate = useNavigate();
  const [registerId, setRegisterId] = useState("");
  const [password, setPassword] = useState("");

  const isSameUser = data.some((items) => items.voter === registerId);

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
   
    localStorage.setItem("voter", data.voter);
    if (!isSameUser) {
      if (data.user) {
        alert("Login Successful");
        navigate("/vote");
      } else {
        alert("please check your id and password");
      }
      localStorage.setItem("token", data.user);
    } else {
      alert("You have already voted");
    }
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
