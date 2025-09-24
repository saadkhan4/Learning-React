// import React, { useState } from "react";
import { useEffect, useState } from "react";
import Practice from "./practice";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   Jb bhi "count" state variable update hoga tu useEffect run hoga.
//   useEffect(() => {
//     console.log("Counter", count);
//   }, [count]);
//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </>
//   );
// };

// export default Counter;

// .map => To render every element of an array.

// const App = () => {
//   const cars = ["Audi", "BMW", "Chrysler", "Ford", "Mitsubishi Motors"];
//   return (
//     <>
//       <h2>LIST OF CARS COMPANY</h2>
//       <ul>
//         {cars.map((cars) => (
//           <li>{cars}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const App = () => {
//   const handleClick = () => {
//     alert("Button Clicked");
//   };
//   return (
//     <>
//       <h2>onClick Example</h2>
//       <button onClick={handleClick}>Click Me!</button>
//     </>
//   );
// };

// const App = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   return (
//     <>
//       <h2>onChange Event</h2>
//       <input type="text" placeholder="Enter Text" onChange={handleChange} />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

const Card = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const handleCount = () => {
    console.log("handleCount called");
  };

  const handleData = () => {
    console.log("handleData called");
  };
    
    useEffect(() => {
        handleData();
    },[data])

  
  // agar humay ek hi bar function ko call karna hoga tu hum useEffect ka use krengy.
  useEffect(() => {
    handleCount();
  }, [count]);

  // agar humay bar bar function ko call krna hai tu useEffect ka use nhi krengy.
  // woh component k sth rerender horha.
  // handleCount();

  return (
    <>
      <h2>useEffect Example</h2>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={()=> setData(data + 1)}>Increase</button>
    </>
  );
};

// const App = () => {
//     return (
//         <Card title="alien"/>
//     )
// }

export default Card;
