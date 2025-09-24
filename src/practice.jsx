import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count", count);
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

// const App = () => {
//   const cars = ["Audi", "BMW", "Chrysler", "Honda", "Toyota"];
//   return (
//     <>
//       <ul>
//         <h2>CARS COMPANIES</h2>
//         {cars.map((cars) => (
//           <li>{cars}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const App = () => {
//   const handleClick = () => {
//     alert("Button Pressed");
//   };
//   return (
//     <>
//       <h2>onClick Event</h2>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// };

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h2>onChange Event</h2>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={handleChange}
      />
      <p>You typed : {text}</p>
    </>
  );
};

export default App;
