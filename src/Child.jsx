import React from "react";

const Child = ({ name, handleChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    </>
  );
};

export default Child;
