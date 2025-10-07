// import { useRef } from "react";
// import Practice from "./components/Practice";

import { useRef } from "react";

// import Practice from "./components/Practice";

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

// const Card = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);

//   const handleCount = () => {
//     console.log("handleCount called");
//   };

//   const handleData = () => {
//     console.log("handleData called");
//   };

//     useEffect(() => {
//         handleData();
//     },[data])

//   // agar humay ek hi bar function ko call karna hoga tu hum useEffect ka use krengy.
//   useEffect(() => {
//     handleCount();
//   }, [count]);

//   // agar humay bar bar function ko call krna hai tu useEffect ka use nhi krengy.
//   // woh component k sth rerender horha.
//   // handleCount();

//   return (
//     <>
//       <h2>useEffect Example</h2>
//           <button onClick={() => setCount(count + 1)}>Increase</button>
//           <button onClick={()=> setData(data + 1)}>Increase</button>
//     </>

//   );

// };

// export default Card;

// const App = () => {
//   const cars = ["Audi", "Toyota", "Honda", "Benz", "BMW"];
//   return (
//     <>
//       <h2>LIST OF CARS COMPANIES</h2>
//       <ul>
//         {cars.map((cars,index) => (
//           <li key={index}>{cars}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// const App = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   return (
//     <>
//       <h2>onChange Event</h2>
//       <input
//         type="text"
//         placeholder="Enter your text"
//         onChange={handleChange}
//       />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

// const App = () => {
//   const handleClick = () => {
//     alert("Button Clicked")
//   }
//   return (
//     <>
//       <h2>onClick Event</h2>
//       <button onClick={handleClick}>click mee</button>
//     </>
//   )
// }

// const Card = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);

//   const handleCount = () => {
//     console.log("handleCount called");
//   };

//   const handleData = () => {
//     console.log("handleData called");
//   };

//   useEffect(() => {
//     handleCount();
//   },[count]);

//   useEffect(() => {
//     handleData();
//   },[data]);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setData(data + 1)}>Increase</button>
//     </>
//   );
// };

// export default Card;

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Counter", count);
//   }, [count]);

//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </>
//   );
// };

// export default Counter;

// const App = () => {
//   const handleClick = () => {
//     alert("Button Pressed");
//   };
//   return (
//     <>
//       <h2>onClick Example</h2>
//       <button onClick={handleClick}>Click me</button>
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
//       <h2>onChange Example</h2>
//       <input type="text" placeholder="Enter your text" onChange={handleChange} />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

// const App = () => {
//   const cars = ["BMW", "Audi", "Porsche", "Benz"]
//   return (
//     <>
//         <h2>List of German Cars</h2>
//       <ul>
//         {cars.map((cars,index) => (
//           <li key={index}>{cars}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// const App = ({title}) => {
//   return (
//     <h2>{title}</h2>
//   )
// }

// const Card = () => {
//   return (
//     <App title="introduction"/>
//   )

// }

// export default Card;

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count", count);
//   }, [count]);
//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </>
//   );
// };

// export default Counter;

// const App = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   return (
//     <>
//       <h2>onChange Example</h2>
//       <input
//         type="text"
//         placeholder="Enter your text"
//         onChange={handleChange}
//       />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

// const App = () => {
//   const items = ["Shoes", "Clothes", "Watches", "Sandals", "Phone"];

//   return (
//     <>
//       <h3>List of Items</h3>
//       <ul>
//         {items.map((items, index) => (
//           <li key={index}>{items}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null);

//     // har bar count update hote hi previous count store hojayega.
//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <h2>Previous Count : {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
//   };

//   export default Counter;

// STYLING AND CONTROLING INPUT FIELD WITH useRef.

// const App = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.value = "Hey there!";
//     inputRef.current.style.backgroundColor = "yellow";
//   };

//   const inputHandler = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <input type="text" placeholder="Enter your text" ref={inputRef} />
//       <button onClick={handleClick}>Control Input</button>
//       <button onClick={inputHandler}>Focus on input field</button>
//     </>
//   );
// };

// export default App;

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count",count);
//   },[count])

//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <button onClick={()=>setCount(count + 1)}>Increase</button>
//     </>
//   )

// }

// export default Counter;

// const App = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <>
//       <h2>onChange Example</h2>
//       <input
//         type="text"
//         placeholder="Enter your text"
//         onChange={handleChange}
//       />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

// const App = () => {
//   const bikes = ["BMW", "Honda", "Yamaha", "Suzuki", "Harley Davidson"];
//   return (
//     <>
//       <h2>List of bikes companies</h2>
//       <ul>
//         {bikes.map((bikes,index) => (
//           <li key={index}>{bikes}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <>
//       <h2>Counter : {count}</h2>
//       <h2>Previous Count : {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// };

// const App = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.value = "Hey There !";
//     inputRef.current.style.backgroundColor = "Pink";
//   };

//   const inputHandler = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input type="text" placeholder="Enter your text" ref={inputRef} />
//       <button onClick={handleClick}>Control Input</button>
//       <button onClick={inputHandler}>Focus on input</button>
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
//       <h2>onChange Example</h2>
//       <input type="text" placeholder="Enter your text" onChange={handleChange} />
//       <p>You typed : {text}</p>
//     </>
//   );
// };

// const App = () => {
//   const drinks = ["RedBull", "Coke", "Pepsi", "Monster Energy"];
//   return (
//     <>
//       <h2>List of drinks companies</h2>
//       <ul>
//         {drinks.map((drinks, index) => (
//           <li key={index}>{drinks}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null);

//   useEffect(() => {
//     prevCount.current = count;
//   },[count])
//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <h2>Previous Count : {prevCount.current}</h2>
//       <button onClick={()=>setCount(count + 1)}>Increase</button>
//     </>
//   );
// };

// export default Counter;

// const App = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.value = "Hey there boi";
//     inputRef.current.style.backgroundColor = "Orange";
//   };
//   const inputHandler = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <h2>useRef Example</h2>
//       <input type="text" placeholder="Enter your text" ref={inputRef} />
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={inputHandler}>focus on input field</button>
//     </>
//   );
// };

// const App = () => {
//   const cars = ["Audi", "Honda", "Toyota", "Mitsubishi Motors", "Ferrari"];
//   return (
//     <>
//       <h2>List of cars Companies</h2>
//           <ul>
//               {cars.map((cars,index) => (
//                   <li key={index}>{cars}</li>
//               ))}
//       </ul>
//     </>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);
//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <h2>Previous Count : {prevCount.current}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// };

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "Hey there mate.";
    inputRef.current.style.backgroundColor = "Pink";
  };

  const inputHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h2>useRef Example</h2>
      <input type="text" placeholder="Enter Your Text" ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
      <button onClick={inputHandler}>Focus on input</button>
    </>
  );
};

export default App;
