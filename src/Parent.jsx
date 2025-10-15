import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <h1>Lifting State example</h1>
            <Child name={name} handleChange={handleChange} />
            <p>Your name : {name}</p>
        </>
    )
}

export default Parent;