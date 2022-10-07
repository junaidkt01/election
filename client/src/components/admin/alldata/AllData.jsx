import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./allData.css";

const AllData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
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
            <h2>Malik t</h2>
            {data.map((items, index, arr) => {
              console.log(items);

              if (items.leadername === "Malik t")
                return <h4>{items.voter}</h4>;
            })}
          </div>

          {/* // 2. */}
          <div className="leader">
            <h2>Junaid kt</h2>
            {data.map((items) => {
              // console.log(items);
              if (items.leadername === "Junaid kt")
                return <h4>{items.voter}</h4>;
            })}
          </div>
          {/* // 3. */}
          <div className="leader">
            <h2>Anfas k</h2>
            {data.map((items) => {
              // console.log(items);
              if (items.leadername === "Anfas k") return <h4>{items.voter}</h4>;
            })}
          </div>
          {/* // 4. */}
          <div className="leader">
            <h2>Ashraf m</h2>
            {data.map((items) => {
              // console.log(items);
              if (items.leadername === "Ashraf m") return <h4>{items.voter}</h4>;
            })}
          </div>
          {/* // 5. */}
          <div className="leader">
            <h2>Saleem tk</h2>
            {data.map((items) => {
              // console.log(items);
              if (items.leadername === "Saleem tk") return <h4>{items.voter}</h4>;
            })}
          </div>
          {/* // 6. */}
          <div className="leader">
            <h2>Ajmal k</h2>
            {data.map((items) => {
              // console.log(items);
              if (items.leadername === "Ajmal k") return <h4>{items.voter}</h4>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
