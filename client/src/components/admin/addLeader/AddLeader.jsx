import React from "react";
import { useState } from "react";

const AddLeader = () => {
  const [leader, setLeader] = useState("");
  async function addLeader(e) {
    e.preventDefault();
    const response = await fetch("/api/addleader", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadername:leader,
      }),
    });
    const data = await response.json();
    if (data.message) alert(data.message);
    if (data.error) alert(data.error);
  }
  return (
    <div>
      <label htmlFor="">Leader name</label>
      <input
        value={leader}
        onChange={(e) => setLeader(e.target.value)}
        type="text"
      />
      <button onClick={addLeader}>Submit</button>
    </div>
  );
};

export default AddLeader;
