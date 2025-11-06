import React, { useState } from "react";
import Child from "./Child";
const App = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <h2>Lifting State Example</h2>
            <Child name={name} handleChange={handleChange}/>
            <p>name : {name}</p>
        </>
    )
}

export default App;