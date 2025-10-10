import React, { useState } from "react";

// CONTROLLED COMPONENT

const Control = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Your name : {name}</p>
    </>
  );
};

export default Control;