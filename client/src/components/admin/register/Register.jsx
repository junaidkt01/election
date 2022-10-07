import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [registerId, setRegisterId] = useState("");
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        registerId,
        number,
        password,
      }),
    });

    const data = await response.json();
    if (data.message) alert("User added successfully");
    if (data.error) alert(data.error);
  }

  return (
    <div className="userRegister">
      <div className="register-border">
        <form onSubmit={registerUser}>
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
            Number
          </label>
          <br />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
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
          <input className="button" value="Register" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
