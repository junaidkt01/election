import React from "react";
import "./result.css";
import { useEffect, useState } from "react";
import backendUrl from "../../../BackendLink/backendLink";

const Result = () => {
  const [values, setValues] = useState([]);
  console.log(values);

  useEffect(() => {
    getDatas();
  }, []);

    const getDatas = () => {
    fetch("/api/getpoints", {})
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((err) => console.error("error: ", err));
  };

  return (
    <div className="result">
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Icon</th>
          <th>total vots</th>
        </tr>
        {values.map((items, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{items.leadername}</td>
              <td>
                <img src="" alt="..." />
              </td>
              <td>{items.point}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Result;
