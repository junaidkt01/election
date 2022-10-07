import React, { useEffect, useState } from "react";
import "./vote.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Vote = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/api/getpolls")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const [values, setValues] = useState([]);
  const [leadername, setLeaderName] = useState("");
  const [voter, setVoter] = useState("");

  const isSameUser = data.some((items) => {
    return items.voter === voter || voter === null;
  });
  console.log(isSameUser);

  useEffect(() => {
    setVoter(localStorage.getItem("voter"));
    getDatas();
  }, []);
  const getDatas = () => {
    fetch("/api/getpoints")
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((err) => console.error("error: ", err));
  };

  function getpoll(userId) {
    axios
      .post("/api/updatepoll", { id: userId })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("leadername", res.data.leadername);
        setLeaderName(localStorage.getItem("leadername"));
      })
      .catch((err) => console.log(err));
  }
  function voteHandle() {
    fetch("/api/poll", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadername: leadername,
        voter: voter,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="vote">
      <div className="leaders">
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Icon</th>
            <th>Vote</th>
          </tr>
          {values.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.leadername}</td>
                <td>
                  <img src="" alt="..." />
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (isSameUser) {
                        alert("You can't do twice");
                        navigate('/')
                      } else {
                        getpoll(items._id);
                      }
                    }}
                    >
                    vote
                  </button>
                  <button
                    onClick={() => {
                      voteHandle();
                      navigate('/')
                    }}
                  >
                    Confirm
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Vote;
