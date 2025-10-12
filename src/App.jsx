import useToggle from "./useToggle";

const App = () => {
  const [isOn, toggle] = useToggle(false);
  return (
    <div>
      <h1>{isOn ? "Light is ON" : "Light is OFF"}</h1>
      <button onClick={toggle}>Switch</button>
    </div>
  );
};

export default App;
