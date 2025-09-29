import { Link, Links, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Info from "./Info";
const App = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/info">Info</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </>
  );
};

export default App;
