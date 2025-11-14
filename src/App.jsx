import React, { useCallback, useState } from "react";
import ChildCard from "./ChildCard";

const App = () => {
  const [count, setCount] = useState(0);

  // useCallback: function ko freeze kar dya (empty array = never change)
  const addToCart = useCallback(() => {
    console.log("Item Added");
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase : {count}</button>
      <ChildCard addToCart={addToCart} />
    </>
  );
}

export default App;