import React from "react";
import ComponentB from "./ComponentB";
import { ColorContext } from "../contexts";


const ComponentA = () => {
  const user = "Peacemaker";

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <ColorContext.Provider value={user}>
        <ComponentB />
      </ColorContext.Provider>
    </div>
  );
};

export default ComponentA;
