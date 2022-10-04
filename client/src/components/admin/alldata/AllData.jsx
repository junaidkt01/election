import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./allData.css";

const AllData = () => {
  const [data, setData] = useState([]);
  const [leader, setLeader] = useState("");
  const [voter, setVoter] = useState("");
  // console.log(data);
  useEffect(() => {
    setLeader(localStorage.getItem("leadername"));
    setVoter(localStorage.getItem("voter"));
    fetch("/api/getpolls")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="leaders">
        <div className="leadersborder">
          {/* // 1. */}

          <div className="leader">
            <h2>Ameer t</h2>
            {data.map((items) => {
              console.log(items);
              if (items.leadername === "Ameer t") return <h4>{items.voter}</h4>;
            })}
          </div>

          {/* // 2. */}
          <div className="leader">
            <h2>Junaid kt</h2>
            {data.map((items) => {
              console.log(items);
              if (items.leadername === "Junaid kt") return <h4>{items.voter}</h4>;
            })}
          </div>
          {/* // 3. */}
          <div className="leader">
            <h2>Anfas k</h2>
            {data.map((items) => {
              console.log(items);
              if (items.leadername === "Anfas k") return <h4>{items.voter}</h4>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
