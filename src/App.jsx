import React, { useState } from "react";
import { useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const double = useMemo(() => {
    console.log("calculating");
    // “Jo bhi calculation andar likhi hai (number * 2),
    // uska result yaad rakh lo.”
    // → Jab tak number change nahi hota,
    // ye calculation dobara run nahi hogi.
    return number * 2;
  }, [number]);
  return (
    <>
      <h2>Number : {number}</h2>
      <h2>Double : {double}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </>
  );
};

export default App;
