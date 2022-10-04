import React, { useEffect, useState } from "react";
import backendUrl from "../../../BackendLink/backendLink";
import "./vote.css";
import axios from "axios";

const Vote = () => {
  const [values, setValues] = useState([]);
  const [leadername, setLeaderName] = useState("");
  const [voter, setVoter] = useState("");
  console.log(values);
  console.log("me", leadername, voter);

  // const [sumPoint, setSumPoint] = useState();
  // console.log(sumPoint);
  // const addOne = sumPoint + 1;
  // console.log(localStorage.getItem("token"));

  useEffect(() => {
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
      })
      .catch((err) => console.log(err));

    // axios.get("/api/getleader", {
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     id: userId,
    //   })
    // })
    //   // .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data.leadername);
    //     localStorage.setItem("leadername", data.leadername);
    //   })
    //   .catch((err) => console.error("error: ", err));
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
            <td>point</td>
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
                      // setLeaderName(localStorage.getItem("leadername"));
                      // setVoter(localStorage.getItem("voter"));
                      getpoll(items._id);
                      console.log(items.leadername);
                    }}
                  >
                    vote
                  </button>
                  <button
                    onClick={() => {
                      setLeaderName(localStorage.getItem("leadername"));
                      setVoter(localStorage.getItem("voter"));
                    }}
                  >
                    get
                  </button>
                  <button
                    onClick={() => {
                      voteHandle();
                    }}
                  >
                    Confirm
                  </button>
                </td>
                <td>{items.point}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Vote;
