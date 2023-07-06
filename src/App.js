import "./App.css";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Register /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
