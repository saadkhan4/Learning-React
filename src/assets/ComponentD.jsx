import { useContext } from "react";
import { ColorContext } from "../contexts";

const ComponentD = () => {

    const user = useContext(ColorContext);

  return (
    <div className="box4">
          <h1>Component D</h1>
          <h2>{`Bye ${user}`}</h2>
    </div>
  );
};

export default ComponentD;
