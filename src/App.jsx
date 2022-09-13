import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Members from "./pages/Members";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        {/* Landing Page - Home */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
